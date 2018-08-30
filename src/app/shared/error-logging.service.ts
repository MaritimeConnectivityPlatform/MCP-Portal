import { Inject, Injectable } from "@angular/core";
import { NotificationsService } from "angular2-notifications";
import { BugReportingService } from "../backend-api/identity-registry/services/bug-reporting.service";
import { BugReport } from "../backend-api/identity-registry/autogen/model/BugReport";
import { AuthService } from "../authentication/services/auth.service";
import { BugReportAttachment } from "../backend-api/identity-registry/autogen/model/BugReportAttachment";
import { McHttpService } from "../backend-api/shared/mc-http.service";
import { PortalUserError, UserError } from "./UserError";
import { ServerUnreachableError } from "./ServerUnreachableError";
import { ApiVersionService } from '../backend-api/shared/api-version.service';
import { Observable } from 'rxjs';

export interface MCErrorLoggerOptions {
	makeBugReportFromError: boolean;
}

export var MC_ERROR_LOGGER_OPTIONS: MCErrorLoggerOptions = {
	makeBugReportFromError: false
};

@Injectable()
export class ErrorLoggingService {

	public options: MCErrorLoggerOptions;
  constructor(private apiVersionService: ApiVersionService, private notificationService: NotificationsService, private bugreportService: BugReportingService, @Inject( MC_ERROR_LOGGER_OPTIONS ) options: MCErrorLoggerOptions) {
	  this.options = options;
  }

  public setApiVersionService(apiVersionService: ApiVersionService): void {
  	this.apiVersionService = apiVersionService;
  }

  public logError( error: any, showToUser:boolean ) : void {
    this.logErrorWithMessage(null, error, showToUser, false);
  }
	public logErrorWithMessage(message:string, err: any, showToUser:boolean, getApiVersions: boolean) : void {
  	let originalError = err;
		let isUserError = err instanceof UserError;
		if (isUserError && err.originalError) {
			originalError = err.originalError;
		}
  	if (this.isCachingError(message, originalError)) {
		  AuthService.handleCacheError();
		  return;
	  }
		this.sendToConsole(originalError);
		if (showToUser) {
			this.sendToUser(originalError);
		}

		let sendBugReport = true;
		if ( err instanceof PortalUserError) {
			sendBugReport = false;
		}	else if (isUserError) {
			sendBugReport = err.sendBugReport;
		}
		if (this.options.makeBugReportFromError && !IS_DEV && sendBugReport) {
		    if (getApiVersions) {
                this.sendToServer(message, originalError);
            } else {
		        this.sendToServerWithoutApiVersions(message, originalError);
            }
		}
	}

	private isCachingError(message?:string, error?:any) : boolean {
  	try {
	    if (message && message.indexOf("Error: Loading chunk") > -1) {
	      return true;
		  }
			if (error) {
	      if (error.message && error.message.indexOf("Error: Loading chunk") > -1) {
				  return true;
			  }
				if (error.stack && error.stack.indexOf("Error: Loading chunk") > -1) {
					return true;
				}
			}
	    return false;
	  } catch (e) {
  		return false;
	  }
	}

	private sendToConsole(error: any): void {
		if ( console && console.group && console.error ) {
			console.group("Maritime Connectivity Platform - Error logging");
			console.error(error);
			console.error( "Error message: ", error.message );
			console.error( "Error stack: ", error.stack );
			console.groupEnd();
		}
	}

	private sendToServer(message:string,error: any): void {
        let autoTag = '#AUTO';
        let subject = autoTag +" Auto-generated error";
        let errorString = '';

        let parallelObservables = [];
        parallelObservables.push(this.apiVersionService.getVersionOfIdentityRegistry().take(1));
        parallelObservables.push(this.apiVersionService.getVersionOfServiceRegistry().take(1));
        parallelObservables.push(this.apiVersionService.getVersionOfEndorsementService().take(1));

        Observable.forkJoin(parallelObservables).subscribe(results => {
            errorString += '**API Versions**:\nMIR: ' + results[0] + '\nMSR: ' + results[1] + '\nEndorsement Service: ' + results[2] + '\n\n';
            this.sendToServerForSure(message, subject, autoTag, error, errorString);
        }, () => {
            this.sendToServerForSure(message, subject, autoTag, error, errorString);
        });
	}

	private sendToServerWithoutApiVersions(message: string, error: any): void {
        let autoTag = '#AUTO';
        let subject = autoTag +" Auto-generated error";
        let errorString = '';

        this.sendToServerForSure(message, subject, autoTag, error, errorString);
    }

	private sendToServerForSure(message: string, subject: string, autoTag: string, error: any, errorString: string) {
        if ( message ) {
            subject = autoTag;
            if (error instanceof ServerUnreachableError) {
                let serverUnreachableTag = '#UNREACHABLE';
                subject += (' ' + serverUnreachableTag);
            }
            errorString += "**MESSAGE**: \n" + message + "\n\n";
            subject += (' ' + message);
        }

        try {
            if ( error.json() ) {
                errorString += "**ERROR JSON**: \n" + JSON.stringify(error.json()) + "\n\n";
            }
        }catch (err) {} // Error occured when trying to call error.json(). This is OK, because it's then probably a system error and no action is needed

        if ( error.message ) {
            errorString += "**ORIGINAL ERROR MESSAGE**: \n" + error.message + "\n\n";
        }
        if ( error.stack ) {
            errorString += "**ORIGINAL ERROR STACKTRACE**: \n" + error.stack + "\n\n";
        }
        if ( error ) {
            errorString += "**ERROR STRING**: \n" + error  + "\n\n";
        }

        if (error instanceof ServerUnreachableError) {
            errorString = "" + error.message;
        }
        if (errorString.length > 0) {
            let bugReport:BugReport = {subject:subject, description:errorString};
            bugReport.attachments = [this.createLogAttachement()];
            this.bugreportService.reportBug(bugReport).subscribe(
                _ => {
                    // Nothing should happen
                },
                err => {
                    // Error reporting error. Just log and ignore
                    console.log("Error when sending bug report: ", err);
                }
            );
        }
    }

    private createLogAttachement() : BugReportAttachment {
        let data = JSON.stringify(McHttpService.getHttpCallLog());

        return {data:window.btoa(data),mimetype:'text/json',name:'httpLog.json'};
    }

  private sendToUser(error: any): void {
    let orgError = error.originalError;
    if (!orgError) {
      orgError = error;
    }
    let message = orgError.message;
    if (!message) {
      message = '';
    }
    this.notificationService.error('Error', 'Unexpected error occurred:\n'+message);
  }
}
export var MC_ERROR_LOGGER_PROVIDERS = [
	{
		provide: MC_ERROR_LOGGER_OPTIONS,
		useValue: MC_ERROR_LOGGER_OPTIONS
	},
	ErrorLoggingService
];

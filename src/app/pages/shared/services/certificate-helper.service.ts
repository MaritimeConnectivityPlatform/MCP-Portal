import {Injectable, OnInit} from '@angular/core';
import {Certificate} from "../../../backend-api/identity-registry/autogen/model/Certificate";
import {CertificateViewModel} from "../components/view-models/CertificateViewModel";
import {CertificateRevocation} from "../../../backend-api/identity-registry/autogen/model/CertificateRevocation";
import RevokationReasonEnum = CertificateRevocation.RevokationReasonEnum;

export enum CertificateEntityType {
  Device,
  Organization,
  Service,
  User,
  Vessel
}

@Injectable()
export class CertificateHelperService implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

  public convertCertificatesToViewModels(certificates:Array<Certificate>): Array<CertificateViewModel> {
    let viewModels: Array<CertificateViewModel> = [];
    if (certificates && certificates.length > 0) {
      certificates.forEach(certificate => {
        viewModels.push(this.certificateViewModelFromCertificate(certificate));
      });
    }
    return viewModels;
  }

  public certificateViewModelFromCertificate(certificate:Certificate): CertificateViewModel {
    let certificateViewModel: CertificateViewModel = certificate;
    certificateViewModel.revokeReasonText = this.getRevokeReasonText(certificate.revokeReason);
    return certificateViewModel;
  }

  public getRevokeReasonText(revokeReason?:string):string {
    var reasonText = '';
    if (revokeReason) {
      reasonText = revokeReason;
      let revokeReasonEnum = RevokationReasonEnum[revokeReason];
      if (revokeReasonEnum) {
        reasonText = this.getRevokeReasonTextFromRevokationReason(revokeReasonEnum);
      }
    }
    return reasonText;
  }

  public getRevokeReasonTextFromRevokationReason(revokationReason:RevokationReasonEnum):string {
    var reasonText = '';
    switch (revokationReason) {
      case RevokationReasonEnum.aacompromise: {
        reasonText = 'AA compromised';
        break;
      }
      case RevokationReasonEnum.affiliationchanged: {
        reasonText = 'Afiliation changed';
        break;
      }
      case RevokationReasonEnum.cacompromise: {
        reasonText = 'CA compromised';
        break;
      }
      case RevokationReasonEnum.certificatehold: {
        reasonText = 'Certificate Hold';
        break;
      }
      case RevokationReasonEnum.cessationofoperation: {
        reasonText = 'Cessation of Operation';
        break;
      }
      case RevokationReasonEnum.keycompromise: {
        reasonText = 'Key compromised';
        break;
      }
      case RevokationReasonEnum.privilegewithdrawn: {
        reasonText = 'Privilege withdrawn';
        break;
      }
      case RevokationReasonEnum.removefromcrl: {
        reasonText = 'Remove from CRL';
        break;
      }
      case RevokationReasonEnum.superseded: {
        reasonText = 'Superseded';
        break;
      }
      case RevokationReasonEnum.unspecified: {
        reasonText = 'Unspecified';
        break;
      }
      default : {
        reasonText = RevokationReasonEnum[revokationReason];
      }
    }
    return reasonText;
  }
}

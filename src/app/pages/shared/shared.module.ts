import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {DesignsTableComponent} from "./components/designs-table/designs-table.component";
import {SpecificationsTableComponent} from "./components/specifications-table/specifications-table.component";
import {NgaModule} from "../../theme/nga.module";
import {InstancesTableComponent} from "./components/instances-table/instances-table.component";
import {SrViewModelService} from "../org-service-registry/shared/services/sr-view-model.service";
import {CertificatesTableComponent} from "./components/certificates-table/certificates-table.component";
import {CertificateHelperService} from "./services/certificate-helper.service";
import {OrganizationDetailsTableComponent} from "./components/organizaton-details-table/organization-details-table.component";
import {OrganizationViewModelService} from "./services/organization-view-model.service";
import {CertificateIssueNewComponent} from "./components/certificate-issue-new/certificate-issue-new.component";


@NgModule({
  imports: [
    CommonModule,
    NgaModule
  ],
  declarations: [
    DesignsTableComponent,
    InstancesTableComponent,
    SpecificationsTableComponent,
    CertificatesTableComponent,
    OrganizationDetailsTableComponent,
    CertificateIssueNewComponent
  ],
  exports: [
    OrganizationDetailsTableComponent,
    DesignsTableComponent,
    InstancesTableComponent,
    SpecificationsTableComponent,
    CertificatesTableComponent,
    CertificateIssueNewComponent
  ],
  providers: [
    SrViewModelService,
    CertificateHelperService,
    OrganizationViewModelService
  ]
})
export class SharedModule {
}

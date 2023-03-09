/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type ActionResult = object;

export interface TimeZones {
  TimeZoneID?: string;
  DisplayName?: string;
}

export interface NavigationLink {
  LinkID?: string;
  LinkType?: string;
  Enabled?: boolean;
  Link?: string;
}

export interface ODataResponseListViewAlert {
  "@odata.context"?: string;
  value?: ViewAlert[];
}

export interface ViewAlert {
  /** @format int64 */
  AlertID?: number;
  /** @format int64 */
  AlertTypeID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  Description?: string;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  ProformaInvoiceID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  SupplierID?: number;
  DocumentDescription?: string;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format date-time */
  CreationDate?: string;
  Info?: string;
  IsActive?: boolean;
  IsStatus?: boolean;
  /** @format int64 */
  RecipientID?: number;
  /** @format int64 */
  AlertRecipientID?: number;
}

export interface AlertType {
  /** @format int64 */
  AlertTypeID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  ResourceName: string;
  Description?: string;
}

export interface AlertPolicy {
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  AlertTypeID: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Description: string;
  Rule?: string;
  IsActive: boolean;
  PolicyRule?: object;
}

export interface Alert {
  /** @format int64 */
  AlertID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  SupplierID?: number;
  /** @format date-time */
  CreationDate?: string;
  Info?: string;
  IsActive?: boolean;
  /** @format int64 */
  ProformaInvoiceID?: number;
}

export interface AlertPolicySubscription {
  /** @format int64 */
  AlertPolicySubscriptionID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  ApprovalID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  RoleID?: number;
}

export interface AlertPolicyRuleHistory {
  /** @format int64 */
  AlertPolicyRuleHistoryID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface AlertPolicySubscriberHistory {
  /** @format int64 */
  AlertPolicySubscriberHistoryID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  ApprovalID?: number;
  /** @format int64 */
  SubscribedEmployeeID?: number;
  /** @format int64 */
  RoleTypeID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
}

export interface AlertNotificationHistory {
  /** @format int64 */
  AlertNotificationHistoryID?: number;
  /** @format int64 */
  AlertPolicyID?: number;
  /** @format int64 */
  AlertRecipientID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  ProformaInvoiceID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  RequestID?: number;
}

export interface Invoice {
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  CurrentStateID: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  InvoiceRef: string;
  /** @format date-time */
  InvoiceDate: string;
  /** @format int64 */
  SupplierID: number;
  /** @format int64 */
  ProcessorID: number;
  /** @format int64 */
  CompanyID: number;
  TypeColumns?: string;
  CustomColumns?: string;
  /** @format int64 */
  InvoiceMpID?: number;
  ExIsError?: boolean;
  ExInvoiceRef?: string;
  /** @format double */
  ItemTaxTotal?: number;
  IsItemTax?: boolean;
  /** @format date-time */
  PostingDate: string;
}

export interface PO {
  FormattedPurchaseDate?: string;
  ExclOrderAmount?: string;
  TaxOrderAmount?: string;
  InclOrderAmount?: string;
  RequestTitle?: string;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CurrentStateID: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Reference?: string;
  /** @format int64 */
  CreatedByID: number;
  /** @format date-time */
  CreationDate: string;
  /** @format int64 */
  CompanyID: number;
  /** @format int64 */
  POCompanyID: number;
  /** @format int64 */
  SupplierID: number;
  /** @format int64 */
  POSupplierID: number;
  /** @format int64 */
  PhysicalLocationID?: number;
  /** @format int64 */
  POPhysicalLocationID?: number;
  /** @format int64 */
  InvoiceLocationID?: number;
  /** @format int64 */
  POInvoiceLocationID?: number;
  /** @format int64 */
  PurchaserID?: number;
  /** @format int64 */
  POPurchaserID?: number;
  /** @format date-time */
  PurchaseDate?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Comments?: string;
  ExReference?: string;
  ExIsError?: boolean;
  /** @format date-time */
  EmailDate?: string;
  IsEmailError?: boolean;
  /** @format int64 */
  ReportFileID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  Revision?: string;
  IsRevisionSubmitted?: boolean;
  /** @format int32 */
  RevisionNumber?: number;
  RecipientInfo?: string;
}

export interface Request {
  TypeColumnList?: CustomColumn[];
  CustomColumnList?: CustomColumn[];
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  CurrentStateID: number;
  /** @format int64 */
  ReferenceNumber?: number;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Title: string;
  /** @format int64 */
  RequestorID: number;
  /** @format int64 */
  AssistantID?: number;
  /** @format int64 */
  CompanyID: number;
  TypeColumns?: string;
  CustomColumns?: string;
  ExIsError?: boolean;
  /**
   * @minLength 0
   * @maxLength 40
   */
  ExReferenceNumber?: string;
  /** @format int64 */
  RevisedPOID?: number;
}

export interface Supplier {
  CustomColumnList?: CustomColumn[];
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 52
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Contact?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PhoneNumber?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  FaxNumber?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  RegistrationNumber?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  TaxRegistrationNumber?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  BankAccountNumber?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  BankingInfo?: string;
  /**
   * @minLength 0
   * @maxLength 60
   */
  PaymentTerms?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address1?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address2?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address3?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address4?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Locality?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Region?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PostalCode?: string;
  /**
   * @minLength 0
   * @maxLength 60
   */
  Country?: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  Coordinates?: string;
  IsActive: boolean;
  /** @format int64 */
  CreatedByID?: number;
  /** @format int64 */
  CurrentStateID: number;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  FxSupplierID?: string;
  IsTravelServiceProvider?: boolean;
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  CategoryID1?: number;
  /** @format int64 */
  CategoryID2?: number;
  /** @format int64 */
  CategoryID3?: number;
  /** @format int64 */
  ApprovalID?: number;
  IsInvoiceLink: boolean;
  /** @format int64 */
  CurrencyID?: number;
  /** @format int64 */
  TaxRateID?: number;
  /**
   * @minLength 0
   * @maxLength 4096
   */
  POEmail?: string;
}

export interface AlertRecipient {
  /** @format int64 */
  AlertRecipientID?: number;
  /** @format int64 */
  AlertID?: number;
  /** @format int64 */
  RecipientID?: number;
  /** @format date-time */
  CreationDate?: string;
  /** @format int64 */
  AcknowledgedByID?: number;
  /** @format date-time */
  AcknowledgedDate?: string;
}

export interface ProformaInvoice {
  SubmitButtonList?: CommandButton[];
  SubmitLinkList?: CommandButton[];
  /** @format int64 */
  ProformaInvoiceID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CurrentStateID: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  InvoiceRef: string;
  /** @format int64 */
  SupplierID: number;
  /** @format int64 */
  CompanyID: number;
  /** @format date-time */
  InvoiceDate: string;
  /** @format decimal */
  InclCostSrc: number;
  /** @format int64 */
  CurrencyID: number;
  /** @format int64 */
  CreatedByID: number;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  POReference?: string;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  Remarks?: string;
  /** @format int64 */
  InvoiceID?: number;
}

export interface Employee {
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  TenantID: number;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  FxUserID?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  FirstName: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  LastName: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  EmployeeRef?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email?: string;
  IsAway?: boolean;
  TimeZoneID?: string;
  IsActive?: boolean;
  /** @format int64 */
  DefaultCompanyID?: number;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  AADUserID?: string;
  LDAPUserID?: string;
  /** @format int64 */
  LocationID?: number;
  /** @format int64 */
  DefaultInvoiceLocationID?: number;
  /** @format int64 */
  DefaultPhysicalLocationID?: number;
}

export interface Role {
  /** @format int64 */
  RoleID: number;
  ResourceName?: string;
}

export interface Approval {
  /** @format int64 */
  ApprovalID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Name: string;
  IsActive: boolean;
  IsRequest?: boolean;
  IsInvoice?: boolean;
  IsSupplier?: boolean;
}

export interface Company {
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  RegistrationNumber?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  TaxRegistrationNumber?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  POReferenceMask: string;
  IsActive: boolean;
  /** @format int64 */
  CurrencyID: number;
  Terms?: string;
  POHasAllocation: boolean;
  POHasDistributionList: boolean;
  /** @format int32 */
  IsInvoiceLink: number;
  /** @format int64 */
  TaxRateID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PORevisionMask: string;
  /** @format int64 */
  POTemplateID?: number;
}

export interface CurrentState {
  /** @format int64 */
  CurrentStateID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  ResourceName: string;
  Description?: string;
}

export interface DocumentFile {
  /** @format int64 */
  DocumentFileID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  InvoiceItemID?: number;
  /** @format int64 */
  FileID?: number;
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  ReceiptID?: number;
  /** @format int64 */
  InvoiceMpID?: number;
  /** @format int64 */
  ProformaInvoiceID?: number;
}

export interface DocumentNote {
  /** @format int64 */
  DocumentNoteID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format date-time */
  CreationDate?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  NoteText: string;
  /** @format int64 */
  EmployeeID: number;
  /** @format int64 */
  CurrentStateID: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  SupplierID?: number;
}

export interface RequestTypeBase {
  Description?: string;
  /** @format int64 */
  RequestTypeID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  ResourceName: string;
  TypeColumns?: string;
  Workflow?: string;
  IsActive: boolean;
  WorkflowJSON?: string;
}

export interface InvoiceHistory {
  /** @format int64 */
  InvoiceHistoryID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface InvoiceItem {
  /** @format int64 */
  InvoiceItemID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /**
   * @minLength 0
   * @maxLength 120
   */
  Description: string;
  /** @format double */
  Quantity: number;
  /** @format double */
  UnitCostSrc: number;
  IsInclusive: boolean;
  /** @format int64 */
  CurrencyID: number;
  /** @format double */
  ExchangeRate: number;
  /** @format int64 */
  TaxRateID: number;
  /** @format double */
  TaxAmount: number;
  /** @format int64 */
  POItemID?: number;
  TypeColumns?: string;
  CustomColumns?: string;
  /** @format double */
  ExclUnitCostSrc?: number;
  /** @format double */
  UnitTaxSrc?: number;
  /** @format double */
  InclUnitCostSrc?: number;
  /** @format double */
  ItemTaxSrc?: number;
  /** @format double */
  ExclItemCostSrc?: number;
  /** @format double */
  InclItemCostSrc?: number;
  /** @format double */
  ExclUnitCost?: number;
  /** @format double */
  UnitTax?: number;
  /** @format double */
  InclUnitCost?: number;
  /** @format double */
  ItemTax?: number;
  /** @format double */
  ExclItemCost?: number;
  /** @format double */
  InclItemCost?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  ApprovalID?: number;
  FileUploadFileID?: string;
  BudgetColumnList?: BudgetColumn[];
}

export interface ExportDocument {
  /** @format int64 */
  ExportDocumentID?: number;
  /** @format int64 */
  ExportID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  POID?: number;
}

export interface DocumentAssignment {
  /** @format int64 */
  DocumentAssignmentID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  AssignmentStateID: number;
  /** @format int64 */
  FirstAssignorID?: number;
  /** @format int64 */
  AssignorID?: number;
  /** @format int64 */
  AssigneeID: number;
  HistoryNote?: string;
  /** @format int64 */
  OldAssigneeID?: number;
}

export interface InvoiceMp {
  /** @format int64 */
  InvoiceMpID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  CreationDate?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  InvoiceRef?: string;
  /** @format date-time */
  InvoiceDate?: string;
  /** @format decimal */
  InclTotalCostSrc?: number;
  /** @format int64 */
  ExInvoiceID?: number;
  ExCreatedByName?: string;
  /** @format int64 */
  ExCompanyID?: number;
  ExCompanyName?: string;
  ExCurrencyCode?: string;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  FxSupplierID?: string;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  ExApplicationID?: string;
  /** @format int64 */
  ExTenantID?: number;
  SubmitButtonList?: CommandButton[];
  SubmitLinkList?: CommandButton[];
}

export interface DocumentApproval {
  /** @format int64 */
  DocumentApprovalID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  ApprovalID?: number;
  /** @format int32 */
  ApprovalOrder?: number;
  /** @format int64 */
  EmployeeID?: number;
  IsFinal?: boolean;
}

export interface CommandButton {
  ID?: string;
  Text?: string;
  DescriptionText?: string;
  /** @format int32 */
  UserAction?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33;
  ButtonStyle?: string;
  Icon?: string;
  LinkType?: string;
  Enabled?: boolean;
  Link?: string;
}

export interface CustomColumn {
  Name?: string;
  /** @format int32 */
  DataType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** @format int32 */
  MaxLength?: number;
  Required?: boolean;
  Label?: string;
  Description?: string;
  /** @format int32 */
  ControlType?: 0 | 1 | 2 | 3 | 4 | 5;
  ReadOnly?: boolean;
  /** @format int32 */
  Colspan?: number;
  /** @format int32 */
  CtrlColspan?: number;
  DefaultValue?: object;
  IsDisplayed?: boolean;
  /** @format int64 */
  LookupID?: number;
  /** @format int64 */
  BuiltinID?: number;
  LookupValue?: string;
  Value?: object;
}

export interface Location {
  /** @format int64 */
  LocationID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address1?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address2?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address3?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Address4?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Locality?: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Region?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PostalCode?: string;
  /**
   * @minLength 0
   * @maxLength 60
   */
  Country?: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  Coordinates?: string;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Contact?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PhoneNumber?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  FaxNumber?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email?: string;
  IsActive: boolean;
  /** @format int64 */
  TaxRateID?: number;
}

export interface POCompany {
  /** @format int64 */
  POCompanyID?: number;
  Name?: string;
}

export interface POLocation {
  Description?: string;
  LongDescription?: string;
  /** @format int64 */
  POLocationID?: number;
  Name?: string;
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  Locality?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Coordinates?: string;
  Contact?: string;
  PhoneNumber?: string;
  FaxNumber?: string;
  Email?: string;
}

export interface POPurchaser {
  /** @format int64 */
  POPurchaserID: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  PhoneNumber?: string;
  /**
   * @minLength 0
   * @maxLength 20
   */
  FaxNumber?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email?: string;
}

export interface POSupplier {
  Description?: string;
  LongDescription?: string;
  /** @format int64 */
  POSupplierID?: number;
  Name?: string;
  Contact?: string;
  PhoneNumber?: string;
  FaxNumber?: string;
  Email?: string;
  RegistrationNumber?: string;
  TaxRegistrationNumber?: string;
  BankAccountNumber?: string;
  BankingInfo?: string;
  PaymentTerms?: string;
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  Locality?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Coordinates?: string;
  POEmail?: string;
}

export interface POHistory {
  /** @format int64 */
  POHistoryID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface POItem {
  CanLink?: boolean;
  /** @format int64 */
  POItemID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  PODeliveryLocationID?: number;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Description: string;
  /** @format decimal */
  Quantity: number;
  /** @format decimal */
  UnitCostSrc: number;
  IsInclusive?: boolean;
  /** @format int64 */
  CurrencyID: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  CurrencyCode: string;
  /** @format decimal */
  ExchangeRate: number;
  /** @format int64 */
  TaxRateID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  TaxRateCode?: string;
  /** @format decimal */
  TaxAmount: number;
  /** @format double */
  ExclUnitCostSrc?: number;
  /** @format double */
  UnitTaxSrc?: number;
  /** @format double */
  InclUnitCostSrc?: number;
  /** @format decimal */
  ItemTaxSrc?: number;
  /** @format double */
  ExclItemCostSrc?: number;
  /** @format double */
  InclItemCostSrc?: number;
  /** @format double */
  ExclUnitCost?: number;
  /** @format double */
  UnitTax?: number;
  /** @format double */
  InclUnitCost?: number;
  /** @format double */
  ItemTax?: number;
  /** @format double */
  ExclItemCost?: number;
  /** @format double */
  InclItemCost?: number;
  Info?: string;
  IsItemBudgetEdit?: boolean;
}

export interface PO2Marketplace {
  /** @format int64 */
  POID?: number;
  FileName?: string;
  ContentType?: string;
  /** @format byte */
  FileImage?: string;
  /** @format date-time */
  CreationDate?: string;
  /** @format date-time */
  TransferDate?: string;
  /** @format int32 */
  ErrorCount?: number;
  /** @format int64 */
  CurrentStateID?: number;
}

export interface InvoiceMpPO {
  /** @format int64 */
  InvoiceMpID?: number;
  /** @format int64 */
  POID?: number;
  /** @format int64 */
  ExPOID?: number;
}

export interface UniquePOItem {
  /** @format int64 */
  RequestItemID?: number;
  /** @format date-time */
  DateStamp?: string;
}

export interface RequestHistory {
  /** @format int64 */
  RequestHistoryID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface RequestItem {
  FileUploadFileID?: string;
  TypeColumnList?: CustomColumn[];
  CustomColumnList?: CustomColumn[];
  BudgetColumnList?: BudgetColumn[];
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  RequestID?: number;
  /**
   * @minLength 0
   * @maxLength 120
   */
  Description: string;
  /** @format date-time */
  DateStamp?: string;
  /** @format double */
  Quantity: number;
  /** @format double */
  UnitCostSrc: number;
  IsInclusive: boolean;
  /** @format int64 */
  CurrencyID: number;
  /** @format double */
  ExchangeRate: number;
  /** @format int64 */
  TaxRateID?: number;
  /** @format double */
  TaxAmount: number;
  /** @format int64 */
  ApprovalID?: number;
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  DeliveryLocationID?: number;
  TypeColumns?: string;
  CustomColumns?: string;
  /** @format double */
  ExclUnitCostSrc?: number;
  /** @format double */
  UnitTaxSrc?: number;
  /** @format double */
  InclUnitCostSrc?: number;
  /** @format double */
  ItemTaxSrc?: number;
  /** @format double */
  ExclItemCostSrc?: number;
  /** @format double */
  InclItemCostSrc?: number;
  /** @format double */
  ExclUnitCost?: number;
  /** @format double */
  UnitTax?: number;
  /** @format double */
  InclUnitCost?: number;
  /** @format double */
  ItemTax?: number;
  /** @format double */
  ExclItemCost?: number;
  /** @format double */
  InclItemCost?: number;
  /** @format int64 */
  RequestorID?: number;
  /** @format int64 */
  ServiceSupplierID?: number;
  /** @format int64 */
  RevisedPOItemID?: number;
}

export interface ViewRequestLastDate {
  /** @format int64 */
  RequestID?: number;
  /** @format date-time */
  Create?: string;
  /** @format date-time */
  Assign?: string;
  /** @format date-time */
  Quote?: string;
  /** @format date-time */
  Review?: string;
  /** @format date-time */
  Submit?: string;
  /** @format date-time */
  Recall?: string;
  /** @format date-time */
  Reject?: string;
  /** @format date-time */
  Approve?: string;
  /** @format date-time */
  Purchase?: string;
  /** @format date-time */
  Close?: string;
}

export interface SupplierHistory {
  /** @format int64 */
  SupplierHistoryID?: number;
  /** @format int64 */
  SupplierID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
  /** @format int64 */
  CurrentStateID?: number;
}

export interface LookupItem {
  /** @format int64 */
  LookupItemID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  LookupID?: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Value: string;
  /** @format int64 */
  FilterByCompanyID?: number;
  /** @format int64 */
  FilterByLookupItemID?: number;
  IsActive: boolean;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Custom1?: string;
}

export interface Currency {
  /** @format int64 */
  CurrencyID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  IsActive: boolean;
}

export interface TaxRate {
  /** @format int64 */
  TaxRateID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  /** @format decimal */
  Value: number;
  IsDefault: boolean;
  IsActive: boolean;
}

export interface ProformaInvoiceHistory {
  /** @format int64 */
  ProformaInvoiceHistoryID?: number;
  /** @format int64 */
  ProformaInvoiceID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface ProcessRole {
  /** @format int64 */
  IsStatus?: number;
  /** @format int64 */
  RequestTypeID: number;
  /** @format int64 */
  EmployeeID: number;
  /** @format int64 */
  RoleID: number;
}

export interface RequestItemHistory {
  /** @format int64 */
  RequestItemHistoryID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface RequestTypeWorkflow {
  /** @format int64 */
  RequestTypeWorkflowID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  Description: string;
  Workflow?: string;
  /** @format int64 */
  CreatedByID: number;
  /** @format date-time */
  CreationDate?: string;
  /** @format int64 */
  ModifiedByID?: number;
  /** @format date-time */
  ModifiedDate?: string;
  /** @format int64 */
  ActivatedByID?: number;
  /** @format date-time */
  ActivatedDate?: string;
  IsValid: boolean;
  IsActive: boolean;
  WorkflowJSON?: string;
}

export interface Invitation {
  /** @format int64 */
  InvitationID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  InviterID?: number;
  /** @format date-time */
  DateStamp?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email: string;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  FxUserID?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Roles?: string;
  InviterName?: string;
  InviterEmail?: string;
  IsStatus?: boolean;
  Note?: string;
  AllowDuplicate?: boolean;
}

export interface Export {
  /** @format int64 */
  ExportID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CreatedByID: number;
  /** @format date-time */
  CreationDate?: string;
  /** @format int64 */
  RequestTypeID: number;
  IsActive: boolean;
  HasRequest?: boolean;
  HasPO?: boolean;
  HasInvoice?: boolean;
  Description?: string;
  CreatedByName?: string;
  RequestTypeName?: string;
  HistoryNote?: string;
  HasReceipt?: boolean;
}

export interface ExportHistory {
  /** @format int64 */
  ExportHistoryID?: number;
  /** @format int64 */
  ExportID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  Note?: string;
}

export interface ReceiptHistory {
  /** @format int64 */
  ReceiptHistoryID?: number;
  /** @format int64 */
  ReceiptID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface InvoiceMpHistory {
  /** @format int64 */
  InvoiceMpHistoryID?: number;
  /** @format int64 */
  InvoiceMpID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  Note?: string;
}

export interface InvoiceMp2Marketplace {
  /** @format int64 */
  InvoiceMpID?: number;
  /** @format date-time */
  CreationDate?: string;
  /** @format date-time */
  ActionDate?: string;
  /** @format date-time */
  TransferDate?: string;
  /** @format int32 */
  ErrorCount?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format int64 */
  EmployeeID?: number;
}

export interface InvoiceItemHistory {
  /** @format int64 */
  InvoiceItemHistoryID?: number;
  /** @format int64 */
  InvoiceItemID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface Approver {
  /** @format int64 */
  ApproverID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  ApprovalID: number;
  /** @format int64 */
  EmployeeID: number;
  /** @format int32 */
  ApprovalOrder: number;
  CanEditCore?: boolean;
  CanEditBudget?: boolean;
  CanEditCustom?: boolean;
  Rule?: string;
  IsApprover?: boolean;
  PolicyRule?: object;
  Proxies?: Employee[];
}

export interface Receipt {
  CustomColumnList?: CustomColumn[];
  /** @format int64 */
  ReceiptID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  POItemID?: number;
  /** @format decimal */
  Quantity: number;
  /** @format decimal */
  UnitCostSrc: number;
  IsActive: boolean;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  DeliveryNoteNumber?: string;
  /** @format date-time */
  DateReceived: string;
  /** @format int64 */
  ReceiverID: number;
}

export interface ReportFile {
  /** @format int64 */
  ReportFileID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  ReadyDate?: string;
  FileName?: string;
  ContentType?: string;
  /** @format byte */
  FileImage?: string;
  /** @format date-time */
  CreationDate?: string;
  IsError?: boolean;
  /** @format int32 */
  ReportAction?: number;
  /** @format int64 */
  DocumentTypeID?: number;
  FileCulture?: string;
  /** @format int64 */
  DocumentID?: number;
}

export interface EmployeeHistory {
  /** @format int64 */
  EmployeeHistoryID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
  /** @format int64 */
  CurrentUserID?: number;
}

export interface ApprovalHistory {
  /** @format int64 */
  ApprovalHistoryID?: number;
  /** @format int64 */
  ApprovalID?: number;
  /** @format int64 */
  CurrentUserID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface CostCenter {
  /** @format int64 */
  CostCenterID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CostCenterMaskID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  GLSegmentID?: number;
}

export interface CompanyHistory {
  /** @format int64 */
  CompanyHistoryID?: number;
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface CompanyLocationHistory {
  /** @format int64 */
  CompanyLocationHistoryID?: number;
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface InvitationHistory {
  /** @format int64 */
  InvitationHistoryID?: number;
  /** @format int64 */
  InvitationID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface CostCenterMaskHistory {
  /** @format int64 */
  CostCenterMaskHistoryID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface CurrencyHistory {
  /** @format int64 */
  CurrencyHistoryID?: number;
  /** @format int64 */
  CurrencyID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface ExchangeRateHistory {
  /** @format int64 */
  ExchangeRateHistoryID?: number;
  /** @format int64 */
  CurrencyID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface FinancialPeriodHistory {
  /** @format int64 */
  FinancialPeriodHistoryID?: number;
  /** @format int64 */
  FinancialYearID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface FinancialYearHistory {
  /** @format int64 */
  FinancialYearHistoryID?: number;
  /** @format int64 */
  FinancialYearID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface GLAccountHistory {
  /** @format int64 */
  GLAccountHistoryID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface GLCodeMaskHistory {
  /** @format int64 */
  GLCodeMaskHistoryID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface GLSegmentHistory {
  /** @format int64 */
  GLSegmentHistoryID?: number;
  /** @format int64 */
  GLSegmentNameID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface GLSegmentNameHistory {
  /** @format int64 */
  GLSegmentNameHistoryID?: number;
  /** @format int64 */
  GLSegmentNameID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface LocationHistory {
  /** @format int64 */
  LocationHistoryID?: number;
  /** @format int64 */
  LocationID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface LookupHistory {
  /** @format int64 */
  LookupHistoryID?: number;
  /** @format int64 */
  LookupID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface LookupItemHistory {
  /** @format int64 */
  LookupItemHistoryID?: number;
  /** @format int64 */
  LookupID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface TaxRateHistory {
  /** @format int64 */
  TaxRateHistoryID?: number;
  /** @format int64 */
  TaxRateID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface ClosePolicyHistory {
  /** @format int64 */
  ClosePolicyHistoryID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface BudgetFieldHistory {
  /** @format int64 */
  BudgetFieldHistoryID?: number;
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface CustomFieldHistory {
  /** @format int64 */
  CustomFieldHistoryID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface TenantHistory {
  /** @format int64 */
  TenantHistoryID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface RequestTypeWorkflowHistory {
  /** @format int64 */
  RequestTypeWorkflowHistoryID?: number;
  /** @format int64 */
  RequestTypeWorkflowID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface BudgetHistory {
  /** @format int64 */
  BudgetHistoryID?: number;
  /** @format int64 */
  FinancialYearID?: number;
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Note?: string;
  Info?: string;
}

export interface CAApproval {
  /** @format int64 */
  CAApprovalID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  /**
   * @minLength 0
   * @maxLength 512
   */
  Name: string;
  IsActive?: boolean;
}

export interface CAApprovalHistory {
  /** @format int64 */
  CAApprovalHistoryID?: number;
  /** @format int64 */
  CAApprovalID?: number;
  /** @format int64 */
  EmployeeID?: number;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
  Info?: string;
}

export interface ItemBudgetApproval {
  /** @format int64 */
  ItemBudgetApprovalID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  InvoiceItemID?: number;
  /** @format int64 */
  CostCenterMaskID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  CostCenterID?: number;
  /** @format int64 */
  ApprovalID?: number;
}

export interface GLCodeMask {
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLSegmentNameID_01: number;
  /** @format int64 */
  GLSegmentNameID_02?: number;
  /** @format int64 */
  GLSegmentNameID_03?: number;
  /** @format int64 */
  GLSegmentNameID_04?: number;
  /** @format int64 */
  GLSegmentNameID_05?: number;
  /** @format int64 */
  GLSegmentNameID_06?: number;
  /** @format int64 */
  GLSegmentNameID_07?: number;
  /** @format int64 */
  GLSegmentNameID_08?: number;
  /** @format int64 */
  GLSegmentNameID_09?: number;
  /** @format int64 */
  GLSegmentNameID_10?: number;
  /** @format int64 */
  GLSegmentNameID_11?: number;
  /** @format int64 */
  GLSegmentNameID_12?: number;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_01?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_02?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_03?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_04?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_05?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_06?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_07?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_08?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_09?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_10?: string;
  /**
   * @minLength 0
   * @maxLength 1
   */
  Separator_11?: string;
  IsDynamic: boolean;
  IsActive: boolean;
  IsLinkToCompany: boolean;
  IsImportedActuals: boolean;
  UseEmployeeCAA: boolean;
  /** @format int64 */
  DefaultApprovalID?: number;
}

export interface CompanyLocation {
  /** @format int64 */
  CompanyID: number;
  /** @format int64 */
  LocationID: number;
  /** @format int64 */
  LocationTypeID: number;
}

export interface GLSegment {
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLSegmentNameID: number;
  /**
   * @minLength 0
   * @maxLength 52
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 120
   */
  Name: string;
  IsActive: boolean;
  /** @format int64 */
  CompanyID?: number;
}

export interface ReportLayout {
  /** @format int64 */
  ReportID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CompanyID?: number;
  /** @format int64 */
  DocumentTypeID?: number;
  DisplayName?: string;
  /** @format byte */
  LayoutData?: string;
  IsActive?: boolean;
}

export interface ViewToBeApproved {
  /** @format int64 */
  ID?: number;
  Reference?: string;
  /** @format date-time */
  DateStamp?: string;
  Description?: string;
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  OwnerID?: number;
  Owner?: string;
  /** @format int64 */
  AssistantID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format int64 */
  CompanyID?: number;
  /** @format double */
  TotalCost?: number;
  /** @format date-time */
  CreatedDate?: string;
  /** @format date-time */
  SubmittedDate?: string;
  ApprovalGroups?: string;
}

export interface File {
  /** @format int64 */
  FileID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 260
   */
  FileName: string;
  /** @format date-time */
  CreationDate?: string;
  /** @format date-time */
  ModifiedDate?: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  ContentType: string;
}

export interface RequestItemTypeBase {
  Description?: string;
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  RequestTypeID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  ResourceName: string;
  TypeColumns?: string;
  IsActive: boolean;
}

export interface RequestType {
  ResourceName?: string;
  RequestTypeName?: string;
  CustomColumnSchema?: CustomColumn[];
  TypeColumnSchema?: CustomColumn[];
  /** @format int64 */
  RequestTypeID?: number;
  /** @format int64 */
  TenantID?: number;
  CustomColumns?: string;
  IsActive: boolean;
  /** @format int32 */
  AutoCloseType: number;
  /** @format int32 */
  CloseOlderThan: number;
  HasIWSPolicy?: boolean;
}

export interface ItemBudget {
  /** @format int64 */
  ItemBudgetID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  InvoiceItemID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
}

export interface ViewInvoiceItemGL {
  /** @format int64 */
  ItemBudgetID?: number;
  /** @format int64 */
  InvoiceID?: number;
  /** @format int64 */
  InvoiceItemID?: number;
  GLAccountCode?: string;
  GLAccountName?: string;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  CompanyID?: number;
  GLCode?: string;
  FullName?: string;
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  GLSegmentID_01?: number;
  Separator_01?: string;
  /** @format int64 */
  GLSegmentID_02?: number;
  Separator_02?: string;
  /** @format int64 */
  GLSegmentID_03?: number;
  Separator_03?: string;
  /** @format int64 */
  GLSegmentID_04?: number;
  Separator_04?: string;
  /** @format int64 */
  GLSegmentID_05?: number;
  Separator_05?: string;
  /** @format int64 */
  GLSegmentID_06?: number;
  Separator_06?: string;
  /** @format int64 */
  GLSegmentID_07?: number;
  Separator_07?: string;
  /** @format int64 */
  GLSegmentID_08?: number;
  Separator_08?: string;
  /** @format int64 */
  GLSegmentID_09?: number;
  Separator_09?: string;
  /** @format int64 */
  GLSegmentID_10?: number;
  Separator_10?: string;
  /** @format int64 */
  GLSegmentID_11?: number;
  Separator_11?: string;
  /** @format int64 */
  GLSegmentID_12?: number;
  IsActive?: boolean;
  CompanyCode?: string;
  Code_01?: string;
  Code_02?: string;
  Code_03?: string;
  Code_04?: string;
  Code_05?: string;
  Code_06?: string;
  Code_07?: string;
  Code_08?: string;
  Code_09?: string;
  Code_10?: string;
  Code_11?: string;
  Code_12?: string;
  Name_01?: string;
  Name_02?: string;
  Name_03?: string;
  Name_04?: string;
  Name_05?: string;
  Name_06?: string;
  Name_07?: string;
  Name_08?: string;
  Name_09?: string;
  Name_10?: string;
  Name_11?: string;
  Name_12?: string;
  /** @format int64 */
  GLSegmentNameID_01?: number;
  /** @format int64 */
  GLSegmentNameID_02?: number;
  /** @format int64 */
  GLSegmentNameID_03?: number;
  /** @format int64 */
  GLSegmentNameID_04?: number;
  /** @format int64 */
  GLSegmentNameID_05?: number;
  /** @format int64 */
  GLSegmentNameID_06?: number;
  /** @format int64 */
  GLSegmentNameID_07?: number;
  /** @format int64 */
  GLSegmentNameID_08?: number;
  /** @format int64 */
  GLSegmentNameID_09?: number;
  /** @format int64 */
  GLSegmentNameID_10?: number;
  /** @format int64 */
  GLSegmentNameID_11?: number;
  /** @format int64 */
  GLSegmentNameID_12?: number;
  GLStructureName?: string;
  GLSegmentName_01?: string;
  GLSegmentName_02?: string;
  GLSegmentName_03?: string;
  GLSegmentName_04?: string;
  GLSegmentName_05?: string;
  GLSegmentName_06?: string;
  GLSegmentName_07?: string;
  GLSegmentName_08?: string;
  GLSegmentName_09?: string;
  GLSegmentName_10?: string;
  GLSegmentName_11?: string;
  GLSegmentName_12?: string;
}

export interface BudgetColumn {
  /** @format int64 */
  ItemBudgetID?: number;
  IsLinkToCompany?: boolean;
  IsDynamic?: boolean;
  /** @format int64 */
  GLCodeMaskID?: number;
  Label?: string;
  Description?: string;
  Required?: boolean;
  /** @format int32 */
  Colspan?: number;
  RuleID?: string;
  /** @format int64 */
  GLAccountID?: number;
  SegmentNameID?: number[];
  SegmentName?: string[];
  SegmentID?: number[];
  SegmentValue?: string[];
  viewGLCodes?: ViewGLCode[];
  GLSegments?: GLSegment[];
  ApproveCC?: ApproveCCInfo;
  HasApproveCC?: boolean;
}

export interface CatalogItem {
  /** @format int64 */
  CatalogItemID?: number;
  /** @format int64 */
  RequestItemID?: number;
  /** @format int64 */
  ExProductID?: number;
  /** @format int64 */
  ExProductVariantID?: number;
  Product?: string;
  ProductVariant?: string;
}

export interface ViewRequestItemGL {
  /** @format int64 */
  ItemBudgetID?: number;
  /** @format int64 */
  RequestID?: number;
  /** @format int64 */
  RequestItemID?: number;
  GLAccountCode?: string;
  GLAccountName?: string;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  CompanyID?: number;
  CompanyCode?: string;
  GLCode?: string;
  FullName?: string;
  /** @format int64 */
  GLCodeMaskID?: number;
  Code_01?: string;
  Separator_01?: string;
  Code_02?: string;
  Separator_02?: string;
  Code_03?: string;
  Separator_03?: string;
  Code_04?: string;
  Separator_04?: string;
  Code_05?: string;
  Separator_05?: string;
  Code_06?: string;
  Separator_06?: string;
  Code_07?: string;
  Separator_07?: string;
  Code_08?: string;
  Separator_08?: string;
  Code_09?: string;
  Separator_09?: string;
  Code_10?: string;
  Separator_10?: string;
  Code_11?: string;
  Separator_11?: string;
  Code_12?: string;
  Name_01?: string;
  Name_02?: string;
  Name_03?: string;
  Name_04?: string;
  Name_05?: string;
  Name_06?: string;
  Name_07?: string;
  Name_08?: string;
  Name_09?: string;
  Name_10?: string;
  Name_11?: string;
  Name_12?: string;
  /** @format int64 */
  GLSegmentID_01?: number;
  /** @format int64 */
  GLSegmentID_02?: number;
  /** @format int64 */
  GLSegmentID_03?: number;
  /** @format int64 */
  GLSegmentID_04?: number;
  /** @format int64 */
  GLSegmentID_05?: number;
  /** @format int64 */
  GLSegmentID_06?: number;
  /** @format int64 */
  GLSegmentID_07?: number;
  /** @format int64 */
  GLSegmentID_08?: number;
  /** @format int64 */
  GLSegmentID_09?: number;
  /** @format int64 */
  GLSegmentID_10?: number;
  /** @format int64 */
  GLSegmentID_11?: number;
  /** @format int64 */
  GLSegmentID_12?: number;
  /** @format int64 */
  GLSegmentNameID_01?: number;
  /** @format int64 */
  GLSegmentNameID_02?: number;
  /** @format int64 */
  GLSegmentNameID_03?: number;
  /** @format int64 */
  GLSegmentNameID_04?: number;
  /** @format int64 */
  GLSegmentNameID_05?: number;
  /** @format int64 */
  GLSegmentNameID_06?: number;
  /** @format int64 */
  GLSegmentNameID_07?: number;
  /** @format int64 */
  GLSegmentNameID_08?: number;
  /** @format int64 */
  GLSegmentNameID_09?: number;
  /** @format int64 */
  GLSegmentNameID_10?: number;
  /** @format int64 */
  GLSegmentNameID_11?: number;
  /** @format int64 */
  GLSegmentNameID_12?: number;
  GLStructureName?: string;
  GLSegmentName_01?: string;
  GLSegmentName_02?: string;
  GLSegmentName_03?: string;
  GLSegmentName_04?: string;
  GLSegmentName_05?: string;
  GLSegmentName_06?: string;
  GLSegmentName_07?: string;
  GLSegmentName_08?: string;
  GLSegmentName_09?: string;
  GLSegmentName_10?: string;
  GLSegmentName_11?: string;
  GLSegmentName_12?: string;
  IsActive?: boolean;
}

export interface Lookup {
  /** @format int64 */
  LookupID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  IsFilterByCompany: boolean;
  /** @format int64 */
  FilterByLookupID?: number;
  /** @format int64 */
  BuiltinID?: number;
  IsActive: boolean;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Custom1Header?: string;
}

export interface ExchangeRate {
  /** @format int64 */
  ExchangeRateID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CurrencyID?: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  Type: string;
  /**
   * @format decimal
   * @max 999999999
   */
  Value: number;
  IsDefault: boolean;
  IsActive: boolean;
  /** @format int64 */
  DestinationCurrencyID?: number;
}

export interface CostCenterMask {
  /** @format int64 */
  CostCenterMaskID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  Name: string;
  IsSegment_01?: boolean;
  IsSegment_02?: boolean;
  IsSegment_03?: boolean;
  IsSegment_04?: boolean;
  IsSegment_05?: boolean;
  IsSegment_06?: boolean;
  IsSegment_07?: boolean;
  IsSegment_08?: boolean;
  IsSegment_09?: boolean;
  IsSegment_10?: boolean;
  IsSegment_11?: boolean;
  IsSegment_12?: boolean;
  IsActive: boolean;
  UseEmployeeCostCenter: boolean;
  IsAutoApprove: boolean;
  /** @format int32 */
  CostCenterCount?: number;
  /** @format int32 */
  SegmentCount?: number;
}

export interface GLAccount {
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLCodeMaskID: number;
  /** @format int64 */
  GLSegmentID_01: number;
  /** @format int64 */
  GLSegmentID_02?: number;
  /** @format int64 */
  GLSegmentID_03?: number;
  /** @format int64 */
  GLSegmentID_04?: number;
  /** @format int64 */
  GLSegmentID_05?: number;
  /** @format int64 */
  GLSegmentID_06?: number;
  /** @format int64 */
  GLSegmentID_07?: number;
  /** @format int64 */
  GLSegmentID_08?: number;
  /** @format int64 */
  GLSegmentID_09?: number;
  /** @format int64 */
  GLSegmentID_10?: number;
  /** @format int64 */
  GLSegmentID_11?: number;
  /** @format int64 */
  GLSegmentID_12?: number;
  IsActive: boolean;
}

export interface FinancialYear {
  /** @format int64 */
  FinancialYearID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Description: string;
  IsActive: boolean;
  /** @format int64 */
  InitialisationFinancialYearID?: number;
}

export interface GLSegmentName {
  /** @format int64 */
  GLSegmentNameID?: number;
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  IsActive: boolean;
}

export interface Tenant {
  /** @format int64 */
  TenantID?: number;
  /**
   * @minLength 0
   * @maxLength 20
   */
  Code: string;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Name: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  LoginName: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  LoginPassword: string;
  /**
   * @minLength 0
   * @maxLength 256
   */
  Email: string;
  /** @format date-time */
  CreationDate?: string;
  /** @format date-time */
  CancelledDate?: string;
  TimeZoneID?: string;
  IsActive: boolean;
  AllowMultipleLeaveItems: boolean;
  /**
   * @minLength 0
   * @maxLength 20
   */
  ShortName: string;
  AnyoneCanReceipt: boolean;
  UseEmployeeCompany: boolean;
  UseFraxionMP: boolean;
  UseFraxionCAT: boolean;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  FxTenantID?: string;
  UseSupplierCompany: boolean;
  UseFraxionCONT: boolean;
  AnyoneCanViewBudget: boolean;
  UseAAD: boolean;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  AADTenantID?: string;
  UseGLCompany: boolean;
  UseFraxionIWS: boolean;
  UseMoneyFourDecimals: boolean;
  AnyoneCanAssist: boolean;
  UseFraxionPunchout: boolean;
  UseCatalogQuoting: boolean;
  AllowInvoiceHeaderTax: boolean;
  UseOrderRevision: boolean;
  FilterGLByCompany: boolean;
  UseTaxRateCompany: boolean;
  /** @format date-time */
  UseNewCAADate?: string;
  /** @format int64 */
  ReportingCurrencyID?: number;
}

export interface CAApprovalRange {
  /** @format int64 */
  CAApprovalRangeID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  CAApprovalID?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  RangeStart: string;
  RangeEnd: string;
  Description?: string;
  DescriptionHtml?: string;
}

export interface LocationType {
  /** @format int64 */
  LocationTypeID: number;
  ResourceName?: string;
}

export interface Budget {
  /** @format int64 */
  BudgetID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  FinancialPeriodID: number;
  /** @format decimal */
  Value: number;
  /** @format decimal */
  ActualSpend: number;
}

export interface RequestItemType {
  ResourceName?: string;
  RequestItemTypeName?: string;
  BudgetColumnSchema?: BudgetColumn[];
  CustomColumnSchema?: CustomColumn[];
  TypeColumnSchema?: CustomColumn[];
  /** @format int64 */
  RequestItemTypeID?: number;
  /** @format int64 */
  TenantID?: number;
  CustomColumns?: string;
  IsActive: boolean;
  BudgetColumns?: string;
  /** @format int32 */
  InvoiceRule: number;
}

export interface ViewGLCode {
  /** @format int64 */
  GLAccountID?: number;
  GLCode?: string;
  Name?: string;
  FullName?: string;
  /** @format int64 */
  GLCodeMaskID?: number;
  IsActive?: boolean;
}

export interface ApproveCCInfo {
  /** @format int64 */
  CostCenterMaskID?: number;
  UseEmployeeCostCenter?: boolean;
  IsAutoApprove?: boolean;
}

export interface FinancialPeriod {
  /** @format int64 */
  FinancialPeriodID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  FinancialYearID?: number;
  /**
   * @minLength 0
   * @maxLength 80
   */
  Description: string;
  /** @format int32 */
  PeriodNumber: number;
  /** @format date-time */
  StartDate: string;
  /** @format date-time */
  EndDate: string;
}

export interface ODataResponseListAlertType {
  "@odata.context"?: string;
  value?: AlertType[];
}

export interface ODataResponseListApproval {
  "@odata.context"?: string;
  value?: Approval[];
}

export interface ODataResponseListBudgetExtended {
  "@odata.context"?: string;
  value?: BudgetExtended[];
}

export interface BudgetExtended {
  /** @format int64 */
  BudgetID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  GLSegmentID?: number;
  /** @format int64 */
  FinancialPeriodID?: number;
  /** @format decimal */
  Value?: number;
  /** @format decimal */
  ActualSpend?: number;
  CompanyCode?: string;
  CompanyName?: string;
  /** @format int32 */
  PeriodNumber?: number;
  PeriodDescription?: string;
  StructureName?: string;
  StructureCode?: string;
  StructureFullName?: string;
  FinancialYear?: string;
  /** @format int64 */
  FinancialYearID?: number;
  UserAction?: string;
  ImportStatus?: string;
  Note?: string;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
  /** @format date-time */
  LastUpdated?: string;
}

export interface ViewStructure {
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  CompanyID?: number;
  StructureName?: string;
  StructureCode?: string;
  CompanyCode?: string;
  FullName?: string;
  /** @format int64 */
  GLCodeMaskID?: number;
  SegmentCode_01?: string;
  Separator_01?: string;
  SegmentCode_02?: string;
  Separator_02?: string;
  SegmentCode_03?: string;
  Separator_03?: string;
  SegmentCode_04?: string;
  Separator_04?: string;
  SegmentCode_05?: string;
  Separator_05?: string;
  SegmentCode_06?: string;
  Separator_06?: string;
  SegmentCode_07?: string;
  Separator_07?: string;
  SegmentCode_08?: string;
  Separator_08?: string;
  SegmentCode_09?: string;
  Separator_09?: string;
  SegmentCode_10?: string;
  Separator_10?: string;
  SegmentCode_11?: string;
  Separator_11?: string;
  SegmentCode_12?: string;
  Name_01?: string;
  Name_02?: string;
  Name_03?: string;
  Name_04?: string;
  Name_05?: string;
  Name_06?: string;
  Name_07?: string;
  Name_08?: string;
  Name_09?: string;
  Name_10?: string;
  Name_11?: string;
  Name_12?: string;
  /** @format int64 */
  SegmentID_01?: number;
  /** @format int64 */
  SegmentID_02?: number;
  /** @format int64 */
  SegmentID_03?: number;
  /** @format int64 */
  SegmentID_04?: number;
  /** @format int64 */
  SegmentID_05?: number;
  /** @format int64 */
  SegmentID_06?: number;
  /** @format int64 */
  SegmentID_07?: number;
  /** @format int64 */
  SegmentID_08?: number;
  /** @format int64 */
  SegmentID_09?: number;
  /** @format int64 */
  SegmentID_10?: number;
  /** @format int64 */
  SegmentID_11?: number;
  /** @format int64 */
  SegmentID_12?: number;
  /** @format int64 */
  SegmentNameID_01?: number;
  /** @format int64 */
  SegmentNameID_02?: number;
  /** @format int64 */
  SegmentNameID_03?: number;
  /** @format int64 */
  SegmentNameID_04?: number;
  /** @format int64 */
  SegmentNameID_05?: number;
  /** @format int64 */
  SegmentNameID_06?: number;
  /** @format int64 */
  SegmentNameID_07?: number;
  /** @format int64 */
  SegmentNameID_08?: number;
  /** @format int64 */
  SegmentNameID_09?: number;
  /** @format int64 */
  SegmentNameID_10?: number;
  /** @format int64 */
  SegmentNameID_11?: number;
  /** @format int64 */
  SegmentNameID_12?: number;
  SegmentName_01?: string;
  SegmentName_02?: string;
  SegmentName_03?: string;
  SegmentName_04?: string;
  SegmentName_05?: string;
  SegmentName_06?: string;
  SegmentName_07?: string;
  SegmentName_08?: string;
  SegmentName_09?: string;
  SegmentName_10?: string;
  SegmentName_11?: string;
  SegmentName_12?: string;
  IsActive?: boolean;
}

export interface ViewSegment {
  /** @format int64 */
  SegmentID?: number;
  /** @format int64 */
  TenantID?: number;
  /** @format int64 */
  SegmentNameID?: number;
  SegmentName?: string;
  SegmentCode?: string;
  Name?: string;
  IsActive?: boolean;
  /** @format int64 */
  CompanyID?: number;
  CompanyCode?: string;
}

export interface StructureImport {
  StructureName?: string;
  StructureCode?: string;
  CompanyCode?: string;
  FullName?: string;
  SegmentCode_01?: string;
  Separator_01?: string;
  SegmentCode_02?: string;
  Separator_02?: string;
  SegmentCode_03?: string;
  Separator_03?: string;
  SegmentCode_04?: string;
  Separator_04?: string;
  SegmentCode_05?: string;
  Separator_05?: string;
  SegmentCode_06?: string;
  Separator_06?: string;
  SegmentCode_07?: string;
  Separator_07?: string;
  SegmentCode_08?: string;
  Separator_08?: string;
  SegmentCode_09?: string;
  Separator_09?: string;
  SegmentCode_10?: string;
  Separator_10?: string;
  SegmentCode_11?: string;
  Separator_11?: string;
  SegmentCode_12?: string;
  SegmentName_01?: string;
  SegmentName_02?: string;
  SegmentName_03?: string;
  SegmentName_04?: string;
  SegmentName_05?: string;
  SegmentName_06?: string;
  SegmentName_07?: string;
  SegmentName_08?: string;
  SegmentName_09?: string;
  SegmentName_10?: string;
  SegmentName_11?: string;
  SegmentName_12?: string;
  Name_01?: string;
  Name_02?: string;
  Name_03?: string;
  Name_04?: string;
  Name_05?: string;
  Name_06?: string;
  Name_07?: string;
  Name_08?: string;
  Name_09?: string;
  Name_10?: string;
  Name_11?: string;
  Name_12?: string;
  Segments?: SegmentImport[];
  IsActive?: boolean;
}

export interface SegmentImport {
  SegmentCode?: string;
  Name?: string;
  IsActive?: boolean;
  SegmentName?: string;
  CompanyCode?: string;
}

export interface ODataResponseListBudgetResponse {
  "@odata.context"?: string;
  value?: BudgetResponse[];
}

export interface BudgetResponse {
  StructureName?: string;
  CompanyCode?: string;
  CompanyName?: string;
  FinancialYear?: string;
  StructureFullName?: string;
  StructureCode?: string;
  SegmentCode_01?: string;
  SegmentCode_02?: string;
  SegmentCode_03?: string;
  SegmentCode_04?: string;
  SegmentCode_05?: string;
  SegmentCode_06?: string;
  SegmentCode_07?: string;
  SegmentCode_08?: string;
  SegmentCode_09?: string;
  SegmentCode_10?: string;
  SegmentCode_11?: string;
  SegmentCode_12?: string;
  SegmentName_01?: string;
  SegmentName_02?: string;
  SegmentName_03?: string;
  SegmentName_04?: string;
  SegmentName_05?: string;
  SegmentName_06?: string;
  SegmentName_07?: string;
  SegmentName_08?: string;
  SegmentName_09?: string;
  SegmentName_10?: string;
  SegmentName_11?: string;
  SegmentName_12?: string;
  Periods?: Period[];
  UserAction?: string;
  ImportStatus?: string;
}

export interface Period {
  /** @format int32 */
  PeriodNumber?: number;
  PeriodDescription?: string;
  /** @format decimal */
  PeriodValue?: number;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
  UserAction?: string;
  ImportStatus?: string;
}

export interface ODataResponseListBudgetPeriod {
  "@odata.context"?: string;
  value?: BudgetPeriod[];
}

export interface BudgetPeriod {
  StructureName?: string;
  CompanyCode?: string;
  CompanyName?: string;
  FinancialYear?: string;
  StructureCode?: string;
  StructureFullName?: string;
  SegmentCode_01?: string;
  SegmentCode_02?: string;
  SegmentCode_03?: string;
  SegmentCode_04?: string;
  SegmentCode_05?: string;
  SegmentCode_06?: string;
  SegmentCode_07?: string;
  SegmentCode_08?: string;
  SegmentCode_09?: string;
  SegmentCode_10?: string;
  SegmentCode_11?: string;
  SegmentCode_12?: string;
  SegmentName_01?: string;
  SegmentName_02?: string;
  SegmentName_03?: string;
  SegmentName_04?: string;
  SegmentName_05?: string;
  SegmentName_06?: string;
  SegmentName_07?: string;
  SegmentName_08?: string;
  SegmentName_09?: string;
  SegmentName_10?: string;
  SegmentName_11?: string;
  SegmentName_12?: string;
  UserAction?: string;
  ImportStatus?: string;
  /** @format int32 */
  PeriodNumber?: number;
  PeriodDescription?: string;
  /** @format decimal */
  PeriodValue?: number;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
}

export interface BudgetImport {
  StructureName?: string;
  CompanyCode?: string;
  FinancialYear?: string;
  StructureCode?: string;
  SegmentCode_01?: string;
  SegmentCode_02?: string;
  SegmentCode_03?: string;
  SegmentCode_04?: string;
  SegmentCode_05?: string;
  SegmentCode_06?: string;
  SegmentCode_07?: string;
  SegmentCode_08?: string;
  SegmentCode_09?: string;
  SegmentCode_10?: string;
  SegmentCode_11?: string;
  SegmentCode_12?: string;
  Periods?: Period[];
}

export interface ODataResponseListCompany {
  "@odata.context"?: string;
  value?: Company[];
}

export interface FieldMetadataType {
  FieldID?: string;
  Label?: string;
  HelpText?: string;
}

export interface ODataResponseListCurrency {
  "@odata.context"?: string;
  value?: Currency[];
}

export interface CurrencyImport {
  CurrencyCode?: string;
  CurrencyName?: string;
  IsActive?: boolean;
}

export interface ODataResponseListCurrencyResponse {
  "@odata.context"?: string;
  value?: CurrencyResponse[];
}

export interface CurrencyResponse {
  /** @format int64 */
  CurrencyID?: number;
  UserAction?: string;
  ImportStatus?: string;
  CurrencyCode?: string;
  CurrencyName?: string;
  IsActive?: boolean;
}

export interface ODataResponseListCurrentState {
  "@odata.context"?: string;
  value?: CurrentState[];
}

export interface ODataResponseListViewToBeApproved {
  "@odata.context"?: string;
  value?: ViewToBeApproved[];
}

export interface ODataResponseListEmployee {
  "@odata.context"?: string;
  value?: Employee[];
}

export interface ODataResponseListExchangeRate {
  "@odata.context"?: string;
  value?: ExchangeRate[];
}

export interface ExchangeRateImport {
  SourceCurrencyCode?: string;
  TargetCurrencyCode?: string;
  Type?: string;
  /** @format decimal */
  Value?: number;
  IsDefault?: boolean;
  IsActive?: boolean;
}

export interface ODataResponseListExchangeRateResponse {
  "@odata.context"?: string;
  value?: ExchangeRateResponse[];
}

export interface ExchangeRateResponse {
  /** @format int64 */
  ExchangeRateID?: number;
  UserAction?: string;
  ImportStatus?: string;
  SourceCurrencyCode?: string;
  TargetCurrencyCode?: string;
  Type?: string;
  /** @format decimal */
  Value?: number;
  IsDefault?: boolean;
  IsActive?: boolean;
}

export interface ODataResponseListFinancialPeriod {
  "@odata.context"?: string;
  value?: FinancialPeriod[];
}

export interface FinancialPeriodImport {
  FinancialYearDescription?: string;
  FinancialPeriodDescription?: string;
  /** @format int32 */
  PeriodNumber?: number;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
}

export interface ODataResponseListFinancialPeriodResponse {
  "@odata.context"?: string;
  value?: FinancialPeriodResponse[];
}

export interface FinancialPeriodResponse {
  /** @format int64 */
  FinancialPeriodID?: number;
  UserAction?: string;
  ImportStatus?: string;
  FinancialYearDescription?: string;
  FinancialPeriodDescription?: string;
  /** @format int32 */
  PeriodNumber?: number;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
}

export interface ODataResponseListFinancialYear {
  "@odata.context"?: string;
  value?: FinancialYear[];
}

export interface FinancialYearImport {
  FinancialYearDescription?: string;
  IsActive?: boolean;
}

export interface ODataResponseListFinancialYearResponse {
  "@odata.context"?: string;
  value?: FinancialYearResponse[];
}

export interface FinancialYearResponse {
  /** @format int64 */
  FinancialYearID?: number;
  UserAction?: string;
  ImportStatus?: string;
  FinancialYearDescription?: string;
  IsActive?: boolean;
}

export interface GLAccountSegments {
  GLSegmentList?: GLSegment[];
}

export interface ODataResponseListGLSegment {
  "@odata.context"?: string;
  value?: GLSegment[];
}

export interface ODataResponseListGLCodeMask {
  "@odata.context"?: string;
  value?: GLCodeMask[];
}

export interface ODataResponseListGLSegmentName {
  "@odata.context"?: string;
  value?: GLSegmentName[];
}

export interface ODataResponseListInvoiceItem {
  "@odata.context"?: string;
  value?: InvoiceItem[];
}

export interface ODataResponseListFile {
  "@odata.context"?: string;
  value?: File[];
}

export interface ODataResponseListInvoice {
  "@odata.context"?: string;
  value?: Invoice[];
}

export interface ODataResponseListLocation {
  "@odata.context"?: string;
  value?: Location[];
}

export interface ODataResponseListLocationType {
  "@odata.context"?: string;
  value?: LocationType[];
}

export interface ODataResponseListLookupItem {
  "@odata.context"?: string;
  value?: LookupItem[];
}

export interface LookupItemImport {
  LookupName?: string;
  Value?: string;
  Custom1?: string;
  FilterByCompanyCode?: string;
  FilterByLookupItemValue?: string;
  FilterLookupName?: string;
  IsActive?: boolean;
}

export interface ODataResponseListLookupItemResponse {
  "@odata.context"?: string;
  value?: LookupItemResponse[];
}

export interface LookupItemResponse {
  /** @format int64 */
  LookupItemID?: number;
  UserAction?: string;
  ImportStatus?: string;
  LookupName?: string;
  Value?: string;
  Custom1?: string;
  FilterByCompanyCode?: string;
  FilterByLookupItemValue?: string;
  FilterLookupName?: string;
  IsActive?: boolean;
}

export interface ODataResponseListLookup {
  "@odata.context"?: string;
  value?: Lookup[];
}

export interface ODataResponseListPO {
  "@odata.context"?: string;
  value?: PO[];
}

export interface ODataResponseListPOItem {
  "@odata.context"?: string;
  value?: POItem[];
}

export interface ODataResponseListViewGLSpendByState {
  "@odata.context"?: string;
  value?: ViewGLSpendByState[];
}

export interface ViewGLSpendByState {
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  GLAccountID?: number;
  /** @format int64 */
  CurrentStateID?: number;
  /** @format double */
  TotalExclCost?: number;
  /** @format double */
  TotalExclCostSrc?: number;
  /** @format double */
  TotalInclCost?: number;
  /** @format double */
  TotalInclCostSrc?: number;
}

export interface ODataResponseListBudget {
  "@odata.context"?: string;
  value?: Budget[];
}

export interface ODataResponseListRequestItem {
  "@odata.context"?: string;
  value?: RequestItem[];
}

export interface ODataResponseListRequestItemHistory {
  "@odata.context"?: string;
  value?: RequestItemHistory[];
}

export interface ODataResponseListRequestItemType {
  "@odata.context"?: string;
  value?: RequestItemType[];
}

export interface ODataResponseListRequest {
  "@odata.context"?: string;
  value?: Request[];
}

export interface ODataResponseListCommandButton {
  "@odata.context"?: string;
  value?: CommandButton[];
}

export interface ODataResponseListRequestHistory {
  "@odata.context"?: string;
  value?: RequestHistory[];
}

export interface ODataResponseListDocumentNote {
  "@odata.context"?: string;
  value?: DocumentNote[];
}

export interface ODataResponseListViewRequestApprovalCycle {
  "@odata.context"?: string;
  value?: ViewRequestApprovalCycle[];
}

export interface ViewRequestApprovalCycle {
  /** @format int64 */
  RequestID?: number;
  Approval?: string;
  ApprovalCC?: string;
  /** @format int32 */
  ApprovalOrder?: number;
  Employee?: string;
  /** @format date-time */
  DateStamp?: string;
  UserAction?: string;
}

export interface ODataResponseListViewRequestGLsAndRequestSpend {
  "@odata.context"?: string;
  value?: ViewRequestGLsAndRequestSpend[];
}

export interface ViewRequestGLsAndRequestSpend {
  /** @format int64 */
  RequestID?: number;
  GLAccountName?: string;
  GLAccountCode?: string;
  /** @format double */
  TotalExclCost?: number;
  /** @format double */
  TotalExclCostSrc?: number;
  /** @format double */
  TotalInclCost?: number;
  /** @format double */
  TotalInclCostSrc?: number;
  /** @format int64 */
  GLCodeMaskID?: number;
  /** @format int64 */
  GLAccountID?: number;
}

export interface EditStatus {
  CanEditCore?: boolean;
  CanEditBudget?: boolean;
  CanEditCustom?: boolean;
  CanViewBudget?: boolean;
}

export interface ODataResponseListRequestType {
  "@odata.context"?: string;
  value?: RequestType[];
}

export interface ODataResponseListString {
  "@odata.context"?: string;
  value?: string[];
}

export interface ODataResponseListSegmentImport {
  "@odata.context"?: string;
  value?: SegmentImport[];
}

export interface ODataResponseListSegmentResponse {
  "@odata.context"?: string;
  value?: SegmentResponse[];
}

export interface SegmentResponse {
  UserAction?: string;
  ImportStatus?: string;
  SegmentCode?: string;
  Name?: string;
  IsActive?: boolean;
  SegmentName?: string;
  CompanyCode?: string;
}

export interface ODataResponseListStructureResponse {
  "@odata.context"?: string;
  value?: StructureResponse[];
}

export interface StructureResponse {
  UserAction?: string;
  ImportStatus?: string;
  StructureName?: string;
  StructureCode?: string;
  CompanyCode?: string;
  FullName?: string;
  SegmentCode_01?: string;
  Separator_01?: string;
  SegmentCode_02?: string;
  Separator_02?: string;
  SegmentCode_03?: string;
  Separator_03?: string;
  SegmentCode_04?: string;
  Separator_04?: string;
  SegmentCode_05?: string;
  Separator_05?: string;
  SegmentCode_06?: string;
  Separator_06?: string;
  SegmentCode_07?: string;
  Separator_07?: string;
  SegmentCode_08?: string;
  Separator_08?: string;
  SegmentCode_09?: string;
  Separator_09?: string;
  SegmentCode_10?: string;
  Separator_10?: string;
  SegmentCode_11?: string;
  Separator_11?: string;
  SegmentCode_12?: string;
  SegmentName_01?: string;
  SegmentName_02?: string;
  SegmentName_03?: string;
  SegmentName_04?: string;
  SegmentName_05?: string;
  SegmentName_06?: string;
  SegmentName_07?: string;
  SegmentName_08?: string;
  SegmentName_09?: string;
  SegmentName_10?: string;
  SegmentName_11?: string;
  SegmentName_12?: string;
  Name_01?: string;
  Name_02?: string;
  Name_03?: string;
  Name_04?: string;
  Name_05?: string;
  Name_06?: string;
  Name_07?: string;
  Name_08?: string;
  Name_09?: string;
  Name_10?: string;
  Name_11?: string;
  Name_12?: string;
  Segments?: SegmentImport[];
  IsActive?: boolean;
}

export interface ODataResponseListSupplier {
  "@odata.context"?: string;
  value?: Supplier[];
}

export interface SupplierImport {
  CompanyCode?: string;
  SupplierCode?: string;
  SupplierName?: string;
  Contact?: string;
  PhoneNumber?: string;
  FaxNumber?: string;
  Email?: string;
  RegistrationNumber?: string;
  TaxRegistrationNumber?: string;
  BankAccountNumber?: string;
  BankingInfo?: string;
  PaymentTerms?: string;
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  Locality?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Coordinates?: string;
  FxSupplierID?: string;
  CustomColumns?: string;
  CategoryCode1?: string;
  CategoryCode2?: string;
  CategoryCode3?: string;
  CategoryCode4?: string;
  IsTravelServiceProvider?: boolean;
  IsInvoiceLink?: boolean;
  IsActive?: boolean;
  CurrencyCode?: string;
  TaxRateCode?: string;
}

export interface ODataResponseListSupplierResponse {
  "@odata.context"?: string;
  value?: SupplierResponse[];
}

export interface SupplierResponse {
  /** @format int64 */
  SupplierID?: number;
  UserAction?: string;
  ImportStatus?: string;
  CompanyCode?: string;
  SupplierCode?: string;
  SupplierName?: string;
  Contact?: string;
  PhoneNumber?: string;
  FaxNumber?: string;
  Email?: string;
  RegistrationNumber?: string;
  TaxRegistrationNumber?: string;
  BankAccountNumber?: string;
  BankingInfo?: string;
  PaymentTerms?: string;
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  Locality?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Coordinates?: string;
  FxSupplierID?: string;
  CustomColumns?: string;
  CategoryCode1?: string;
  CategoryCode2?: string;
  CategoryCode3?: string;
  CategoryCode4?: string;
  IsTravelServiceProvider?: boolean;
  IsInvoiceLink?: boolean;
  IsActive?: boolean;
  CurrencyCode?: string;
  TaxRateCode?: string;
}

export interface ODataResponseListTaxRate {
  "@odata.context"?: string;
  value?: TaxRate[];
}

export interface TaxRateImport {
  TaxRateCode?: string;
  TaxRateName?: string;
  /** @format decimal */
  Value?: number;
  IsDefault?: boolean;
  IsActive?: boolean;
  CompanyCode?: string;
}

export interface ODataResponseListTaxRateResponse {
  "@odata.context"?: string;
  value?: TaxRateResponse[];
}

export interface TaxRateResponse {
  /** @format int64 */
  TaxRateID?: number;
  UserAction?: string;
  ImportStatus?: string;
  TaxRateCode?: string;
  TaxRateName?: string;
  /** @format decimal */
  Value?: number;
  IsDefault?: boolean;
  IsActive?: boolean;
  CompanyCode?: string;
}

export interface ODataResponseListTenant {
  "@odata.context"?: string;
  value?: Tenant[];
}

export type ApiAttachmentsUploadRequestDocumentIDPost200ApplicationJsonResponse = object;

export type ApiAttachmentsUploadRequestDocumentIDPost200TextJsonResponse = object;

export type ApiAttachmentsUploadRequestDocumentIDPost200ApplicationXmlResponse = object;

export type ApiAttachmentsUploadRequestDocumentIDPost200TextXmlResponse = object;

export type ApiAttachmentsUploadRequestItemDocumentIDPost200ApplicationJsonResponse = object;

export type ApiAttachmentsUploadRequestItemDocumentIDPost200TextJsonResponse = object;

export type ApiAttachmentsUploadRequestItemDocumentIDPost200ApplicationXmlResponse = object;

export type ApiAttachmentsUploadRequestItemDocumentIDPost200TextXmlResponse = object;

export type ApiAttachmentsDownload2FileIDGet200ApplicationJsonResponse = object;

export type ApiAttachmentsDownload2FileIDGet200TextJsonResponse = object;

export type ApiAttachmentsDownload2FileIDGet200ApplicationXmlResponse = object;

export type ApiAttachmentsDownload2FileIDGet200TextXmlResponse = object;

export type ApiAttachmentsDeleteFileIDRequestDocumentIDDelete200ApplicationJsonResponse = object;

export type ApiAttachmentsDeleteFileIDRequestDocumentIDDelete200TextJsonResponse = object;

export type ApiAttachmentsDeleteFileIDRequestDocumentIDDelete200ApplicationXmlResponse = object;

export type ApiAttachmentsDeleteFileIDRequestDocumentIDDelete200TextXmlResponse = object;

export type ApiAttachmentsDeleteFileIDRequestItemDocumentIDDelete200ApplicationJsonRespo = object;

export type ApiAttachmentsDeleteFileIDRequestItemDocumentIDDelete200TextJsonResponse = object;

export type ApiAttachmentsDeleteFileIDRequestItemDocumentIDDelete200ApplicationXmlRespon = object;

export type ApiAttachmentsDeleteFileIDRequestItemDocumentIDDelete200TextXmlResponse = object;

export type ApiAttachmentsUploadInvoiceDocumentIDPost200ApplicationJsonResponse = object;

export type ApiAttachmentsUploadInvoiceDocumentIDPost200TextJsonResponse = object;

export type ApiAttachmentsUploadInvoiceDocumentIDPost200ApplicationXmlResponse = object;

export type ApiAttachmentsUploadInvoiceDocumentIDPost200TextXmlResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceDocumentIDDelete200ApplicationJsonResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceDocumentIDDelete200TextJsonResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceDocumentIDDelete200ApplicationXmlResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceDocumentIDDelete200TextXmlResponse = object;

export type ApiAttachmentsUploadInvoiceItemDocumentIDPost200ApplicationJsonResponse = object;

export type ApiAttachmentsUploadInvoiceItemDocumentIDPost200TextJsonResponse = object;

export type ApiAttachmentsUploadInvoiceItemDocumentIDPost200ApplicationXmlResponse = object;

export type ApiAttachmentsUploadInvoiceItemDocumentIDPost200TextXmlResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceItemDocumentIDDelete200ApplicationJsonRespo = object;

export type ApiAttachmentsDeleteFileIDInvoiceItemDocumentIDDelete200TextJsonResponse = object;

export type ApiAttachmentsDeleteFileIDInvoiceItemDocumentIDDelete200ApplicationXmlRespon = object;

export type ApiAttachmentsDeleteFileIDInvoiceItemDocumentIDDelete200TextXmlResponse = object;

export type ApiNotificationsNofityUserMailSubjectMessagePost200ApplicationJsonResponse = object;

export type ApiNotificationsNofityUserMailSubjectMessagePost200TextJsonResponse = object;

export type ApiNotificationsNofityUserMailSubjectMessagePost200ApplicationXmlResponse = object;

export type ApiNotificationsNofityUserMailSubjectMessagePost200TextXmlResponse = object;

export type ApiNotificationsOneSignalUserMailSubjectMessagePost200ApplicationJsonRespons = object;

export type ApiNotificationsOneSignalUserMailSubjectMessagePost200TextJsonResponse = object;

export type ApiNotificationsOneSignalUserMailSubjectMessagePost200ApplicationXmlResponse = object;

export type ApiNotificationsOneSignalUserMailSubjectMessagePost200TextXmlResponse = object;

export type ApiResourcesGet200ApplicationJsonResponse = Record<string, object>;

export type ApiResourcesGet200TextJsonResponse = Record<string, object>;

export type ApiResourcesGet200ApplicationXmlResponse = Record<string, object>;

export type ApiResourcesGet200TextXmlResponse = Record<string, object>;

export type ApiResourcesSubsetCultureCodeGet200ApplicationJsonResponse = Record<string, object>;

export type ApiResourcesSubsetCultureCodeGet200TextJsonResponse = Record<string, object>;

export type ApiResourcesSubsetCultureCodeGet200ApplicationXmlResponse = Record<string, object>;

export type ApiResourcesSubsetCultureCodeGet200TextXmlResponse = Record<string, object>;

export type ApiResourcesCultureCodeGet200ApplicationJsonResponse = Record<string, object>;

export type ApiResourcesCultureCodeGet200TextJsonResponse = Record<string, object>;

export type ApiResourcesCultureCodeGet200ApplicationXmlResponse = Record<string, object>;

export type ApiResourcesCultureCodeGet200TextXmlResponse = Record<string, object>;

export type ApiUserRegisterGet200ApplicationJsonResponse = string;

export type ApiUserRegisterGet200TextJsonResponse = string;

export type ApiUserRegisterGet200ApplicationXmlResponse = string;

export type ApiUserRegisterGet200TextXmlResponse = string;

export type ApiMetadataGet200ApplicationXmlResponse = any;

export interface Parameters {
  Budgets?: BudgetExtended[];
}

export interface Parameters1 {
  Actuals?: BudgetImport[];
}

export interface Parameters2 {
  ActualPeriods?: BudgetPeriod[];
}

export interface Parameters3 {
  Budgets?: BudgetImport[];
}

export interface Parameters4 {
  BudgetPeriods?: BudgetPeriod[];
}

export interface Parameters5 {
  importCurrencies?: CurrencyImport[];
}

export type ApiCurrentStatesNameGet200ApplicationJsonResponse = string;

export interface Parameters6 {
  importExchangeRates?: ExchangeRateImport[];
}

export interface Parameters7 {
  importFinancialPeriods?: FinancialPeriodImport[];
}

export interface Parameters8 {
  importFinancialYears?: FinancialYearImport[];
}

export interface Parameters9 {
  InvoiceIDs: number[];
}

export interface Parameters10 {
  importLookupItems?: LookupItemImport[];
}

export interface Parameters11 {
  RequestIDs: number[];
}

export interface Parameters12 {
  Segments?: SegmentImport[];
}

export interface Parameters13 {
  Structures?: StructureImport[];
}

export interface Parameters14 {
  importSuppliers?: SupplierImport[];
}

export interface Parameters15 {
  importTaxRates?: TaxRateImport[];
}

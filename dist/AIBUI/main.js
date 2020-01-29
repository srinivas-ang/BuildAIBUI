(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"bg_primary\" color='primary'>\r\n  <!-- <img width='78px' src=\"../aib.png\"> -->\r\n  <div class=\"row mx-0 w-100\">\r\n    <div class=\"col-sm-4\">\r\n      <label>CIB - Documentum</label>\r\n    </div>\r\n    <div class=\"col-sm-8\" *ngIf=\"userDetails\">\r\n        <!-- <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button> -->\r\n        <mat-menu #menu=\"matMenu\" direction=\"down\" yPosition=\"below\" (mouseleave)=\"levelOneTrigger.closeMenu()\">\r\n          <button mat-menu-item>Profile</button>\r\n          <button mat-menu-item (click)=\"logout()\">Logout</button>\r\n        </mat-menu>\r\n      <div class=\"row float-right\" [matMenuTriggerFor]=\"menu\" #levelOneTrigger=\"matMenuTrigger\" (mouseenter)=\"levelOneTrigger.openMenu()\">\r\n        <div class=\"mr-1\">\r\n          <mat-icon class=\"mt-1\">person_pin</mat-icon>\r\n        </div>\r\n        <div class=\"\">\r\n          <label>{{userDetails.UserName}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/addclient.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/addclient.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"row mx-0 mt-3 mb-3\">\r\n        Can't find your client in Documentum? Please search the Salesforce Clients List below or navigate to Salesforce\r\n        to add the Client to Documentum.\r\n    </div>\r\n    <form [formGroup]=\"searchForm\">\r\n        <div class=\"row mx-0\">\r\n            <div class=\"col-sm-8\">\r\n                <mat-form-field class=\"w-100 \">\r\n                    <input type=\"text\" formControlName=\"searchText\" matInput placeholder=\"Client Search\">\r\n                </mat-form-field>\r\n\r\n                <div *ngIf=\"getSearchText.touched && getSearchText.value !='' && getSearchText.errors?.minlength\"\r\n                    class=\"mb-3 text-danger\">\r\n                    Your search term must have 2 or more characters.\r\n                </div>\r\n                <div *ngIf=\"(getSearchText.touched || !isValidFormSubmitted) && getSearchText.errors?.required\"\r\n                    class=\"mb-3 text-danger\">\r\n                    Client Name/WCIS ID required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4 mt-2\">\r\n                <mat-spinner-button style=\"border-radius: 5px\" class=\"text-left\"\r\n                    [options]=\"clientSpinnerButtonOptions\" (btnClick)=\"searchClientDetails()\"></mat-spinner-button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"mb-5\" [ngStyle]=\"{'display': display}\">\r\n        <div class=\"row mx-0\" style=\"max-height: 330px;overflow-y: scroll;\">\r\n        <mat-table [dataSource]=\"searchResult\" class=\"example-table w-100\" matSort>\r\n            <!-- Number Column -->\r\n            <ng-container matColumnDef=\"action\">\r\n                <mat-header-cell *matHeaderCellDef style=\"max-width: 7em;\" class=\"text-white\">Action</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" style=\"max-width: 6em;\">\r\n                    <!-- <mat-icon matTooltip=\"View\" (click)=\"viewClienDetails(row)\" class=\"cursor-pointer text-primary\">remove_red_eye</mat-icon> -->\r\n                    <a *ngIf=\"row.wcisId !=''\" class=\"cursor-pointer\" (click)=\"viewClienDetails(row)\">View</a>\r\n                    <a *ngIf=\"row.wcisId == ''\" class=\"cursor-pointer\" (click)=\"viewClienDetails(row)\">Add</a>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n             <!-- State Column -->\r\n             <ng-container matColumnDef=\"clientName\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">Client Name</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.clientName }}</mat-cell>\r\n            </ng-container>\r\n\r\n            <!-- Title Column -->\r\n            \r\n\r\n            <ng-container matColumnDef=\"industry\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    Industry\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.industry }}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"city\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    City\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.city }}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"state\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    State\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"taxId\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    Tax Id\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.taxId }}</mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"wcisId\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">WCIS ID</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.wcisId }}</mat-cell>\r\n            </ng-container>\r\n\r\n            <!-- Created Column -->\r\n            <!-- <ng-container matColumnDef=\"Sponsor\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    Sponsor\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.Sponsor }}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"tickerSymbol\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-white\">\r\n                    Ticker Symbol\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">{{ row.tickerSymbol }}</mat-cell>\r\n            </ng-container> -->\r\n           \r\n           \r\n           \r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"bg_primary \" style=\"border-radius: 10px;position: sticky !important;top: 0 !important;\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" style=\"border-radius: 10px; border: whitesmoke 1px solid;\"></mat-row>\r\n        </mat-table>\r\n    </div>\r\n    <div class=\"row mx-0\">\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 50]\" [pageSize]=\"50\" showFirstLastButtons class=\"container card\" style=\"border-radius: 10px\"></mat-paginator>\r\n    </div>\r\n</div>\r\n    <div class=\"alert alert-warning border mx-0 text-center\" *ngIf=\"!isDataFound\">\r\n        <label>Please navigate to salesforce to create the client.</label>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/viewclient/viewclient.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/viewclient/viewclient.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mx-0\">\r\n        <span class=\"col-sm-11 font-weight-bold\">View Client Details</span>\r\n        <mat-icon class=\"float-right col-sm-1 text-right cursor-pointer\" (click)=\"closeDialog()\">close</mat-icon>\r\n            </div>\r\n            <hr/>\r\n<div class=\"row mx-0\">\r\n    <div class=\"col-sm-3 card p-0 mr-2\">\r\n        <div class=\"border-bottom p-1 font-weight-bold\">\r\n            Repository Browser<mat-icon class=\"float-right font-weight-bold\" >arrow_downward</mat-icon>\r\n        </div>\r\n        <div class=\"ml-3 mt-2\">\r\n        <div>\r\n                <mat-icon class=\"text-warning mr-2\">folder</mat-icon>ABF\r\n        </div>\r\n        <div class=\"ml-2 mt-2 pl-3\">\r\n                <mat-icon class=\"text-warning mr-2\">folder</mat-icon> Clients\r\n        </div>\r\n        <div class=\"ml-4 mt-2 pl-4\">\r\n                <mat-icon class=\"text-warning mr-2\">folder</mat-icon>Energy & Power\r\n        </div>\r\n        <div class=\"ml-5 mt-2 pl-4\">\r\n                <mat-icon class=\"text-warning mr-2\">folder</mat-icon>Othello Golf\r\n        </div>\r\n        <div class=\"ml-5 pl-5 mr-2 mt-2\"  *ngFor=\"let item of sampleData\">\r\n                <mat-icon class=\"text-warning mr-2\" *ngIf=\"!item.IsFolder\"> insert_drive_file</mat-icon>\r\n                <mat-icon class=\"text-warning mr-2\" *ngIf=\"item.IsFolder\">folder</mat-icon>\r\n                {{item.Name}}\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-5 card p-0 mr-2\">\r\n        <div class=\"p-1 font-weight-bold border-bottom\">\r\n            ABG> Client > Energy & Power > Othello Golf\r\n        </div>\r\n        <div class=\"row mx-0 border-bottom\">\r\n            <div class=\"col-sm-4 border-right\">\r\n                Name\r\n            </div>\r\n            <div class=\"col-sm-4 border-right\">\r\n                Modified Date\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                Modified By\r\n            </div>\r\n        </div>\r\n        <div class=\"row mx-0 border-bottom\" *ngFor=\"let item of sampleData\">\r\n            <div class=\"col-sm-4 border-right\">\r\n{{item.Name}}\r\n            </div>\r\n            <div class=\"col-sm-4 border-right\">\r\n{{item.ModifiedDate}}\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n{{item.ModifiedBy}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm card font-weight-bold p-0\">\r\n            <div class=\"border-bottom p-1\">\r\n                    View Client\r\n                </div>\r\n            <app-relationshipcreation [childToMaster]=master></app-relationshipcreation>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/credittransaction/credittransaction.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/credittransaction/credittransaction.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-content\" class=\"mt-3 mb-5\">\r\n    <div class=\" mt-4 ml-2\">\r\n        <div class=\"container\">\r\n            <form class=\"\" [formGroup]=\"creditTransactionForm\" #myForm=\"ngForm\">\r\n                <div class=\"row mx-0\">\r\n                    <mat-form-field class=\"w-100 \">\r\n                        <input type=\"text\" formControlName=\"CreditActionName\" matInput placeholder=\"Credit Action Name\"\r\n                            required>\r\n                    </mat-form-field>\r\n                    <div class=\"text-danger\"\r\n                        *ngIf=\"f.CreditActionName.invalid && f.CreditActionName.errors.required && isSubmitted\">\r\n                        Credit Action Name Required.\r\n                    </div>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput [matDatepicker]=\"picker\" [min]='minDate' formControlName=\"CreditActionDate\"\r\n                            placeholder=\"Credit Action Date\" required>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"> </mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <div class=\"text-danger\"\r\n                        *ngIf=\"f.CreditActionDate.invalid && f.CreditActionDate.touched && f.CreditActionDate.errors?.matDatepickerMin\">\r\n                        Selected Credit Action Date is less than today date.\r\n                    </div>\r\n                    <div class=\"text-danger\"\r\n                        *ngIf=\"f.CreditActionDate.invalid && f.CreditActionDate.errors.required && (f.CreditActionDate.touched || isSubmitted)\">\r\n                        Credit Action date Required.\r\n                    </div>\r\n                    <fieldset class=\"mt-2 mb-2 w-100 fieldset_style\">\r\n                        <legend class=\"px-1 ml-2 legend_style\"> Credit Transacion Information</legend>\r\n                        <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                            <legend class=\"px-1 ml-2 legend_style\">Relationship Information</legend>\r\n                            <div class=\"mx-4\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <mat-label>Industry</mat-label>\r\n                                    <mat-select formControlName=\"Industry\" [multiple]=\"false\">\r\n                                        <mat-option>\r\n                                            <ngx-mat-select-search [placeholderLabel]=\"'Search industry'\"\r\n                                                [formControl]=\"industrySearchCtrl\"\r\n                                                [noEntriesFoundLabel]=\"'no matching team found'\">\r\n                                            </ngx-mat-select-search>\r\n                                        </mat-option>\r\n                                        <mat-option\r\n                                            *ngFor=\"let industry of industryJson | listfilter:industrySearchText \"\r\n                                            [value]=\"industry.Value\">\r\n                                            {{industry.Name}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                                <div class=\"text-danger\"\r\n                                    *ngIf=\"f.Industry.invalid && f.Industry.errors.required && isSubmitted\">\r\n                                    Industry Required.\r\n                                </div>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <mat-label>Client Name</mat-label>\r\n                                    <mat-select formControlName=\"ClientName\" [multiple]=\"false\">\r\n                                        <mat-option>\r\n                                            <ngx-mat-select-search [placeholderLabel]=\"'Search client name'\"\r\n                                                [formControl]=\"clientNameSearchCtrl\"\r\n                                                [noEntriesFoundLabel]=\"'no matching client found'\">\r\n                                            </ngx-mat-select-search>\r\n                                        </mat-option>\r\n                                        <mat-option\r\n                                            *ngFor=\"let client of clientNamesJson | listfilter:clientNameSearchText\"\r\n                                            [value]=\"client.Value\">\r\n                                            {{client.Name}}\r\n                                        </mat-option>\r\n\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                                <div class=\"text-danger\"\r\n                                    *ngIf=\"f.ClientName.invalid && f.ClientName.errors.required && isSubmitted\">\r\n                                    Client Name Required.\r\n                                </div>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <mat-label>Report Type</mat-label>\r\n                                    <mat-select formControlName=\"ReportType\" [multiple]=\"false\">\r\n                                        <mat-option>\r\n                                            <ngx-mat-select-search [placeholderLabel]=\"'Search Report Type'\"\r\n                                                [formControl]=\"reportTypeSearchCtrl\"\r\n                                                [noEntriesFoundLabel]=\"'no matching report type found'\">\r\n                                            </ngx-mat-select-search>\r\n                                        </mat-option>\r\n                                        <mat-option\r\n                                            *ngFor=\"let report of reportTypesJson | listfilter:reportTypeSearchText\"\r\n                                            [value]=\"report.Value\">\r\n                                            {{report.Name}}\r\n                                        </mat-option>\r\n\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                                <div class=\"text-danger\"\r\n                                    *ngIf=\"f.ReportType.invalid && f.ReportType.errors.required && isSubmitted\">\r\n                                    Report Type Required.\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                            <legend class=\"px-1 ml-2 legend_style\">Product Information</legend>\r\n                            <div class=\"row mx-1\">\r\n                                <mat-icon (click)=\"addProductInfoForm()\"\r\n                                    class=\"float-right mx-4 mb-2 bg_primary cursor-pointer\"\r\n                                    *ngIf=\"!productInfoForm.invalid\">add</mat-icon>\r\n                                <mat-icon (click)=\"removeAllProductInfoForm()\" *ngIf=\"productInfoForm.length!=1\"\r\n                                    class=\"float-right mx-4 mb-2 bg_primary cursor-pointer\">close</mat-icon>\r\n                            </div>\r\n                            <div class=\"mx-4  mb-2 fieldset_style\"\r\n                                *ngFor=\"let productForm of productInfoForm.controls; let i=index\">\r\n                                <div [formGroup]=\"productForm\" class=\"row m-0 mt-1\">\r\n                                    <div class=\"col-sm-2 mt-1\">\r\n                                        <mat-form-field class=\"w-100\">\r\n\r\n                                            <input matInput formControlName=\"CPL1\" placeholder=\"CPL1\" aria-label=\"CPL1\"\r\n                                                (keyup)=\"cplKeyPress($event,i,'CPL1')\" [matAutocomplete]=\"autoCPL1\"\r\n                                                required>\r\n                                            <mat-autocomplete #autoCPL1=\"matAutocomplete\"\r\n                                                (optionSelected)='CPL1OnChange($event.option.value)'>\r\n                                                <mat-option *ngFor=\"let cpl1 of cpl1Json \" [value]=\"cpl1.Value\">\r\n                                                    {{cpl1.Name}}\r\n                                                </mat-option>\r\n                                            </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                        <div class=\"text-danger\"\r\n                                            *ngIf=\"productForm['controls'].CPL1.status!='VALID' && isSubmitted\">\r\n                                            CPL1 Required.\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-9 mt-1\" *ngIf=\"productForm['controls'].CPL1.status=='VALID'\">\r\n                                        <mat-form-field class=\"w-100\">\r\n\r\n                                            <input matInput formControlName=\"CPL2\" placeholder=\"CPL2\" aria-label=\"CPL2\"\r\n                                                (keyup)=\"cplKeyPress($event,i,'CPL2')\" [matAutocomplete]=\"autoCPL2\"\r\n                                                required>\r\n\r\n                                            <mat-autocomplete #autoCPL2=\"matAutocomplete\">\r\n                                                <mat-option *ngFor=\"let cpl2 of filteredCPL2 \" [value]=\"cpl2.Value\">\r\n                                                    {{cpl2.Name}}\r\n                                                </mat-option>\r\n                                            </mat-autocomplete>\r\n                                        </mat-form-field>\r\n                                        <div class=\"text-danger\"\r\n                                            *ngIf=\"productForm['controls'].CPL2.status!='VALID' && isSubmitted\">\r\n                                            CPL2 Required.\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 mt-3 text-danger cursor-pointer\">\r\n                                        <mat-icon (click)=\"removeProductInfoForm(i)\" *ngIf=\"i!=0\">close</mat-icon>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                            <legend class=\"px-1 ml-2 legend_style\">Team Information</legend>\r\n                            <div class=\"mx-4 row\">\r\n                                <div class=\"col-sm\">\r\n                                    <angular2-multiselect formControlName=\"TeamInfo\" [data]=\"teamInfoJson\"\r\n                                        [settings]=\"teamInfoDropdownSettings\" >\r\n                                    </angular2-multiselect>\r\n\r\n\r\n                                    <div class=\"text-danger\" *ngIf=\"f.TeamInfo.invalid  && (f.TeamInfo.touched || isSubmitted)\">\r\n                                        TeamInfo Required.\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"card col-sm-4\" style=\"max-height: 150px;\r\n                                                overflow: auto;\" *ngIf=\"f.TeamInfo.valid\">\r\n                                    <label class=\"font-weight-bold\">Selected Team Info</label>\r\n                                    <label class=\"w-100 pl-3\" *ngFor=\"let team of f.TeamInfo?.value; let i=index;\">\r\n                                        <span>{{i+1}}. {{team.Name}}</span>\r\n                                    </label>\r\n                                </div> -->\r\n\r\n                            </div>\r\n                            <div class=\"mx-4 row mt-4\">\r\n                                <div class=\"col-sm\">\r\n                                    <mat-form-field class=\"w-100\">\r\n                                        <textarea style=\"height:100px\" readonly formControlName=\"AdditionalTeamInfo\"\r\n                                            matInput placeholder=\"Additional Credit Transaction Team\"></textarea>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"card mb-3\">\r\n                                    <div>\r\n                                        <mat-icon (click)=\"openDialog()\" class=\"font-weight-bold cursor-pointer\"\r\n                                            style=\"color: forestgreen;\">more_vert</mat-icon>\r\n                                    </div>\r\n                                    <div>\r\n                                        <mat-icon (click)='clearAdditionalTeamInfo()'\r\n                                            class=\"font-weight-bold cursor-pointer\" style=\"color: forestgreen;\">close\r\n                                        </mat-icon>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"mx-5 row mt-4 mb-4\">\r\n                                <label>Corp Finn Involved : </label>\r\n                                <mat-radio-group class=\"ml-5\" aria-label=\"Corp Finn Involved\"\r\n                                    formControlName=\"CorpFinnInvolved\">\r\n                                    <mat-radio-button color=\"primary\" class=\"mr-4\" value=true>Yes</mat-radio-button>\r\n                                    <mat-radio-button color=\"primary\" value=false>No</mat-radio-button>\r\n                                </mat-radio-group>\r\n                            </div> -->\r\n                        </fieldset>\r\n                        <div class=\"mx-4 row mt-4\">\r\n                            <label>Legal Docs Information:</label>\r\n                            <div class=\"text-danger\">\r\n                                By selecting 'No' an 'Executed Legal Docs' subfolder will not be created for this Credit\r\n                                Transaction or mirrored into the 'Legal' folder\r\n                                once transacion is closed. Only select 'No' if you will not need to store executed legal\r\n                                documents related to this transaction.\r\n                            </div>\r\n                            <div class=\"mt-3\">\r\n                                <span>Executed Legal Docs subfolder required for this transaction?:</span>\r\n                                <span>\r\n                                    <mat-radio-group class=\"ml-5\" aria-label=\"Is Legal ExeDocs\"\r\n                                        formControlName=\"IsLegalExeDocs\" (change)=\"radioChange($event)\">\r\n                                        <mat-radio-button color=\"primary\" class=\"mr-4\" value=false>No</mat-radio-button>\r\n                                        <mat-radio-button color=\"primary\" value=true>Yes</mat-radio-button>\r\n                                    </mat-radio-group>\r\n                                </span>\r\n                            </div>\r\n                            <fieldset class=\"w-100 mt-3 fieldset_style mb-3\">\r\n                                <div class=\"mx-4\">\r\n                                    <mat-form-field class=\"w-100 \">\r\n                                        <input type=\"text\" formControlName=\"FolderName\" matInput\r\n                                            placeholder=\"Folder Name\" required>\r\n                                    </mat-form-field>\r\n                                    <div class=\"text-danger\"\r\n                                        *ngIf=\"f.FolderName.invalid && f.FolderName.errors.required && isSubmitted\">\r\n                                        Folder Name Required.\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n                <div class=\"mr-2 mb-5\">\r\n                    <!-- {{isSubmitted}} -->\r\n                    \t<!-- <button mat-raised-button  class=\" bg_primary float-right\" (click)=\"createCreditTransaction(myForm)\">\r\n                                <mat-icon *ngIf=\"isSubmitted\"><mat-spinner color=\"accent\" diameter=\"20\" >\r\n                        </mat-spinner></mat-icon>Submit\r\n                      </button> -->\r\n                    <mat-spinner-button style=\"border-radius: 5px\" class=\"text-left float-right\"\r\n                        [options]=\"pitchSpinnerButtonOptions\" (btnClick)=\"createCreditTransaction(myForm)\"></mat-spinner-button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pt-2 px-5\">\r\n     <button type=\"button\" class=\"text-left col-sm-4 bg_primary\" color='primary' (mouseenter)=\"isShowContent=true\"\r\n          mat-raised-button>\r\n          <mat-icon>add</mat-icon> New\r\n          <mat-icon class=\"float-right mt-2\" *ngIf=\"!isShowContent\" matSuffix>keyboard_arrow_right</mat-icon>\r\n          <mat-icon class=\"float-right mt-2\" *ngIf=\"isShowContent\" matSuffix>keyboard_arrow_down</mat-icon>\r\n     </button>\r\n     <div class=\"row mx-0 mt-4\" *ngIf=\"isShowContent\">\r\n          <div class=\"col-sm-2 p-0 card menu_style\">\r\n               <mat-list role=\"list\" class=\"p-0\">\r\n                    <a (click)=\"menuSelectedOption=menuptions.PITCH_CREATION\" class=\"cursor-pointer\">\r\n                         <mat-list-item role=\"listitem\"  class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.PITCH_CREATION}\">\r\n                              {{menuptions.PITCH_CREATION}}</mat-list-item>\r\n                    </a>\r\n                    <a (click)=\"menuSelectedOption=menuptions.STANDARD_FOLDER\" class=\"cursor-pointer\">\r\n                         <mat-list-item role=\"listitem\" class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.STANDARD_FOLDER}\">\r\n                              {{menuptions.STANDARD_FOLDER}}</mat-list-item>\r\n                    </a>\r\n               \r\n                    <a (click)=\"menuSelectedOption=menuptions.CREDIT_TRANSACTION_FOLDER\" class=\"cursor-pointer\">\r\n                         <mat-list-item role=\"listitem\"  class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.CREDIT_TRANSACTION_FOLDER}\">\r\n                              {{menuptions.CREDIT_TRANSACTION_FOLDER}}</mat-list-item>\r\n                    </a>\r\n                    \r\n                    <a (click)=\"menuSelectedOption=menuptions.RESTRICTED_FOLDER\" class=\"cursor-pointer\" *ngIf=\"userRoles.ADMIN == app.userDetails.Role\">\r\n                         <mat-list-item role=\"listitem\"  class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.RESTRICTED_FOLDER}\">\r\n                              {{menuptions.RESTRICTED_FOLDER}}</mat-list-item>\r\n                    </a>\r\n                    <a (click)=\"menuSelectedOption=menuptions.RLATIONSHIP_FOLDER\" class=\"cursor-pointer\">\r\n                         <mat-list-item role=\"listitem\"  class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.RLATIONSHIP_FOLDER}\">\r\n                              {{menuptions.RLATIONSHIP_FOLDER}}</mat-list-item>\r\n                    </a>\r\n                    \r\n                    <a (click)=\"menuSelectedOption=menuptions.ADD_CLIENT\" class=\"cursor-pointer\">\r\n                         <mat-list-item role=\"listitem\"  class=\"border_bottom\"\r\n                              [ngClass]=\"{'bg_primary': menuSelectedOption == menuptions.ADD_CLIENT}\">\r\n                              {{menuptions.ADD_CLIENT}}</mat-list-item>\r\n                    </a>\r\n               </mat-list>\r\n          </div>\r\n\r\n          <div class=\"col ml-3 card\" *ngIf=\"menuSelectedOption !=''\">\r\n               <div *ngIf=\"menuSelectedOption == menuptions.PITCH_CREATION\">\r\n                    <app-pitchcreation></app-pitchcreation>\r\n               </div>\r\n               <div *ngIf=\"menuSelectedOption == menuptions.RLATIONSHIP_FOLDER\">\r\n                    <app-relationshipcreation></app-relationshipcreation>\r\n               </div>\r\n               <div  *ngIf=\"menuSelectedOption == menuptions.CREDIT_TRANSACTION_FOLDER\">\r\n                    <app-credittransaction></app-credittransaction>\r\n               </div>\r\n               <div  *ngIf=\"menuSelectedOption == menuptions.ADD_CLIENT\">\r\n                    <app-addclient></app-addclient>\r\n               </div>\r\n          </div>\r\n\r\n     </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/teaminformaton/teaminformaton.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/teaminformaton/teaminformaton.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mx-0\">\r\n        <span class=\"col-sm-11 font-weight-bold\">Team information selection</span>\r\n        <mat-icon class=\"float-right col-sm-1 text-right cursor-pointer\" (click)=\"closeDialog()\">close</mat-icon>\r\n            </div>\r\n            <hr/>\r\n<div class=\"row mx-0 cotainer\">\r\n    \r\n       \r\n    <mat-card class=\"col-sm-5 mr-2 height_scrol\" >\r\n            <mat-form-field class=\"w-100 \">\r\n                    <input type=\"text\" [(ngModel)]=\"searchText\" matInput placeholder=\"Search\">\r\n            </mat-form-field>\r\n        <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" *ngFor=\"let x of source | listfilter:searchText; let i = index\">\r\n                <mat-radio-button color=\"primary\"  [value]=\"x\"\r\n                    (change)=\"selection = $event.value\">\r\n                    <small class=\"text-wrap\">{{x.Name}}</small>\r\n                </mat-radio-button>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </mat-card>\r\n    <mat-card class=\"h-25\" style=\"margin-top:10em\">\r\n        <div class=\"mb-3\">\r\n                <mat-icon class=\"cursor-pointer bg_primary brder_radius_5px\" (click)=\"movelefttoright()\">keyboard_arrow_right</mat-icon>\r\n            \r\n        </div>\r\n        <div>\r\n                <mat-icon class=\"cursor-pointer bg_primary brder_radius_5px\" (click)=\"moverighttoleft()\">keyboard_arrow_left</mat-icon>\r\n        </div>\r\n    </mat-card>\r\n    <mat-card class=\"col-sm-5 ml-2 height_scrol\">\r\n        <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\" *ngFor=\"let x of destination; let i = index\">\r\n                <mat-radio-button color=\"primary\"  [value]=\"x\"\r\n                    (change)=\"destinationSelection = $event.value\">\r\n                    <small class=\"text-wrap\">{{x.Name}}</small>\r\n                </mat-radio-button>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </mat-card>\r\n</div>\r\n<hr/>\r\n<div>\r\n        <button type=\"button\" class=\"float-right bg_primary\" (click)=\"sendSelectedData()\" [disabled]=\"destination.length==0\"  mat-raised-button>\r\nOk                \r\n           </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container mt-5\"> -->\r\n        \r\n    <!-- <form [frmGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit()\">\r\n        <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.email.errors }\" placeholder=\"Enter email here\"/>\r\n        <div *ngIf=\"submitted && fval.email.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"fval.email.errors.required\">Email is required</div>\r\n        <div *ngIf=\"fval.email.errors.email\">Enter valid email address</div>\r\n        </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.password.errors }\" placeholder=\"Enter password here\" />\r\n        <div *ngIf=\"submitted && fval.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"fval.password.errors.required\">Password is required</div>\r\n        </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n        Login\r\n        </button>\r\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n        </form> -->\r\n    <mat-card class=\"mat-elevation-z3 px-5\">\r\n           \r\n        <mat-card-title>Login</mat-card-title>\r\n        <mat-card-content>\r\n            \r\n            <form [formGroup]=\"loginForm\" >\r\n                <div *ngIf=\"errorMsg\" class=\"text-center mb-3 mt-1\">\r\n                    <label class=\"text-danger\">{{errorMsg}}</label>\r\n                </div>\r\n              <div>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"email\" required>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"submitted && fval.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"fval.email.errors.email\">Enter valid email address</div>\r\n                    </div>\r\n                </div>\r\n                    <div>\r\n                    <mat-form-field>\r\n                        <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" required>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"submitted && fval.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                \r\n                        <div>\r\n                                <mat-spinner-button style=\"border-radius: 5px\" class=\"float-right\"\r\n                                [options]=\"spinnerButtonOptions\"\r\n                                (btnClick)=\"onFormSubmit()\">\r\n                              </mat-spinner-button>\r\n                            <!-- <button type=\"button\" class=\"bg_primary float-right\" mat-raised-button  (click)=\"onFormSubmit()\">Login</button> -->\r\n\r\n                        </div>      \r\n            </form>\r\n        </mat-card-content>\r\n        <!-- <mat-card-footer class=\"p-3\">\r\n                        <button type=\"button\" class=\"bg_primary\" mat-raised-button  (click)=\"onFormSubmit()\">Login</button>\r\n    \r\n        </mat-card-footer> -->\r\n    </mat-card>\r\n\r\n\r\n<!-- </div> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pitchcreation/pitchcreation.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pitchcreation/pitchcreation.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-content\" class=\"mt-3 mb-5\">\r\n    <div class=\" mt-4 ml-2\">\r\n                     <div class=\"container\">\r\n                        <form class=\"\" [formGroup]=\"pitchCreationForm\" #myForm=\"ngForm\">\r\n                             <div class=\"row mx-0\">\r\n                                <mat-form-field class=\"w-100 \">\r\n                                     <input type=\"text\" formControlName=\"Name\" matInput placeholder=\"Name\" required>\r\n                                </mat-form-field>\r\n                                <div class=\"text-danger\" *ngIf=\"f.Name.invalid && f.Name.errors.required && isSubmitted\">\r\n                                    Name Required.\r\n                                </div>\r\n                                <mat-form-field class=\"w-100\">\r\n                                     <input matInput [matDatepicker]=\"picker\" [min]='pitchMinDate' formControlName=\"PitchDate\" placeholder=\"Pitch Date\" required>\r\n                                     <mat-datepicker-toggle matSuffix [for]=\"picker\"> </mat-datepicker-toggle>\r\n                                     <mat-datepicker #picker></mat-datepicker>\r\n                                </mat-form-field>\r\n                                \r\n                                <div class=\"text-danger\" *ngIf=\"f.PitchDate.invalid && f.PitchDate.touched && f.PitchDate.errors?.matDatepickerMin\">\r\n                                        Selected Pitch Date is less than today date.\r\n                                    </div>\r\n                                <div class=\"text-danger\" *ngIf=\"f.PitchDate.invalid && f.PitchDate.errors.required && (f.PitchDate.touched || isSubmitted)\">\r\n                                        Pitch date Required.\r\n                                    </div> \r\n                                <fieldset class=\"mt-2 mb-2 w-100 fieldset_style\">\r\n                                     <legend class=\"px-1 ml-2 legend_style\" > Pitch Information</legend>\r\n                                     <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                                             <legend class=\"px-1 ml-2 legend_style\">Relationship Information</legend>\r\n                                             <div class=\"mx-4\">\r\n                                                     <mat-form-field class=\"w-100\">\r\n                                                            <mat-label>Industry</mat-label>\r\n                                                            <mat-select formControlName=\"Industry\" [multiple]=\"false\">\r\n                                                                <mat-option>\r\n                                                                    <ngx-mat-select-search [placeholderLabel]=\"'Search industry'\" [formControl]=\"industrySearchCtrl\" [noEntriesFoundLabel]=\"'no matching team found'\" ></ngx-mat-select-search>\r\n                                                                </mat-option>\r\n                                                                <mat-option *ngFor=\"let industry of industryJson | listfilter:industrySearchText \" [value]=\"industry.Value\">\r\n                                                                        <small>{{industry.Name}}</small>\r\n                                                                      </mat-option>\r\n                                                            </mat-select>\r\n                                                          <!-- <input matInput  placeholder=\"Industry\" formControlName=\"Industry\" aria-label=\"Industry\" [matAutocomplete]=\"autoIndustry\" required>\r\n                                                          <mat-autocomplete #autoIndustry=\"matAutocomplete\">\r\n                                                             <mat-option *ngFor=\"let industry of industryJson \" [value]=\"industry.Value\">\r\n                                                               <small>{{industry.Name}}</small>\r\n                                                             </mat-option>\r\n                                                          </mat-autocomplete> -->\r\n                                                     </mat-form-field>\r\n                                                     <div class=\"text-danger\" *ngIf=\"f.Industry.invalid && f.Industry.errors.required && isSubmitted\">\r\n                                                            Industry Required.\r\n                                                        </div>\r\n                                                     <mat-form-field class=\"w-100\">\r\n                                                            <mat-label>Client Name</mat-label>\r\n                                                            <mat-select formControlName=\"ClientName\" [multiple]=\"false\">\r\n                                                                <mat-option>\r\n                                                                    <ngx-mat-select-search [placeholderLabel]=\"'Search client name'\" [formControl]=\"clientNameSearchCtrl\" [noEntriesFoundLabel]=\"'no matching client found'\" ></ngx-mat-select-search>\r\n                                                                </mat-option>\r\n                                                                <mat-option *ngFor=\"let client of clientNamesJson | listfilter:clientNameSearchText\"[value]=\"client.Value\">\r\n                                                                        <small>{{client.Name}}</small>\r\n                                                                     </mat-option>\r\n                                                               \r\n                                                            </mat-select>\r\n                                                         <!-- <input matInput placeholder=\"Client Name\" formControlName=\"ClientName\" aria-label=\"Client Name\" [matAutocomplete]=\"autoClient\" required>\r\n                                                             <mat-autocomplete #autoClient=\"matAutocomplete\">\r\n                                                                 <mat-option *ngFor=\"let client of clientNamesJson \"[value]=\"client.Value\">\r\n                                                                     <small>{{client.Name}}</small>\r\n                                                                  </mat-option>\r\n                                                             </mat-autocomplete> -->\r\n                                                     </mat-form-field>\r\n                                                     <div class=\"text-danger\" *ngIf=\"f.ClientName.invalid && f.ClientName.errors.required && isSubmitted\">\r\n                                                            Client Name Required.\r\n                                                        </div>\r\n                                             </div>\r\n                                     </fieldset>\r\n                                     <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                                         <legend class=\"px-1 ml-2 legend_style\">Product Information</legend>\r\n                                         <div class=\"row mx-1\">\r\n                                         <mat-icon (click)=\"addProductInfoForm()\" class=\"float-right mx-4 mb-2 bg_primary cursor-pointer\" *ngIf=\"!productInfoForm.invalid\">add</mat-icon>\r\n                                         <mat-icon (click)=\"removeAllProductInfoForm()\" *ngIf=\"productInfoForm.length!=1\" class=\"float-right mx-4 mb-2 bg_primary cursor-pointer\">close</mat-icon>\r\n                                        </div>\r\n                                         <div class=\"mx-4  mb-2 fieldset_style\" *ngFor=\"let productForm of productInfoForm.controls; let i=index\">\r\n                                             <div [formGroup]=\"productForm\" class=\"row m-0 mt-1\">\r\n                                             <div class=\"col-sm-2 mt-1\">\r\n                                                 <mat-form-field class=\"w-100\">\r\n                                                        <!-- <mat-label>CPL1</mat-label>\r\n                                                        <mat-select formControlName=\"CPL1\" [multiple]=\"false\" (selectionChange)='CPL1OnChange($event.value)'>\r\n                                                                 <mat-option *ngFor=\"let cpl1 of cpl1Json \" [value]=\"cpl1.Value\">\r\n                                                                        <small>{{cpl1.Name}}</small>\r\n                                                                    </mat-option>\r\n                                                        </mat-select> -->\r\n                                                     <input matInput formControlName=\"CPL1\" placeholder=\"CPL1\" aria-label=\"CPL1\" (keyup)=\"cplKeyPress($event,i,'CPL1')\" [matAutocomplete]=\"autoCPL1\" required>\r\n                                                     <mat-autocomplete #autoCPL1=\"matAutocomplete\" (optionSelected)='CPL1OnChange($event.option.value)'>\r\n                                                             <mat-option *ngFor=\"let cpl1 of cpl1Json \" [value]=\"cpl1.Value\">\r\n                                                                 <small>{{cpl1.Name}}</small>\r\n                                                             </mat-option>\r\n                                                     </mat-autocomplete>\r\n                                                 </mat-form-field>\r\n                                                 <div class=\"text-danger\" *ngIf=\"productForm['controls'].CPL1.status!='VALID' && isSubmitted\">\r\n                                                        CPL1 Required.\r\n                                                    </div> \r\n                                             </div>\r\n                                             <div class=\"col-sm-9 mt-1\" *ngIf=\"productForm['controls'].CPL1.status=='VALID'\">\r\n                                                 <mat-form-field class=\"w-100\">\r\n                                                        <!-- <mat-label>CPL2</mat-label>\r\n                                                        <mat-select formControlName=\"CPL2\" [multiple]=\"false\">\r\n                                                                <mat-option *ngFor=\"let cpl2 of filteredCPL2 \"[value]=\"cpl2.Value\">\r\n                                                                        <small>{{cpl2.Name}}</small>\r\n                                                                    </mat-option>\r\n                                                        </mat-select> -->\r\n                                                     <input matInput formControlName=\"CPL2\"  placeholder=\"CPL2\" aria-label=\"CPL2\" (keyup)=\"cplKeyPress($event,i,'CPL2')\" [matAutocomplete]=\"autoCPL2\" required>\r\n\r\n                                                     <mat-autocomplete #autoCPL2=\"matAutocomplete\">\r\n                                                         <mat-option *ngFor=\"let cpl2 of filteredCPL2 \"[value]=\"cpl2.Value\">\r\n                                                             <small>{{cpl2.Name}}</small>\r\n                                                         </mat-option>\r\n                                                     </mat-autocomplete>\r\n                                                 </mat-form-field>\r\n                                                 <div class=\"text-danger\" *ngIf=\"productForm['controls'].CPL2.status!='VALID' && isSubmitted\">\r\n                                                        CPL2 Required.\r\n                                                    </div>\r\n                                             </div>\r\n                                             <div class=\"col-sm-1 mt-3 text-danger cursor-pointer\">\r\n     <mat-icon (click)=\"removeProductInfoForm(i)\" *ngIf=\"i!=0\">close</mat-icon>\r\n     \r\n                                             </div>\r\n                                             </div>\r\n                                         </div>\r\n                                     </fieldset>\r\n                                     <fieldset class=\"mt-2 mb-2 mx-2 fieldset_style\">\r\n                                             <legend class=\"px-1 ml-2 legend_style\">Team Information</legend>\r\n                                             <div class=\"mx-4 row\">\r\n                                                 <div class=\"col-sm\">\r\n                                                        <angular2-multiselect formControlName=\"TeamInfo\"\r\n                                                         [data]=\"teamInfoJson\" \r\n                                                        [settings]=\"teamInfoDropdownSettings\" \r\n                                                        (onSelect)=\"onItemSelect($event)\" \r\n                                                        \r\n                                                        (onSelectAll)=\"onSelectAll($event)\"\r\n                                                        >\r\n                                                    </angular2-multiselect>\r\n    <!-- <ng-multiselect-dropdown formControlName=\"TeamInfo\"\r\n    [placeholder]=\"'Select team info'\"\r\n    [data]=\"teamInfoJson\"\r\n    [settings]=\"teamInfoDropdownSettings\"\r\n    (onSelect)=\"onItemSelect($event)\"\r\n    (onSelectAll)=\"onSelectAll($event)\"\r\n  >\r\n  </ng-multiselect-dropdown> -->\r\n                                                <!-- <mat-form-field class=\"w-100\">\r\n                                                    \r\n                                                    <mat-label>Team Info</mat-label>\r\n                                                    <mat-select formControlName=\"TeamInfo\" [multiple]=\"true\" #multiSelect>\r\n                                                        <mat-option>\r\n                                                            <ngx-mat-select-search [placeholderLabel]=\"'Find team...'\" [noEntriesFoundLabel]=\"'no matching team found'\"  [formControl]=\"teamInfoSearchCtrl\"></ngx-mat-select-search>\r\n                                                        </mat-option>\r\n                                                      <mat-option *ngFor=\"let team of filteredTeamInfo._events[0]\" [value]=\"team\">\r\n                                                            {{team.Name}}\r\n                                                      </mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field> -->\r\n                                                <div class=\"text-danger\" *ngIf=\"f.TeamInfo.invalid  && isSubmitted\">\r\n                                                        TeamInfo Required.\r\n                                                    </div>\r\n                                            </div>\r\n                                                <div class=\"card col-sm-4\" style=\"max-height: 150px;\r\n                                                overflow: auto;\" *ngIf=\"f.TeamInfo.valid\">\r\n                                                <label class=\"font-weight-bold\">Selected Team Info</label>\r\n                                                <label class=\"w-100 pl-3\" *ngFor=\"let team of f.TeamInfo?.value; let i=index;\">\r\n                                                        <span>{{i+1}}. {{team.Name}}</span>\r\n                                                </label>\r\n                                                    </div>\r\n                                              \r\n                                             </div>\r\n                                             <div class=\"mx-4 row mt-4\">\r\n                                                             <div class=\"col-sm\">\r\n                                                                  <mat-form-field class=\"w-100\">\r\n                                                                       <textarea style=\"height:100px\" readonly formControlName=\"AdditionalTeamInfo\" matInput placeholder=\"Additional Pitch Team\"></textarea>\r\n                                                                  </mat-form-field>\r\n                                                             </div>\r\n                                                             <div class=\"card mb-3\">\r\n                                                                             <div>\r\n                                                                                <mat-icon (click)=\"openDialog()\" class=\"font-weight-bold cursor-pointer\" style=\"color: forestgreen;\">more_vert</mat-icon>\r\n                                                                             </div>\r\n                                                                             <div>\r\n                                                                               <mat-icon (click)='clearAdditionalTeamInfo()' class=\"font-weight-bold cursor-pointer\" style=\"color: forestgreen;\">close</mat-icon>\r\n                                                                             </div>\r\n                                                                        </div>\r\n                                                          </div>\r\n                                                          <div class=\"mx-5 row mt-4 mb-4\">\r\n                                                              <label>Corp Finn Involved : </label>\r\n                                                                <mat-radio-group class=\"ml-5\" aria-label=\"Corp Finn Involved\" formControlName=\"CorpFinnInvolved\">\r\n                                                                        <mat-radio-button color=\"primary\" class=\"mr-4\" value=true>Yes</mat-radio-button>\r\n                                                                        <mat-radio-button color=\"primary\" value=false>No</mat-radio-button>\r\n                                                                      </mat-radio-group>\r\n                                                          </div>\r\n                                     </fieldset>\r\n                                </fieldset>\r\n                             </div>\r\n                             <div class=\"mr-2 mb-5\">\r\n                                 <mat-spinner-button style=\"border-radius: 5px\" class=\"text-left float-right\" [options]=\"pitchSpinnerButtonOptions\" (btnClick)=\"createResource(myForm)\"></mat-spinner-button>\r\n                             </div>\r\n                        </form>\r\n                     </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/relationshipcreation/relationshipcreation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/relationshipcreation/relationshipcreation.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-4 mx-4\">\r\n    <form class=\"\" [formGroup]=\"relationshipForm\" #myForm=\"ngForm\">\r\n        <div class=\"bg-light card p-2 font-weight-bold\">\r\n            Relationship Details\r\n        </div>\r\n        <div class=\" mx-4 mt-2\">\r\n            <mat-form-field class=\"w-100 \">\r\n                <input type=\"text\" formControlName=\"ClientName\" matInput placeholder=\"Client Name\" required>\r\n            </mat-form-field>\r\n            <div class=\"text-danger\"\r\n                *ngIf=\"f.ClientName.invalid && f.ClientName.errors.required && isSubmitted\">\r\n                Client Name Required.\r\n            </div>\r\n            <!-- <mat-form-field class=\"w-100\">\r\n                <mat-label>Select Coverage Team</mat-label>\r\n                <mat-select formControlName=\"CoverageTeam\" [multiple]=\"false\" required>\r\n                    <mat-option>\r\n                        <ngx-mat-select-search [placeholderLabel]=\"'Search coverage team'\"\r\n                            [formControl]=\"coverageteamSearchCtrl\" [noEntriesFoundLabel]=\"'no matching team found'\">\r\n                        </ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let item of coverageTeamInfoJSON | listfilter:coverageTeamSearchText \"\r\n                        [value]=\"item.Value\">\r\n                        {{item.Name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n\r\n            </mat-form-field>\r\n            <div class=\"text-danger\" *ngIf=\"f.CoverageTeam.invalid && f.CoverageTeam.errors.required && isSubmitted\">\r\n                Coverage team Required.\r\n            </div>\r\n   \r\n            <mat-form-field class=\"w-100\">\r\n                <mat-label>Select Relationship Type</mat-label>\r\n                <mat-select formControlName=\"RelationshipType\" [multiple]=\"false\" required>\r\n                    <mat-option value=\"Prospect\">\r\n                        Prospect\r\n                    </mat-option>\r\n                    <mat-option value=\"Inactive\">\r\n                        Inactive\r\n                    </mat-option>\r\n                </mat-select>\r\n\r\n            </mat-form-field>\r\n            <div class=\"text-danger\"\r\n                *ngIf=\"f.RelationshipType.invalid && f.RelationshipType.errors.required && isSubmitted\">\r\n                Relationship type Required.\r\n            </div> -->\r\n        </div>\r\n        <div class=\"bg-light card p-2 font-weight-bold\">\r\n            Industry Details\r\n        </div>\r\n        <div class=\" mx-4 mt-2\">\r\n            <mat-form-field class=\"w-100\">\r\n                <mat-label>Select Industry</mat-label>\r\n                <mat-select formControlName=\"Industry\" [multiple]=\"false\" required>\r\n                    <mat-option>\r\n                        <ngx-mat-select-search [placeholderLabel]=\"'Search cgb vertical'\"\r\n                            [formControl]=\"idustrySearchCtrl\" [noEntriesFoundLabel]=\"'no matching Industry'\">\r\n                        </ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let item of idustryJSON | listfilter:idustrySearchText \"\r\n                        [value]=\"item.Value\">\r\n                        {{item.Name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n\r\n            </mat-form-field>\r\n            <mat-error  *ngIf=\"f.Industry.invalid && f.Industry.errors.required && isSubmitted\">\r\n                Industry Required.\r\n            </mat-error>\r\n            <mat-form-field class=\"w-100\">\r\n                <mat-label>Select Sub-Industry</mat-label>\r\n                <mat-select formControlName=\"SubIndustry\" [multiple]=\"false\" required>\r\n                    <mat-option>\r\n                        <ngx-mat-select-search [placeholderLabel]=\"'Search Sub Industry'\"\r\n                            [formControl]=\"subIndustrySearchCtrl\" [noEntriesFoundLabel]=\"'no matching Sub Industry'\">\r\n                        </ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let item of subIndustryInfoJSON | listfilter:subIndustrySearchText \"\r\n                        [value]=\"item.Value\">\r\n                        {{item.Name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n\r\n            </mat-form-field>\r\n            <div class=\"text-danger\" *ngIf=\"f.SubIndustry.invalid && f.SubIndustry.errors.required && isSubmitted\">\r\n                Sub-Industry Required.\r\n            </div>\r\n        </div>\r\n        <div class=\"mt-2 mx-0\" *ngIf=\"!isFromOther\">\r\n                <mat-spinner-button style=\"border-radius: 5px\" class=\"mb-4 text-left float-right\" [options]=\"relationSpinnerButtonOptions\" (btnClick)=\"createRelationship(myForm)\"></mat-spinner-button>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





var routes = [
    {
        path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dataedcded{\r\n    border: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhZWRjZGVke1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'AIBUI';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem('loginUserDetails'));
    };
    AppComponent.prototype.logout = function () {
        this.userDetails = null;
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/teaminformaton/teaminformaton.component */ "./src/app/components/home/teaminformaton/teaminformaton.component.ts");
/* harmony import */ var _components_pitchcreation_pitchcreation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pitchcreation/pitchcreation.component */ "./src/app/components/pitchcreation/pitchcreation.component.ts");
/* harmony import */ var _pipes_listfilter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/listfilter.pipe */ "./src/app/pipes/listfilter.pipe.ts");
/* harmony import */ var _components_relationshipcreation_relationshipcreation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/relationshipcreation/relationshipcreation.component */ "./src/app/components/relationshipcreation/relationshipcreation.component.ts");
/* harmony import */ var _components_credittransaction_credittransaction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/credittransaction/credittransaction.component */ "./src/app/components/credittransaction/credittransaction.component.ts");
/* harmony import */ var _components_addclient_addclient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/addclient/addclient.component */ "./src/app/components/addclient/addclient.component.ts");
/* harmony import */ var _components_addclient_viewclient_viewclient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/addclient/viewclient/viewclient.component */ "./src/app/components/addclient/viewclient/viewclient.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_13__["TeaminformatonComponent"],
                _components_pitchcreation_pitchcreation_component__WEBPACK_IMPORTED_MODULE_14__["PitchcreationComponent"],
                _pipes_listfilter_pipe__WEBPACK_IMPORTED_MODULE_15__["ListfilterPipe"],
                _components_relationshipcreation_relationshipcreation_component__WEBPACK_IMPORTED_MODULE_16__["RelationshipcreationComponent"],
                _components_credittransaction_credittransaction_component__WEBPACK_IMPORTED_MODULE_17__["CredittransactionComponent"],
                _components_addclient_addclient_component__WEBPACK_IMPORTED_MODULE_18__["AddclientComponent"],
                _components_addclient_viewclient_viewclient_component__WEBPACK_IMPORTED_MODULE_19__["ViewclientComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"]
            ],
            entryComponents: [_components_home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_13__["TeaminformatonComponent"], _components_addclient_viewclient_viewclient_component__WEBPACK_IMPORTED_MODULE_19__["ViewclientComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/roles.enum.ts":
/*!**************************************!*\
  !*** ./src/app/common/roles.enum.ts ***!
  \**************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["BANKER"] = "Banker";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/components/addclient/addclient.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addclient/addclient.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: #007bff !important;\r\n    text-decoration: underline !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRjbGllbnQvYWRkY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGRjbGllbnQvYWRkY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/addclient/addclient.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addclient/addclient.component.ts ***!
  \*************************************************************/
/*! exports provided: AddclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclientComponent", function() { return AddclientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_addclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/addclient.service */ "./src/app/services/addclient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _viewclient_viewclient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewclient/viewclient.component */ "./src/app/components/addclient/viewclient/viewclient.component.ts");









var AddclientComponent = /** @class */ (function () {
    function AddclientComponent(formBuilder, salesforceClientService, dialog) {
        this.formBuilder = formBuilder;
        this.salesforceClientService = salesforceClientService;
        this.dialog = dialog;
        this.SalesforceClients = [
            {
                "wcisId": "",
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Energy",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Energy",
                "state": "MN"
            },
            {
                "wcisId": 2337754191,
                "clientName": "Accent Inc.",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Customer & Retail",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 2337754192,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MN"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MD"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MD"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MD"
            },
            {
                "wcisId": 233775419,
                "clientName": "ohello Golf Club Inc",
                "Sponsor": "",
                "tickerSymbol": "",
                "taxId": "",
                "industry": "Energy & Power",
                "city": "OTHELLO",
                "subIndustry": "Consumer Products",
                "state": "MD"
            }
        ];
        // searchText:any;
        this.display = "none";
        this.isValidFormSubmitted = true;
        this.resultsLength = 0;
        this.isDataFound = true;
        this.displayedColumns = ['action', 'clientName', 'industry', 'city', 'state', 'taxId', 'wcisId'];
        this.clientSpinnerButtonOptions = {
            active: false,
            text: 'Search Salesforce Clients',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
        };
        this.searchForm = this.formBuilder.group({
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    // ngAfterViewInit() {
    //   debugger
    //   this.searchResult.paginator = this.paginator;
    //   // this.searchResult.sort = this.sort;
    // }
    AddclientComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AddclientComponent.prototype, "getSearchText", {
        get: function () {
            return this.searchForm.get('searchText');
        },
        enumerable: true,
        configurable: true
    });
    AddclientComponent.prototype.removeSearchText = function () {
        this.getSearchText.setValue('');
    };
    AddclientComponent.prototype.searchClientDetails = function () {
        if (this.searchForm.invalid) {
            this.isValidFormSubmitted = false;
            this.searchForm.markAllAsTouched();
            return;
        }
        this.isValidFormSubmitted = true;
        this.clientSpinnerButtonOptions.active = true;
        // this will be comment after dynamic start
        this.resultsLength = this.SalesforceClients.length;
        this.searchResult = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.SalesforceClients);
        this.searchResult.paginator = this.paginator;
        this.searchResult.sort = this.sort;
        this.display = '';
        this.clientSpinnerButtonOptions.active = false;
        // this will be comment after dynamic end
        // this.salesforceClientService.searchSalesforceClients(this.getSearchText.value).subscribe(result => {
        //   this.clientSpinnerButtonOptions.active=false;
        //   if(result.length > 0){
        //     this.display='';
        //     this.resultsLength=result.length;
        //     this.searchResult= new MatTableDataSource(result);
        //     this.searchResult.paginator = this.paginator;
        //     this.searchResult.sort=this.sort;
        //   }
        //   else{
        //     this.isDataFound=false;
        //     this.display='none';
        //   }
        // });
    };
    AddclientComponent.prototype.viewClienDetails = function (data) {
        var dialogRef = this.dialog.open(_viewclient_viewclient_component__WEBPACK_IMPORTED_MODULE_8__["ViewclientComponent"], {
            width: '80%',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AddclientComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_addclient_service__WEBPACK_IMPORTED_MODULE_2__["AddclientService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
    ], AddclientComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true })
    ], AddclientComponent.prototype, "sort", void 0);
    AddclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addclient',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addclient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/addclient.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addclient.component.css */ "./src/app/components/addclient/addclient.component.css")).default]
        })
    ], AddclientComponent);
    return AddclientComponent;
}());



/***/ }),

/***/ "./src/app/components/addclient/viewclient/viewclient.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/addclient/viewclient/viewclient.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test{\r\n\tcolor:green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRjbGllbnQvdmlld2NsaWVudC92aWV3Y2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZGNsaWVudC92aWV3Y2xpZW50L3ZpZXdjbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0e1xyXG5cdGNvbG9yOmdyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/addclient/viewclient/viewclient.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/addclient/viewclient/viewclient.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewclientComponent", function() { return ViewclientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ViewclientComponent = /** @class */ (function () {
    function ViewclientComponent(dialogRef, source) {
        this.dialogRef = dialogRef;
        this.source = source;
        this.sampleData = [
            {
                Name: "Folder 1",
                ModifiedDate: "Todays date",
                ModifiedBy: "Banker",
                IsFolder: true
            },
            {
                Name: "Document 1",
                ModifiedDate: "Todays date",
                ModifiedBy: "Banker",
                IsFolder: false
            },
            {
                Name: "Folder 2",
                ModifiedDate: "Todays date",
                ModifiedBy: "Banker",
                IsFolder: true
            },
            {
                Name: "Folder 3",
                ModifiedDate: "Todays date",
                ModifiedBy: "Banker",
                IsFolder: true
            },
            {
                Name: "Document 2",
                ModifiedDate: "Todays date",
                ModifiedBy: "Banker",
                IsFolder: false
            },
        ];
    }
    ViewclientComponent.prototype.ngOnInit = function () {
        this.master = this.source;
    };
    ViewclientComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ViewclientComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ViewclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewclient',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewclient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/addclient/viewclient/viewclient.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewclient.component.css */ "./src/app/components/addclient/viewclient/viewclient.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ViewclientComponent);
    return ViewclientComponent;
}());



/***/ }),

/***/ "./src/app/components/credittransaction/credittransaction.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/credittransaction/credittransaction.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fieldset_style{\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: #efe6e6;\r\n    border-radius: 5px;\r\n}\r\n.legend_style{\r\n    width: auto;\r\n    color: #7e7f80;\r\n    font-size: 14px;\r\n}\r\n/* ::ng-deep .clear-all c-icon{\r\n    display: none !important;;\r\n}\r\n::ng-deep .dropdown-list ul li {\r\n    padding: 5px !important;\r\n} */\r\n/* ::ng-deep.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n    background: maroon !important;\r\n}\r\n::ng-deep.selected-list .c-list .c-token {\r\n    background: maroon;\r\n}\r\n::ng-deep.pure-checkbox input[type=\"checkbox\"] + label:before {\r\n    color: maroon !important;\r\n    border: 1px solid maroon !important;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVkaXR0cmFuc2FjdGlvbi9jcmVkaXR0cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTs7Ozs7R0FLRztBQUNIOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlZGl0dHJhbnNhY3Rpb24vY3JlZGl0dHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZHNldF9zdHlsZXtcclxuICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItY29sb3I6ICNlZmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxlZ2VuZF9zdHlsZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgY29sb3I6ICM3ZTdmODA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLyogOjpuZy1kZWVwIC5jbGVhci1hbGwgYy1pY29ue1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OztcclxufVxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLWxpc3QgdWwgbGkge1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogOjpuZy1kZWVwLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogbWFyb29uICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbn1cclxuOjpuZy1kZWVwLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbG9yOiBtYXJvb24gIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcm9vbiAhaW1wb3J0YW50O1xyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/components/credittransaction/credittransaction.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/credittransaction/credittransaction.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CredittransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredittransactionComponent", function() { return CredittransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_credittransaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/credittransaction.service */ "./src/app/services/credittransaction.service.ts");
/* harmony import */ var _home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/teaminformaton/teaminformaton.component */ "./src/app/components/home/teaminformaton/teaminformaton.component.ts");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/snackbar.service */ "./src/app/services/snackbar.service.ts");









var CredittransactionComponent = /** @class */ (function () {
    function CredittransactionComponent(snackBarService, dialog, formBuilder, creditTransactionservice) {
        var _this = this;
        this.snackBarService = snackBarService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.creditTransactionservice = creditTransactionservice;
        this.isSubmitted = false;
        this.minDate = new Date();
        this.industrySearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.industrySearchText = '';
        this.clientNameSearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.clientNameSearchText = '';
        this.reportTypeSearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.reportTypeSearchText = '';
        this.teamInfoDropdownSettings = {
            text: "Select Team Info",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableCheckAll: false,
            labelKey: 'Name',
            primaryKey: 'Value',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.pitchSpinnerButtonOptions = {
            active: false,
            text: 'Submit',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
        };
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.teamInfoJson = [];
        this.filteredCPL2 = [];
        this.cpl2Json = [];
        this.cpl1Json = [];
        this.reportTypesJson = [];
        this.clientNamesJson = [];
        this.industryJson = [];
        this.selectedCRTeamInfo = '';
        this.creditTransactionservice.getIndustryDetails().subscribe(function (result) {
            _this.industryJson = result;
        });
        this.creditTransactionservice.getClientName().subscribe(function (result) {
            _this.clientNamesJson = result;
        });
        this.creditTransactionservice.getReportTypes().subscribe(function (result) {
            _this.reportTypesJson = result;
        });
        this.creditTransactionservice.getCreditCPL1().subscribe(function (result) {
            _this.cpl1Json = result;
        });
        this.creditTransactionservice.getCreditCPL2().subscribe(function (result) {
            _this.cpl2Json = result;
        });
        this.creditTransactionservice.getCreditTransactionTeams().subscribe(function (result) {
            _this.teamInfoJson = result;
        });
    }
    CredittransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initform();
        this.industrySearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.industrySearchText = _this.industrySearchCtrl.value;
        });
        this.clientNameSearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.clientNameSearchText = _this.clientNameSearchCtrl.value;
        });
        this.reportTypeSearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.reportTypeSearchText = _this.reportTypeSearchCtrl.value;
        });
    };
    CredittransactionComponent.prototype.initform = function () {
        this.creditTransactionForm = this.formBuilder.group({
            CreditActionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            CreditActionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Industry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ClientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ReportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ProductInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            TeamInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            AdditionalTeamInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            IsLegalExeDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            FolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.creditTransactionForm.controls['FolderName'].disable();
        this.addProductInfoForm();
    };
    Object.defineProperty(CredittransactionComponent.prototype, "f", {
        get: function () {
            return this.creditTransactionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CredittransactionComponent.prototype, "productInfoForm", {
        get: function () {
            return this.f.ProductInfo;
        },
        enumerable: true,
        configurable: true
    });
    CredittransactionComponent.prototype.addProductInfoForm = function () {
        if (!this.f.ProductInfo.invalid) {
            this.productInfoForm.push(this.formBuilder.group({
                CPL1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                CPL2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }));
        }
    };
    CredittransactionComponent.prototype.cplKeyPress = function (event, index, name) {
        if (name == 'CPL1')
            this.productInfoForm.controls[index]['value'].CPL1 = '';
        else
            this.productInfoForm.controls[index]['value'].CPL2 = '';
        this.productInfoForm.controls[index]['controls'][name].status = 'INVALID';
        this.productInfoForm.controls[index]['controls'][name].value = '';
        event.target.value = '';
        event.preventDefault();
    };
    CredittransactionComponent.prototype.removeProductInfoForm = function (index) {
        this.productInfoForm.removeAt(index);
    };
    CredittransactionComponent.prototype.removeAllProductInfoForm = function () {
        for (var i = this.productInfoForm.length - 1; i >= 0; i--) {
            this.productInfoForm.removeAt(i);
        }
        this.addProductInfoForm();
    };
    CredittransactionComponent.prototype.CPL1OnChange = function (val) {
        debugger;
        this.filteredCPL2 = this.cpl2Json.filter(function (x) { return x.Base == val; });
    };
    CredittransactionComponent.prototype.radioChange = function ($event) {
        debugger;
        console.log($event.source.name, $event.value);
        if ($event.value === "true") {
            this.creditTransactionForm.controls['FolderName'].enable();
        }
        else {
            this.creditTransactionForm.controls['FolderName'].setValue('');
            this.creditTransactionForm.controls['FolderName'].disable();
        }
    };
    CredittransactionComponent.prototype.createCreditTransaction = function (form) {
        var _this = this;
        if (this.creditTransactionForm.invalid) {
            this.isSubmitted = true;
            this.creditTransactionForm.markAllAsTouched();
            // (<any>Object).values(this.f).forEach(control => {
            //   debugger
            //   control.markAsTouched();
            // });
            // this.checkProductFormValidations();
            return;
        }
        this.creditTransactionservice.createCreditTransaction(this.creditTransactionForm.value).subscribe(function (result) {
            // alert(JSON.stringify(this.creditTransactionForm.value));
            _this.snackBarService.message = "Credit transaction successfully created.";
            _this.snackBarService.showSnackbar();
            _this.pitchSpinnerButtonOptions.active = false;
            _this.isSubmitted = false;
            form.resetForm();
            _this.initform();
        });
    };
    CredittransactionComponent.prototype.clearAdditionalTeamInfo = function () {
        this.f.AdditionalTeamInfo.setValue('');
    };
    CredittransactionComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_7__["TeaminformatonComponent"], {
            width: '60%',
            data: this.teamInfoJson
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.selectedTeamInfo = result;
            if (result != null && result.length > 0) {
                _this.selectedCRTeamInfo = '';
                result.forEach(function (element) {
                    // this.selectedTeamInfo+=element.Name + ', ';
                    _this.selectedCRTeamInfo += element.Name + '\n' + '\n';
                });
                _this.f["AdditionalTeamInfo"].setValue(_this.selectedCRTeamInfo);
            }
        });
    };
    CredittransactionComponent.ctorParameters = function () { return [
        { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["SnackbarService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_credittransaction_service__WEBPACK_IMPORTED_MODULE_6__["CredittransactionService"] }
    ]; };
    CredittransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credittransaction',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./credittransaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/credittransaction/credittransaction.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./credittransaction.component.css */ "./src/app/components/credittransaction/credittransaction.component.css")).default]
        })
    ], CredittransactionComponent);
    return CredittransactionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    /* :host \r\n        ::ng-deep .mat-tab-group {\r\n            flex-direction: row;\r\n        }\r\n        ::ng-deep .mat-tab-header {\r\n          border-bottom: none;\r\n        }\r\n        ::ng-deep .mat-tab-header-pagination {\r\n            display: none !important;\r\n        }\r\n        ::ng-deep .mat-tab-labels {\r\n            flex-direction: column;\r\n        }\r\n        ::ng-deep .mat-ink-bar {\r\n            height: 100%;\r\n            left: 98% !important;\r\n        }\r\n        ::ng-deep .mat-tab-body-wrapper {\r\n            flex: 1 1 auto;\r\n        }\r\n        ::ng-deep .mat-tab-list{\r\n            border-right: maroon 2px solid !important;\r\n        }\r\n        ::ng-deep .mat-tab-label{\r\n            background-color: white !important;\r\n            font-weight: bold !important;\r\n        }\r\n        ::ng-deep .mat-tab-label-active{\r\n            \r\n            opacity: unset !important;\r\n            background-color: maroon !important;\r\n            color: gold !important;\r\n        }\r\n\r\n        .mat-list-item:hover {\r\n            background-color: #dfdfdf;\r\n        }\r\n         */\r\n        .menu_style{\r\n            min-height: 30em;\r\n            max-height: 50em !important;\r\n            overflow: auto;\r\n        }\r\n        \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFxQ007UUFDRjtZQUNJLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0IsY0FBYztRQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC8qIDpob3N0IFxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3R7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbWFyb29uIDJweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWx7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmV7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb24gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLm1lbnVfc3R5bGV7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent, MenuOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptions", function() { return MenuOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_roles_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/roles.enum */ "./src/app/common/roles.enum.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/snackbar.service */ "./src/app/services/snackbar.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(app, formBuilder, snackBarService, router) {
        this.app = app;
        this.formBuilder = formBuilder;
        this.snackBarService = snackBarService;
        this.router = router;
        this.isShowContent = false;
        this.menuptions = MenuOptions;
        this.menuSelectedOption = '';
        this.userRoles = _common_roles_enum__WEBPACK_IMPORTED_MODULE_5__["Roles"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.app.userDetails = JSON.parse(localStorage.getItem('loginUserDetails'));
        if (this.app.userDetails) {
        }
        else {
            this.router.navigateByUrl("/login");
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());

var MenuOptions;
(function (MenuOptions) {
    MenuOptions["PITCH_CREATION"] = "Pitch Creation";
    MenuOptions["STANDARD_FOLDER"] = "Standard Folder";
    MenuOptions["CREDIT_TRANSACTION_FOLDER"] = "Credit Trasaction Folder";
    MenuOptions["RESTRICTED_FOLDER"] = "Restricted Folder";
    MenuOptions["RLATIONSHIP_FOLDER"] = "Relationship Creation Folder";
    MenuOptions["ADD_CLIENT"] = "Add Client";
})(MenuOptions || (MenuOptions = {}));


/***/ }),

/***/ "./src/app/components/home/teaminformaton/teaminformaton.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/teaminformaton/teaminformaton.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".height_scrol{\r\n    min-height: 15em;\r\n    max-height: 25em;\r\n    overflow: auto;\r\n}\r\n.brder_radius_5px{\r\n    border-radius: 5px;\r\n}\r\n.mat-list-item{\r\nheight: 35px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RlYW1pbmZvcm1hdG9uL3RlYW1pbmZvcm1hdG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RlYW1pbmZvcm1hdG9uL3RlYW1pbmZvcm1hdG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0X3Njcm9se1xyXG4gICAgbWluLWhlaWdodDogMTVlbTtcclxuICAgIG1heC1oZWlnaHQ6IDI1ZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYnJkZXJfcmFkaXVzXzVweHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubWF0LWxpc3QtaXRlbXtcclxuaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/teaminformaton/teaminformaton.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/teaminformaton/teaminformaton.component.ts ***!
  \****************************************************************************/
/*! exports provided: TeaminformatonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaminformatonComponent", function() { return TeaminformatonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var TeaminformatonComponent = /** @class */ (function () {
    // source:any[] = [
    //   {
    //     Name: 'James, Smith',
    //     Value: 'James, Smith'
    //   },
    //   {
    //     Name: 'Maria, Rodriguez',
    //     Value: 'Maria, Rodriguez'
    //   },
    //   {
    //     Name: 'James, Johnson',
    //     Value: 'James, Johnson'
    //   },
    //   {
    //     Name: 'Robert, Smith',
    //     Value: 'Robert, Smith'
    //   },
    //   {
    //     Name: 'Maria, Martinez',
    //     Value: 'Maria, Martinez'
    //   },
    //   {
    //     Name: 'IndusDavid, Smithtrial',
    //     Value: 'David, Smith'
    //   },
    //   {
    //     Name: 'Juan, Carlos',
    //     Value: 'Juan, Carlos'
    //   },
    //   {
    //     Name: 'Mike, Jones',
    //     Value: 'Mike, Jones'
    //   }
    // ]
    function TeaminformatonComponent(dialogRef, source) {
        this.dialogRef = dialogRef;
        this.source = source;
        this.defaultSelected = 0;
        this.selection = [];
        this.destinationSelection = [];
        this.destination = [];
        this.filteredSource = [];
        this.searchText = '';
    }
    TeaminformatonComponent.prototype.ngOnInit = function () {
        //     debugger
        //     this.source.forEach(x=>{
        //       this.filteredSource.push(x);
        //     })
        // this.filteredSource=Object.assign({}, this.source);
    };
    // searchChange(){
    //   if(this.searchText !='')
    // this.filteredSource=this.source.filter(obj=> obj.Name.indexOf(this.searchText.toLowerCase()));
    // else
    // this.filteredSource=Object.assign({}, this.source);
    // }
    TeaminformatonComponent.prototype.sourceChange = function (event) {
        this.selection = event.value;
    };
    TeaminformatonComponent.prototype.movelefttoright = function () {
        var _this = this;
        if (this.selection != null && this.selection != "") {
            this.destination.push(this.selection);
            this.source = this.source.filter(function (obj) { return obj !== _this.selection; });
            this.selection = '';
        }
    };
    TeaminformatonComponent.prototype.moverighttoleft = function () {
        var _this = this;
        if (this.destinationSelection != null && this.destinationSelection != "") {
            this.source.push(this.destinationSelection);
            this.destination = this.destination.filter(function (obj) { return obj !== _this.destinationSelection; });
            this.destinationSelection = '';
        }
    };
    TeaminformatonComponent.prototype.sendSelectedData = function () {
        this.dialogRef.close(this.destination);
    };
    TeaminformatonComponent.prototype.closeDialog = function () {
        this.dialogRef.close(this.destination);
    };
    TeaminformatonComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    TeaminformatonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaminformaton',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teaminformaton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/teaminformaton/teaminformaton.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teaminformaton.component.css */ "./src/app/components/home/teaminformaton/teaminformaton.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], TeaminformatonComponent);
    return TeaminformatonComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n  .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n\r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  \r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGFBQWE7SUFDYix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC10aXRsZSxcclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(app, formBuilder, route, router, loginService) {
        this.app = app;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.UserDetails = [
            {
                "UserName": "testadmin",
                "Password": "testadmin",
                "Role": "Admin"
            },
            {
                "UserName": "testbanker",
                "Password": "testbanker",
                "Role": "Banker"
            }
        ];
        this.loading = false;
        this.submitted = false;
        this.spinnerButtonOptions = {
            active: false,
            text: 'Login',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
            buttonIcon: {
                fontIcon: 'fingerprint'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.app.logout();
    };
    Object.defineProperty(LoginComponent.prototype, "fval", {
        // for accessing to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            Object.values(this.fval).forEach(function (control) {
                control.markAsTouched();
            });
            return;
        }
        this.loading = true;
        this.spinnerButtonOptions.active = true;
        var data = this.UserDetails.find(function (x) { return x.UserName == _this.fval.email.value && x.Password == _this.fval.password.value; });
        if (data != null && data != undefined) {
            this.spinnerButtonOptions.active = false;
            localStorage.setItem("loginUserDetails", JSON.stringify(data));
            this.app.userDetails = data;
            this.router.navigate(['/home']);
        }
        else {
            this.errorMsg = "Invalid Username or Password.";
            this.spinnerButtonOptions.active = false;
        }
        // this.loginService.login(this.fval.email.value, this.fval.password.value)
        // .subscribe(
        // data => {
        // if(data!=null && data !=undefined && data.length > 0){
        //   this.spinnerButtonOptions.active=false;
        //   localStorage.setItem("loginUserDetails",JSON.stringify(data[0]));
        //   this.app.userDetails=data[0];
        //   this.router.navigate(['/home']);
        // }
        // else{
        //   this.errorMsg="Invalid Username or Password.";
        //   this.spinnerButtonOptions.active=false;
        // }
        // },
        // error => {
        // // this.toastr.error(error.error.message, 'Error'); 
        // this.loading = false;
        // });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pitchcreation/pitchcreation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pitchcreation/pitchcreation.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fieldset_style{\r\n    border: solid;\r\n    border-width: thin;\r\n    border-color: #efe6e6;\r\n    border-radius: 5px;\r\n}\r\n.legend_style{\r\n    width: auto;\r\n    color: #7e7f80;\r\n    font-size: 14px;\r\n}\r\n/* ::ng-deep .clear-all c-icon{\r\n    display: none !important;;\r\n}\r\n::ng-deep .dropdown-list ul li {\r\n    padding: 5px !important;\r\n}\r\n::ng-deep.pure-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n    background: maroon !important;\r\n}\r\n::ng-deep.selected-list .c-list .c-token {\r\n    background: maroon;\r\n}\r\n::ng-deep.pure-checkbox input[type=\"checkbox\"] + label:before {\r\n    color: maroon !important;\r\n    border: 1px solid maroon !important;\r\n}\r\n.multiselect-dropdown .dropdown-btn .selected-item {\r\n    border: 1px solid maroon !important;\r\n    background: maroon !important;\r\n    border-radius: 5px !important;\r\n}\r\n.multiselect-dropdown .dropdown-btn .selected-item a{\r\n    padding-top: 0px !important;\r\n    padding-right: 5px !important;\r\n    padding-left: 5px !important;\r\n    text-align: center  !important;\r\n    color: maroon !important;\r\n    background-color: white !important;\r\n    border-radius: 50% !important;\r\n}\r\n.multiselect-item-checkbox input[type=checkbox]:checked + div:before{\r\n    background: maroon !important;\r\n}\r\n.multiselect-item-checkbox input[type=checkbox] + div:before {\r\n    border: 2px solid maroon !important;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waXRjaGNyZWF0aW9uL3BpdGNoY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waXRjaGNyZWF0aW9uL3BpdGNoY3JlYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZHNldF9zdHlsZXtcclxuICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItY29sb3I6ICNlZmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxlZ2VuZF9zdHlsZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgY29sb3I6ICM3ZTdmODA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLyogOjpuZy1kZWVwIC5jbGVhci1hbGwgYy1pY29ue1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OztcclxufVxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLWxpc3QgdWwgbGkge1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogbWFyb29uICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLnNlbGVjdGVkLWxpc3QgLmMtbGlzdCAuYy10b2tlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBtYXJvb247XHJcbn1cclxuOjpuZy1kZWVwLnB1cmUtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbG9yOiBtYXJvb24gIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcm9vbiAhaW1wb3J0YW50O1xyXG59XHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcm9vbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbWFyb29uICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSBhe1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IG1hcm9vbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBkaXY6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZDogbWFyb29uICFpbXBvcnRhbnQ7XHJcbn1cclxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIG1hcm9vbiAhaW1wb3J0YW50O1xyXG59ICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/pitchcreation/pitchcreation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pitchcreation/pitchcreation.component.ts ***!
  \*********************************************************************/
/*! exports provided: PitchcreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchcreationComponent", function() { return PitchcreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/snackbar.service */ "./src/app/services/snackbar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/teaminformaton/teaminformaton.component */ "./src/app/components/home/teaminformaton/teaminformaton.component.ts");
/* harmony import */ var _services_pitchcreation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/pitchcreation.service */ "./src/app/services/pitchcreation.service.ts");









var PitchcreationComponent = /** @class */ (function () {
    function PitchcreationComponent(dialog, formBuilder, pitchService, snackBarService) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.pitchService = pitchService;
        this.snackBarService = snackBarService;
        this.selectedTeamInfo = '';
        this.cpl1FilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.teamInfoSearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.industrySearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.clientNameSearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredTeamInfo = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.filteredCPL2 = [];
        this.pitchMinDate = new Date();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isSubmitted = false;
        this.industrySearchText = '';
        this.clientNameSearchText = '';
        this.teamInfoDropdownSettings = {};
        this.industryJson = [
            {
                Name: 'Customer & Retail',
                Value: 'Customer & Retail'
            },
            {
                Name: 'Energy & Power',
                Value: 'Energy & Power'
            },
            {
                Name: 'Financial Institutions',
                Value: 'Financial Institutions'
            },
            {
                Name: 'Gaming',
                Value: 'Gaming'
            },
            {
                Name: 'Healthcare',
                Value: 'Healthcare'
            },
            {
                Name: 'Industrial',
                Value: 'Industrial'
            },
            {
                Name: 'RestFin',
                Value: 'RestFin'
            },
            {
                Name: 'Technology, Media & Telecom',
                Value: 'Technology, Media & Telecom'
            }
        ];
        this.clientNamesJson = [
            {
                Name: 'Test2424',
                Value: 'Test2424'
            },
            {
                Name: 'The kroger Co.',
                Value: 'The kroger Co.'
            }
        ];
        this.cpl1Json = [
            {
                Name: 'Deposits Other',
                Value: 'Deposits Other'
            },
            {
                Name: 'Fed Funds Deposits',
                Value: 'Fed Funds Deposits'
            },
            {
                Name: 'Interest Bearing DDAs',
                Value: 'Interest Bearing DDAs'
            },
            {
                Name: 'Non-Interest Bearing DDAs & Float',
                Value: 'Non-Interest Bearing DDAs & Float'
            },
            {
                Name: 'Structured Deposits',
                Value: 'Structured Deposits'
            },
            {
                Name: 'Sweep Balances',
                Value: 'Sweep Balances'
            },
            {
                Name: 'Time Deposits/Placements',
                Value: 'Time Deposits/Placements'
            },
        ];
        this.cpl2Json = [
            {
                Name: 'Deposits Other  cpl2',
                Value: 'Deposits Other  cpl2',
                Base: 'Deposits Other'
            },
            {
                Name: 'Fed Funds Deposits  cpl2',
                Value: 'Fed Funds Deposits  cpl2',
                Base: 'Deposits Other'
            },
            {
                Name: 'Interest Bearing DDAs  cpl2',
                Value: 'Interest Bearing DDAs  cpl2',
                Base: 'Interest Bearing DDAs'
            },
            {
                Name: 'Non-Interest Bearing DDAs & Float  cpl2',
                Value: 'Non-Interest Bearing DDAs & Float  cpl2',
                Base: 'Interest Bearing DDAs'
            },
            {
                Name: 'Structured Deposits cpl2',
                Value: 'Structured Deposits cpl2',
                Base: 'Interest Bearing DDAs'
            },
            {
                Name: 'Sweep Balances cpl2',
                Value: 'Sweep Balances cpl2',
                Base: 'Sweep Balances'
            },
            {
                Name: 'Time Deposits/Placements cpl2',
                Value: 'Time Deposits/Placements cpl2',
                Base: 'Sweep Balances'
            },
        ];
        this.teamInfoJson = [
            {
                Name: 'James, Smith',
                Value: 'James, Smith'
            },
            {
                Name: 'Maria, Rodriguez',
                Value: 'Maria, Rodriguez'
            },
            {
                Name: 'James, Johnson',
                Value: 'James, Johnson'
            },
            {
                Name: 'Robert, Smith',
                Value: 'Robert, Smith'
            },
            {
                Name: 'Maria, Martinez',
                Value: 'Maria, Martinez'
            },
            {
                Name: 'IndusDavid, Smithtrial',
                Value: 'David, Smith'
            },
            {
                Name: 'Juan, Carlos',
                Value: 'Juan, Carlos'
            },
            {
                Name: 'Mike, Jones',
                Value: 'Mike, Jones'
            }
        ];
        this.pitchSpinnerButtonOptions = {
            active: false,
            text: 'Create Pitch',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
        };
        this.initResourceForm();
        // this.teamInfoSearchCtrl.setValue('');
    }
    PitchcreationComponent.prototype.ngAfterViewInit = function () {
        this.setInitialValue();
    };
    PitchcreationComponent.prototype.setInitialValue = function () {
        var _this = this;
        this.filteredTeamInfo
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.multiSelect.compareWith = function (a, b) { return a && b && a.id === b.id; };
        });
    };
    PitchcreationComponent.prototype.initResourceForm = function () {
        this.pitchCreationForm = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            PitchDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Industry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ClientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ProductInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            TeamInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            AdditionalTeamInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            CorpFinnInvolved: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.addProductInfoForm();
    };
    PitchcreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamInfoDropdownSettings = {
            text: "Select Team Info",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableCheckAll: false,
            labelKey: 'Name',
            primaryKey: 'Value',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        // this.teamInfoDropdownSettings = {
        //   singleSelection: false,
        //   idField: 'Value',
        //   textField: 'Name',
        //   enableCheckAll: false,
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   allowSearchFilter: true,
        //   limitSelection: -1,
        //   clearSearchFilter: true,
        //   maxHeight: 197,
        //   itemsShowLimit: 3,
        //   searchPlaceholderText: 'Search',
        //   noDataAvailablePlaceholderText: 'No search result found.',
        //   closeDropDownOnSelection: false,
        //   showSelectedItemsAtTop: false,
        //   defaultOpen: false
        // };
        // this.f.TeamInfo.setValue([this.teamInfoJson[1], this.teamInfoJson[2]]);
        this.filteredTeamInfo.next(this.teamInfoJson.slice());
        this.filteredCPL2 = this.cpl2Json;
        // this.filteredTeamInfo=this.teamInfoJson;
        console.log(this.filteredTeamInfo);
        this.industrySearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.industrySearchText = _this.industrySearchCtrl.value;
        });
        this.clientNameSearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.clientNameSearchText = _this.clientNameSearchCtrl.value;
        });
        this.teamInfoSearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.filterTeamInfo();
        });
    };
    PitchcreationComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    PitchcreationComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    PitchcreationComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    PitchcreationComponent.prototype.CPL1OnChange = function (val) {
        this.filteredCPL2 = this.cpl2Json.filter(function (x) { return x.Base == val; });
    };
    Object.defineProperty(PitchcreationComponent.prototype, "f", {
        get: function () {
            return this.pitchCreationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PitchcreationComponent.prototype, "productInfoForm", {
        get: function () {
            return this.f.ProductInfo;
        },
        enumerable: true,
        configurable: true
    });
    PitchcreationComponent.prototype.cplKeyPress = function (event, index, name) {
        if (name == 'CPL1')
            this.productInfoForm.controls[index]['value'].CPL1 = '';
        else
            this.productInfoForm.controls[index]['value'].CPL2 = '';
        this.productInfoForm.controls[index]['controls'][name].status = 'INVALID';
        this.productInfoForm.controls[index]['controls'][name].value = '';
        event.target.value = '';
        event.preventDefault();
    };
    PitchcreationComponent.prototype.addProductInfoForm = function () {
        if (!this.f.ProductInfo.invalid) {
            this.productInfoForm.push(this.formBuilder.group({
                CPL1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                CPL2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }));
            for (var index = 0; index < this.productInfoForm.controls.length; index++) {
                var element = this.productInfoForm.controls[index];
                console.log('checking start');
                console.log(element['controls'].CPL1.status);
                // console.log(element.controls.status)
            }
        }
    };
    PitchcreationComponent.prototype.removeProductInfoForm = function (index) {
        this.productInfoForm.removeAt(index);
    };
    PitchcreationComponent.prototype.removeAllProductInfoForm = function () {
        for (var i = this.productInfoForm.length - 1; i >= 0; i--) {
            this.productInfoForm.removeAt(i);
        }
        this.addProductInfoForm();
    };
    PitchcreationComponent.prototype.resetResourceFrom = function () {
        this.pitchCreationForm.reset();
        this.pitchCreationForm.clearValidators();
        this.pitchCreationForm.updateValueAndValidity();
        this.initResourceForm();
    };
    PitchcreationComponent.prototype.checkProductFormValidations = function () {
        if (this.productInfoForm.invalid) {
            Object.values(this.productInfoForm.controls).forEach(function (controls) {
                Object.values(controls.controls).forEach(function (control) {
                    control.markAsTouched();
                });
            });
        }
    };
    PitchcreationComponent.prototype.createResource = function (form) {
        var _this = this;
        this.isSubmitted = true;
        if (this.pitchCreationForm.invalid) {
            this.pitchCreationForm.markAllAsTouched();
            // (<any>Object).values(this.f).forEach(control => {
            //   debugger
            //   control.markAsTouched();
            // });
            // this.checkProductFormValidations();
            return;
        }
        this.pitchSpinnerButtonOptions.active = true;
        alert(JSON.stringify(this.pitchCreationForm.value));
        this.pitchService.createpitch(this.pitchCreationForm.value).subscribe(function (result) {
            _this.snackBarService.message = "Pitch creation successfully created.";
            _this.snackBarService.showSnackbar();
            _this.pitchSpinnerButtonOptions.active = false;
            _this.isSubmitted = false;
            form.resetForm();
            _this.initResourceForm();
        });
    };
    PitchcreationComponent.prototype.filterTeamInfo = function () {
        if (!this.teamInfoJson) {
            return;
        }
        // get the search keyword
        var search = this.teamInfoSearchCtrl.value;
        if (!search) {
            this.filteredTeamInfo.next(this.teamInfoJson.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredTeamInfo.next(this.teamInfoJson.filter(function (bank) { return bank.Name.toLowerCase().indexOf(search) > -1; }));
    };
    PitchcreationComponent.prototype.clearAdditionalTeamInfo = function () {
        this.f.AdditionalTeamInfo.setValue('');
    };
    PitchcreationComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_home_teaminformaton_teaminformaton_component__WEBPACK_IMPORTED_MODULE_7__["TeaminformatonComponent"], {
            width: '60%',
            data: this.teamInfoJson
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.selectedTeamInfo = result;
            if (result != null && result.length > 0) {
                _this.selectedTeamInfo = '';
                result.forEach(function (element) {
                    // this.selectedTeamInfo+=element.Name + ', ';
                    _this.selectedTeamInfo += element.Name + '\n' + '\n';
                });
                _this.f["AdditionalTeamInfo"].setValue(_this.selectedTeamInfo);
            }
        });
    };
    PitchcreationComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_pitchcreation_service__WEBPACK_IMPORTED_MODULE_8__["PitchcreationService"] },
        { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiSelect', { static: true })
    ], PitchcreationComponent.prototype, "multiSelect", void 0);
    PitchcreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pitchcreation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pitchcreation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pitchcreation/pitchcreation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pitchcreation.component.css */ "./src/app/components/pitchcreation/pitchcreation.component.css")).default]
        })
    ], PitchcreationComponent);
    return PitchcreationComponent;
}());



/***/ }),

/***/ "./src/app/components/relationshipcreation/relationshipcreation.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/relationshipcreation/relationshipcreation.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gh{\r\n    font: 100;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWxhdGlvbnNoaXBjcmVhdGlvbi9yZWxhdGlvbnNoaXBjcmVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWxhdGlvbnNoaXBjcmVhdGlvbi9yZWxhdGlvbnNoaXBjcmVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdoe1xyXG4gICAgZm9udDogMTAwO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/relationshipcreation/relationshipcreation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/relationshipcreation/relationshipcreation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RelationshipcreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipcreationComponent", function() { return RelationshipcreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_pitchcreation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pitchcreation.service */ "./src/app/services/pitchcreation.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/snackbar.service */ "./src/app/services/snackbar.service.ts");







var RelationshipcreationComponent = /** @class */ (function () {
    function RelationshipcreationComponent(formBuilder, relationshipService, snackbarService) {
        this.formBuilder = formBuilder;
        this.relationshipService = relationshipService;
        this.snackbarService = snackbarService;
        this.coverageteamSearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.idustrySearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.subIndustrySearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isFromOther = false;
        this.coverageTeamSearchText = '';
        this.idustrySearchText = '';
        this.subIndustrySearchText = '';
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isSubmitted = false;
        // =[
        //   {
        //     Name:"Energy",Value:"Energy"
        //   },
        //   {
        //     Name:"Consumer Products",Value:"Consumer Products"
        //   }
        // ]
        this.relationSpinnerButtonOptions = {
            active: false,
            text: 'Submit',
            spinnerSize: 18,
            raised: true,
            stroked: false,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false,
            disabled: false,
            mode: 'indeterminate',
        };
    }
    RelationshipcreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("masterName :" + this.masterName);
        this.initializeForm();
        this.coverageteamSearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.coverageTeamSearchText = _this.coverageteamSearchCtrl.value;
        });
        this.idustrySearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.idustrySearchText = _this.idustrySearchCtrl.value;
        });
        this.subIndustrySearchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this.subIndustrySearchText = _this.subIndustrySearchCtrl.value;
        });
        this.getCoverageTeamInfo();
        this.getIdustryInfo();
        this.getSubIndustryInfo();
        if (this.masterName != null && this.masterName != undefined && this.masterName != 'undefined' && this.masterName != '') {
            this.isFromOther = true;
            this.f['ClientName'].setValue(this.masterName.clientName);
            this.f['Industry'].setValue(this.masterName.industry);
            this.f['SubIndustry'].setValue(this.masterName.subIndustry);
        }
    };
    Object.defineProperty(RelationshipcreationComponent.prototype, "f", {
        get: function () {
            return this.relationshipForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RelationshipcreationComponent.prototype.initializeForm = function () {
        this.relationshipForm = this.formBuilder.group({
            ClientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            // CoverageTeam: new FormControl('', Validators.required),
            // RelationshipType: new FormControl('', Validators.required),
            Industry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            SubIndustry: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    RelationshipcreationComponent.prototype.getCoverageTeamInfo = function () {
        var _this = this;
        this.relationshipService.getCoverageTeamInfo().subscribe(function (result) {
            _this.coverageTeamInfoJSON = result;
        });
    };
    RelationshipcreationComponent.prototype.getIdustryInfo = function () {
        var _this = this;
        this.relationshipService.getIndustryDetails().subscribe(function (result) {
            _this.idustryJSON = result;
        });
    };
    RelationshipcreationComponent.prototype.getSubIndustryInfo = function () {
        var _this = this;
        this.relationshipService.getSubIndustryDetails().subscribe(function (result) {
            _this.subIndustryInfoJSON = result;
        });
    };
    RelationshipcreationComponent.prototype.createRelationship = function (form) {
        var _this = this;
        if (this.relationshipForm.invalid) {
            this.isSubmitted = true;
            this.relationshipForm.markAllAsTouched();
            return;
        }
        var obj = {
            clientId: "0",
            clientName: this.f['ClientName'].value,
            creationUserName: "u364882",
            dctmClientId: null,
            ibParent: "Targa Energy Power",
            ibParentId: "5572",
            icisClientId: "233536503",
            industry: this.f['Industry'].value,
            industryKey: "E&P",
            subIndustry: this.f['SubIndustry'].value,
            subIndustryKey: "ENGY",
            region: "",
            sector: "Midstream",
            parentRelationship: null,
            relationshipManager: null,
            portfolioManager: null,
            relationshipAssociate: null,
            subSector: "Liquids Gathering, Logistics, Terminaling & Storage",
            loadSupervisor: null,
            callingApplication: "ICATCH",
            targetApplication: "IBCM",
            isDeleted: "N",
            CreatedDate: "11/4/2019 10:50:12 AM",
            LastModifiedDate: null,
            LastModifiedById: null,
            subSectorKey: "",
            sectorKey: "",
            isSponsor: "N"
        };
        this.relationSpinnerButtonOptions.active = true;
        this.relationshipService.createRelationship(obj).subscribe(function (result) {
            _this.isSubmitted = false;
            _this.relationSpinnerButtonOptions.active = false;
            _this.snackbarService.message = result.IBCM.responseMessage;
            _this.snackbarService.showSnackbar();
            form.resetForm();
        });
    };
    RelationshipcreationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_pitchcreation_service__WEBPACK_IMPORTED_MODULE_5__["PitchcreationService"] },
        { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('childToMaster')
    ], RelationshipcreationComponent.prototype, "masterName", void 0);
    RelationshipcreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relationshipcreation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relationshipcreation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/relationshipcreation/relationshipcreation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./relationshipcreation.component.css */ "./src/app/components/relationshipcreation/relationshipcreation.component.css")).default]
        })
    ], RelationshipcreationComponent);
    return RelationshipcreationComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: baseApiUrl, baseJsonServerUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseApiUrl", function() { return baseApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseJsonServerUrl", function() { return baseJsonServerUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Default dev URLs
var apiURL = 'https://ibcm-d2-qa.wellsfargo.net/cibservices';
var jsonServerUrl = " http://localhost:3200";
if (window.location.href.indexOf('appdev.lapalopa.com') >= 0) {
    // Dev Settings
    apiURL = 'https://appdev.lapalopa.com/dashboard';
}
else if (window.location.href.indexOf('appstg.lapalopa.com') >= 0) {
    // Staging Settings
    apiURL = 'https://ibcm-d2-qa.wellsfargo.net/cibservices';
    jsonServerUrl = 'https://mobileapistg.lapalopa.com';
}
else if (window.location.href.indexOf('app.lapalopa.com') >= 0) {
    // Production Settings
    apiURL = 'https://api.lapalopa.com';
    jsonServerUrl = 'https://login.lapalopa.com';
}
else if (window.location.href.indexOf('http://localhost') >= 0) {
    apiURL = 'https://ibcm-d2-qa.wellsfargo.net/cibservices';
    jsonServerUrl = 'http://localhost:3200/';
}
// ******************************************************************
// Service URL
var baseApiUrl = apiURL;
var baseJsonServerUrl = jsonServerUrl;
// ******************************************************************


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/esm5/mat-progress-buttons.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");





var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_4__["NgxMatSelectSearchModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_3__["MatProgressButtonsModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                modules
            ],
            exports: [
                modules
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/listfilter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/listfilter.pipe.ts ***!
  \******************************************/
/*! exports provided: ListfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListfilterPipe", function() { return ListfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListfilterPipe = /** @class */ (function () {
    function ListfilterPipe() {
    }
    ListfilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (obj) {
            return obj.Name.toLowerCase().includes(searchText);
        });
    };
    ListfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'listfilter'
        })
    ], ListfilterPipe);
    return ListfilterPipe;
}());



/***/ }),

/***/ "./src/app/services/addclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/addclient.service.ts ***!
  \***********************************************/
/*! exports provided: AddclientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclientService", function() { return AddclientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AddclientService = /** @class */ (function () {
    function AddclientService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3200/";
    }
    AddclientService.prototype.searchSalesforceClients = function (data) {
        return this._http.get(this.baseUrl + 'getSalesforceClients');
        //  return this._http.get('api/client?searchtext=' + data)
    };
    AddclientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AddclientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AddclientService);
    return AddclientService;
}());



/***/ }),

/***/ "./src/app/services/credittransaction.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/credittransaction.service.ts ***!
  \*******************************************************/
/*! exports provided: CredittransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredittransactionService", function() { return CredittransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CredittransactionService = /** @class */ (function () {
    function CredittransactionService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3200/";
    }
    CredittransactionService.prototype.getIndustryDetails = function () {
        return this._http.get(this.baseUrl + 'getIndustry');
    };
    CredittransactionService.prototype.getClientName = function () {
        return this._http.get(this.baseUrl + 'getCreditClientNames');
    };
    CredittransactionService.prototype.getReportTypes = function () {
        return this._http.get(this.baseUrl + 'getCreditTransactionReportTypes');
    };
    CredittransactionService.prototype.getCreditCPL1 = function () {
        return this._http.get(this.baseUrl + 'getCreditCPL1');
    };
    CredittransactionService.prototype.getCreditCPL2 = function () {
        return this._http.get(this.baseUrl + 'getCreditCPL2');
    };
    CredittransactionService.prototype.getCreditTransactionTeams = function () {
        return this._http.get(this.baseUrl + 'getCreditTransactionTeams');
    };
    CredittransactionService.prototype.createCreditTransaction = function (data) {
        return this._http.post(this.baseUrl + 'createCreditTransaction', data);
    };
    CredittransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CredittransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CredittransactionService);
    return CredittransactionService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3200/";
    }
    LoginService.prototype.login = function (username, password) {
        return this._http.get(_config__WEBPACK_IMPORTED_MODULE_3__["baseJsonServerUrl"] + 'getUserDetails?UserName=' + username + '&Password=' + password);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/pitchcreation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/pitchcreation.service.ts ***!
  \***************************************************/
/*! exports provided: PitchcreationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchcreationService", function() { return PitchcreationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PitchcreationService = /** @class */ (function () {
    function PitchcreationService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3200/";
    }
    PitchcreationService.prototype.getIndustryDetails = function () {
        return this._http.get(this.baseUrl + 'getIndustry');
    };
    PitchcreationService.prototype.getClientNames = function () {
        return this._http.get(this.baseUrl + 'getClientNames');
    };
    PitchcreationService.prototype.getCpl1Details = function () {
        return this._http.get(this.baseUrl + 'getCPL1Details');
    };
    PitchcreationService.prototype.getCPL2FilteredDetails = function (val) {
        return this._http.get(this.baseUrl + 'getCPL2Details?Base=' + val);
    };
    PitchcreationService.prototype.getTeamInfoDetails = function () {
        return this._http.get(this.baseUrl + 'getTeamInfoDetails');
    };
    PitchcreationService.prototype.getAdditionalTeamInfo = function () {
        return this._http.get(this.baseUrl + 'getAdditionalTeamInfo');
    };
    PitchcreationService.prototype.createpitch = function (data) {
        return this._http.post(this.baseUrl + 'pitchcreation', data);
    };
    PitchcreationService.prototype.getCoverageTeamInfo = function () {
        return this._http.get(this.baseUrl + 'getTeamInfoDetails');
    };
    PitchcreationService.prototype.getSubIndustryDetails = function () {
        return this._http.get(this.baseUrl + 'getSubIndustry');
    };
    PitchcreationService.prototype.createRelationship = function (data) {
        return this._http.post(this.baseUrl + 'createRelationship', data);
        // return this._http.post('api/client',data)
    };
    PitchcreationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PitchcreationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PitchcreationService);
    return PitchcreationService;
}());



/***/ }),

/***/ "./src/app/services/snackbar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackBar) {
        this.snackBar = snackBar;
        this.message = '';
        this.actionButtonLabel = '';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
    }
    SnackbarService.prototype.showSnackbar = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
        this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
    };
    SnackbarService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    SnackbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SnackbarService);
    return SnackbarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Freelance\Sindhu\From Git\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
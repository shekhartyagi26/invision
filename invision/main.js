(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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



var routes = [];
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--The content below is only a placeholder and can be replaced.-->\n    <app-login></app-login>\n<!-- <app-login1></app-login1> -->\n    <app-footer></app-footer>\n    <router-outlet></router-outlet>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'invisionAngular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"]
            ],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mainFooter\">\n    <div class=\"container\">\n      <div class=\"footerContent\">\n        <div class=\"address\">\n          <ul>\n            <li class=\"desktop\">לורם איפסום</li>\n            <li>לורם איפסום <i class=\"tiny material-icons\">local_phone</i></li>\n            <li>לורם איפסום <i class=\"tiny material-icons\">lock_outline</i></li>\n          </ul>\n          <p class=\"mobile\"><img src=\"../../invision/images/relax-icon.png\" alt=\"\"> לורם איפסום</p>\n        </div>\n        <p>לורם Ipsum הוא פשוט טקסט דמה של תעשיית דפוס ו סדור. לורם Ipsum כבר טקסט של תעשיית הדמה סטנדרטי מאז 1500s, כאשר מדפסת לא ידוע לקח מטחנת של סוג ו מקושקשות זה כדי להפוך את הספר סוג הדגימה. הוא שרד לא רק חמש מאות שנים, אלא גם את הקפיצה לתוך דפוס אלקטרוניים, שנותרו למעשה ללא שינוי. זה היה פופולרי ב 1960s עם שחרורו של גיליונות Letraset המכיל מעברים Lorem Ipsum, ולאחרונה עם תוכנת פרסום שולחני כמו Aldus PageMaker כולל גרסאות של לורם Ipsum.</p>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"headerTop\"> <img src=\"../../invision/assets/images/top-logo.png\" class=\"img-fluid\" alt=\"\"> </div>\n  <div class=\"headerBottom\"> <img src=\"../../invision/assets/images/logo.png\" class=\"img-fluid\" alt=\"\"> </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"contentSection\">\n    <div class=\"grid-row align-items-center no-gutters\">\n      <div class=\"grid-col-sm-6\">\n        <div class=\"leftSection\"> <img src=\"../../invision/assets/images/-e-coffee.png\" class=\"img-fluid\" alt=\"\"> </div>\n      </div>\n      <div class=\"grid-col-sm-6\">\n        <div class=\"rightSection\"> <img src=\"../../invision/assets/images/-e-pen.png\" alt=\"\">\n          <h1>כניסה למערכת <br>\n            חתימה על מסמכים</h1>\n          <form *ngIf=\"step ==1 || step ==2\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label> <span>הזן מספר זיהוי / דרכון</span></label>\n              <mat-radio-group aria-label=\"Select an option\" formControlName=\"role\" name=\"role\">\n                <mat-radio-button value=\"role1\"></mat-radio-button>\n\n                <label> <span>&nbsp;</span><strong>ת”ז</strong> </label>\n\n                <mat-radio-button value=\"role2\"></mat-radio-button>\n                <label><span>&nbsp;</span><strong>דרכון</strong> </label>\n\n              </mat-radio-group>\n              <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.role.errors.required\">role is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n\n              <mat-form-field class=\"example-full-width\">\n\n                <input matInput type=\"text\" formControlName=\"number\" placeholder=\"מספר בן 9 ספרות כולל ספרת ביקורת\"\n                  maxlength='9' class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.number.errors }\" />\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.number.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.number.errors.required\">number is required</div>\n                <div *ngIf=\"f.number.errors.minlength\">number must be at least 9 characters</div>\n              </div>\n            </div>\n\n            <div *ngIf=\"step ==2\" class=\"form-group\">\n\n              <mat-form-field class=\"example-full-width\">\n\n                <input matInput type=\"text\" formControlName=\"proposalNumber\" placeholder=\"הזן מספר הצעה\" maxlength='9'\n                  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.proposalNumber.errors }\" />\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.proposalNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.proposalNumber.errors.required\">proposalNumber is required</div>\n              </div>\n            </div>\n\n\n\n            <p class=\"terms\">לאחר אישורך ישלח אלייך קוד אימות לנייד הרשום<br>\n              במערכת הבנק. בכל בעיה יש לפנות למוקד השירות <br>\n              בטלפון 5727* </p>\n            <p class=\"text-center\">\n              <button type=\"submit\" class=\"waves-effect waves-light btn-large\"><i\n                  class=\"material-icons\">המשך</i></button>\n            </p>\n          </form>\n\n          <div *ngIf=\"step ==3\">\n            <p class=\"txtLarge\">להשלמת התהליך לחץ על כפתור ‘שלח קוד’, וקבל קוד אימות לטלפון הנייד שברשותך, שמספרו\n              050-xxx6523</p>\n            <form [formGroup]=\"stepForm2\" (ngSubmit)=\"submitAfterStep2()\">\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" formControlName=\"checkbox\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f2.checkbox.errors }\" class=\"filled-in\" checked=\"checked\" />\n\n                  <span>&nbsp;</span><strong>מעוניין בקבלת קוד אימות קולי <br>\n                    בשיחה נכנסת</strong> </label>\n              </div>\n              <div *ngIf=\"submitted && f2.checkbox.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f2.checkbox.errors.required\">please select the checkbox</div>\n              </div>\n              <p class=\"text-center\">\n                <button type=\"submit\" class=\"waves-effect waves-light btn-large\"><i class=\"material-icons\">שלח\n                    קוד</i></button>\n              </p>\n            </form>\n          </div>\n          <div *ngIf=\"step ==4\">\n            <p class=\"txtLarge\">הזן את הקוד שנשלח:</p>\n            <form [formGroup]=\"stepForm3\" (ngSubmit)=\"submitAfterStep3()\">\n              <div class=\"form-group\">\n\n                <mat-form-field class=\"example-full-width\">\n\n                  <input matInput type=\"text\" formControlName=\"verificationCode\"\n                    placeholder=\"מספר בן 9 ספרות כולל ספרת ביקורת\" maxlength='9' class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f3.verificationCode.errors }\" />\n                </mat-form-field>\n                <div *ngIf=\"submitted && f3.verificationCode.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f3.verificationCode.errors.required\">verification code is required</div>\n                </div>\n              </div>\n              <p>&nbsp;</p>\n              <p class=\"text-center\">\n                <button type=\"submit\" class=\"waves-effect waves-light btn-large\"><i\n                    class=\"material-icons\">התחבר</i></button>\n              </p>\n            </form>\n          </div>\n          <div *ngIf=\"step ==5\">\n              <p class=\"txtLarge\">להשלמת התהליך לחץ על כפתור ‘שלח קוד’, וקבל קוד אימות לטלפון הנייד שברשותך, שמספרו\n                050-xxx6523</p>\n              <form [formGroup]=\"stepForm4\" (ngSubmit)=\"submitAfterStep4()\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" formControlName=\"checkbox1\" class=\"form-control\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f4.checkbox1.errors }\" class=\"filled-in\" checked=\"checked\" />\n  \n                    <span>&nbsp;</span><strong>מעוניין בקבלת קוד אימות קולי <br>\n                      בשיחה נכנסת</strong> </label>\n                </div>\n                <div *ngIf=\"submitted && f4.checkbox1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f4.checkbox1.errors.required\">please select the checkbox</div>\n                </div>\n\n\n                <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\" formControlName=\"checkbox2\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f4.checkbox2.errors }\" class=\"filled-in\" checked=\"checked\" />\n    \n                      <span>&nbsp;</span><strong>מעוניין בקבלת קוד אימות קולי <br>\n                        בשיחה נכנסת</strong> </label>\n                  </div>\n                  <div *ngIf=\"submitted && f4.checkbox2.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f4.checkbox2.errors.required\">please select the checkbox</div>\n                    </div>\n\n\n                  <div class=\"checkbox\">\n                      <label>\n                        <input type=\"checkbox\" formControlName=\"checkbox3\" class=\"form-control\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f4.checkbox3.errors }\" class=\"filled-in\" checked=\"checked\" />\n      \n                        <span>&nbsp;</span><strong>מעוניין בקבלת קוד אימות קולי <br>\n                          בשיחה נכנסת</strong> </label>\n                    </div>\n                    <div *ngIf=\"submitted && f4.checkbox3.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f4.checkbox3.errors.required\">please select the checkbox</div>\n                      </div>\n                <!-- <div *ngIf=\"submitted && f4.checkbox.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f4.checkbox.errors.required\">please select the checkbox</div>\n                </div> -->\n                <p class=\"text-center\">\n                  <button type=\"submit\" class=\"waves-effect waves-light btn-large\"><i class=\"material-icons\">שלח\n                      קוד</i></button>\n                </p>\n              </form>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.step = 1;
        this.submitted = false;
        this.submittedStep2 = false;
        this.submittedStep3 = false;
        this.submittedStep4 = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)])],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.step++;
        if (this.step == 2)
            this.loginForm.addControl('proposalNumber', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.stepForm2 = this.formBuilder.group({
            checkbox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // console.log(this.step)
        console.log(this.loginForm.value);
    };
    Object.defineProperty(LoginComponent.prototype, "f2", {
        get: function () { return this.stepForm2.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.submitAfterStep2 = function () {
        this.submittedStep2 = true;
        if (this.stepForm2.invalid) {
            return;
        }
        this.step++;
        this.stepForm3 = this.formBuilder.group({
            verificationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // console.log(this.step)
        console.log(this.stepForm2.value);
    };
    Object.defineProperty(LoginComponent.prototype, "f3", {
        get: function () { return this.stepForm3.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.submitAfterStep3 = function () {
        this.submittedStep3 = true;
        if (this.stepForm3.invalid) {
            return;
        }
        this.step++;
        this.stepForm4 = this.formBuilder.group({
            checkbox1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkbox2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkbox3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // console.log(this.step)
        console.log(this.stepForm3.value);
    };
    Object.defineProperty(LoginComponent.prototype, "f4", {
        get: function () { return this.stepForm4.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.submitAfterStep4 = function () {
        this.submittedStep4 = true;
        if (this.stepForm4.invalid) {
            return;
        }
        this.step++;
        console.log("all form fields => ", Object.assign(this.loginForm.value, this.stepForm2.value, this.stepForm3.value, this.stepForm4.value));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/invision/invisionAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
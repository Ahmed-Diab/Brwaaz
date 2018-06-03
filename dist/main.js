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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_erorr_erorr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/erorr/erorr.component */ "./src/app/components/erorr/erorr.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-image/add-image.component */ "./src/app/components/add-image/add-image.component.ts");
/* harmony import */ var _guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth-guard.guard */ "./src/app/guard/auth-guard.guard.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-dashboard/admin-dashboard.component */ "./src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _components_remove_image_remove_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/remove-image/remove-image.component */ "./src/app/components/remove-image/remove-image.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'view', component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'users/admin', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'users/adminDashboard', component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]], children: [
            { path: '', redirectTo: 'add_image', pathMatch: 'full', canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]] },
            { path: 'add_image', component: _components_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__["AddImageComponent"], canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]] },
            { path: 'remove', component: _components_remove_image_remove_image_component__WEBPACK_IMPORTED_MODULE_10__["RemoveImageComponent"], canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]] },
            { path: 'messages', component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"], canActivate: [_guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]] }
        ] },
    { path: '**', component: _components_erorr_erorr_component__WEBPACK_IMPORTED_MODULE_3__["ErorrComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
    _components_erorr_erorr_component__WEBPACK_IMPORTED_MODULE_3__["ErorrComponent"],
    _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    _components_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__["AddImageComponent"],
    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
    _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
    _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"],
    _components_remove_image_remove_image_component__WEBPACK_IMPORTED_MODULE_10__["RemoveImageComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner id=\"sp\" blo=true></app-spinner>\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet ></router-outlet>\n    <span (click)='scrollTop()' class=\"scroll fa fa-chevron-circle-up fa-2x\" id=\"scroll\"></span>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 30px; }\n\n.scroll {\n  position: fixed;\n  right: 30px;\n  bottom: 20px;\n  z-index: 9;\n  opacity: 0;\n  overflow: hidden;\n  transition: all ease .5s !important;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  cursor: pointer;\n  color: #820000; }\n\n.show_scroll {\n  opacity: .6;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.show_scroll:hover {\n    opacity: 1; }\n\n@media (max-width: 778px) {\n  .scroll {\n    color: #ff5757; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        // window load function
        window.addEventListener('load', function () {
            var sp = document.getElementById('sp');
            if (sp.hasAttribute('blo')) {
                sp.style.display = 'none';
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.seeScrollButton);
    };
    // see scroll button  function
    AppComponent.prototype.seeScrollButton = function () {
        var scrollButton = document.getElementById('scroll');
        if (window.scrollY >= 200) {
            scrollButton.classList.add('show_scroll');
        }
        else {
            scrollButton.classList.remove('show_scroll');
        }
    };
    // scroll button function
    AppComponent.prototype.scrollTop = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _services_get_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/get-services.service */ "./src/app/services/get-services.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/auth-guard.guard */ "./src/app/guard/auth-guard.guard.ts");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _services_validate_services_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate-services.service */ "./src/app/services/validate-services.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileSelectDirective"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
            ],
            providers: [_services_get_services_service__WEBPACK_IMPORTED_MODULE_7__["GetServicesService"], _guard_auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardGuard"], _services_auth_services_service__WEBPACK_IMPORTED_MODULE_12__["AuthServicesService"], _services_validate_services_service__WEBPACK_IMPORTED_MODULE_13__["ValidateServicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-image/add-image.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-image/add-image.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n<!-- start flash messages -->\n  <div class=\"col-md-12\">\n    <h3 *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n    <flash-messages></flash-messages>\n  </div>  \n <!-- end flash messages -->\n\n<!-- start  form -->\n  <div class=\"col-12\">\n      <form class=\"form-signin text-capitalize font-weight-bold\" (submit)=\"addImage()\">\n          <div class=\"row\">\n          <div class=\"col-6 justify-content-center\">\n          <div class=\"form-group\">\n            <label for=\"alt\" class=\"text-capitalize font-weight-bold\">alt for image</label>\n            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" placeholder=\"alt \" [(ngModel)]=\"alt\" name=\"alt\">\n          </div>\n        <div class=\"form-group\">\n          <label for=\"category\" class=\"text-capitalize font-weight-bold\">select category</label>\n          <select class=\"form-control\" name=\"category\"  (change)='changeOption()'  id=\"category\" [(ngModel)]=\"category\">\n            <option></option>\n            <option>animals</option>\n            <option>art</option>\n            <option>food</option> \n            <option>natral</option>\n            <option>cars</option>\n            <option>town</option>\n          </select>\n          <br>\n          <label for=\"category\" class=\"text-capitalize font-weight-bold\">select spitol category</label>\n          <select class=\"form-control\" name=\"sp_category\"  id=\"sp_category\" [(ngModel)]=\"sp_category\">\n            <option *ngFor=\"let option of options\">{{option}}</option>\n            <option *ngIf=\"!options\">must select category</option>\n\n          </select>\n        </div>\n          <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"save\" >\n        </div>\n        <div class=\"col-6 justify-content-center\">\n            <img style=\"width: 100%;\" id=\"uplode_image\" [src]=\"imageURL\" alt=\"\">\n            <div class=\"form-group position-relative\">\n                <span class=\"image_span position-absolute text-center \" >select image</span>\n                <span class=\"position-absolute selectUpload text-lowercase\">{{selectUpload}}</span>\n                  <label class=\"image \" for=\"photo\">select image</label>\n                  <br>\n                  <input  name=\"photo text-capitalize font-weight-bold\" id=\"photo\" [(ngModel)]=\"image\" type=\"file\" (change)='onChange($event.target.files)' />\n                </div>\n          </div>\n        </div>\n\n        </form>\n</div>\n<!-- end  form -->\n\n</div>\n\n "

/***/ }),

/***/ "./src/app/components/add-image/add-image.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/add-image/add-image.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photo {\n  background-color: #820000;\n  color: #eeddcd;\n  opacity: 0; }\n\n.image_span {\n  width: 110px;\n  height: 30px;\n  z-index: -1;\n  display: block;\n  position: absolute;\n  background-color: #ff5757;\n  color: #eeddcd;\n  top: 32px; }\n\n.selectUpload {\n  left: 0;\n  top: 32px;\n  left: 120px; }\n"

/***/ }),

/***/ "./src/app/components/add-image/add-image.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-image/add-image.component.ts ***!
  \*************************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_images_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/images-services.service */ "./src/app/services/images-services.service.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var _url = '/images';
var AddImageComponent = /** @class */ (function () {
    function AddImageComponent(_images, element, _http, flashMessage) {
        this._images = _images;
        this.element = element;
        this._http = _http;
        this.flashMessage = flashMessage;
        // to use fileUploder
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: _url, itemAlias: 'photo' });
        this.fileToUpload = null;
        this.imageURL = "";
        this.uploadPath = '';
    }
    AddImageComponent.prototype.ngOnInit = function () {
    }; // end ngOnInit
    // add new image
    AddImageComponent.prototype.addImage = function () {
        var _this = this;
        // to make shor all fields not empty befor send data
        if (this.alt == undefined || this.category == undefined || this.image == undefined || '' || this.sp_category == undefined) {
            this.flashMessage.show('plz fill  all fields', { cssClass: 'alert-danger', timeout: 3000 });
            window.scrollTo(0, 0);
        }
        else {
            // locate the file element meant for the file upload.
            var inputEl = this.element.nativeElement.querySelector('#photo');
            //create a new fromdata to send to server
            var formData = new FormData();
            formData.append('photo', inputEl.files.item(0));
            formData.append('alt', this.alt);
            formData.append('category', this.category);
            formData.append('sp_category', this.sp_category);
            this._images.addNewImage(formData).subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show(res.MSG, { cssClass: 'alert-success', timeout: 2000 });
                }
                else {
                    window.scrollTo(0, 0);
                    _this.flashMessage.show(res.errMSG.message, { cssClass: 'alert-danger', timeout: 2000 });
                }
            }, // end new fromdata to send to server
            function (err) {
                window.scrollTo(0, 0);
                _this.errorMessage = err;
            }); // end subscribe
            //to clear filelds value and make window scroll top after send data
            window.scrollTo(0, 0);
            this.alt = null;
            this.category = undefined;
            this.image = undefined;
            this.sp_category = undefined;
            this.imageURL = "";
            this.selectUpload = '';
        } // end else
    }; // end add new image
    // to change special category filde
    AddImageComponent.prototype.changeOption = function () {
        switch (this.category) {
            case 'animals':
                this.options = ['horses', 'birdes', 'dogs', 'wolfs', 'elefants', 'cats'];
                break;
            case 'food':
                this.options = ['drinks', 'spice', 'fast food', 'fruit'];
                break;
            case 'art':
                this.options = ['old art', 'grafety', 'free style'];
                break;
            case 'natral':
                this.options = ['flowers', 'sea', 'other'];
                break;
            case 'cars':
                this.options = ['red', 'blue', 'yellow'];
                break;
            case 'town':
                this.options = ['streets', 'bilding', 'houses'];
                break;
            case '':
                this.options = ['must select category'];
                break;
            default:
                this.options = ['must select category'];
                break;
        } // end switch
    }; // end change special category filde
    // to see image when selected
    AddImageComponent.prototype.onChange = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        this.selectUpload = file.item(0).name;
        var redar = new FileReader();
        redar.onload = function (event) {
            _this.imageURL = event.target.result;
        };
        redar.readAsDataURL(this.fileToUpload);
    }; // end see image when selected
    AddImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__(/*! ./add-image.component.html */ "./src/app/components/add-image/add-image.component.html"),
            styles: [__webpack_require__(/*! ./add-image.component.scss */ "./src/app/components/add-image/add-image.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_images_services_service__WEBPACK_IMPORTED_MODULE_1__["ImagesServicesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<!-- start linkes for admin -->\n  <div class=\"col-md-4 col-12 justify-content-center\">\n    <div class=\"row\">\n      <div class=\"col-md-12 \">\n        <a class=\"btn text-capitalize font-weight-bold\" \n        [routerLink]=\"['/users/adminDashboard/add_image']\"\n          routerLinkActive=\"active\">upload image <i class=\"fa fa-upload\"></i></a>\n      </div>\n      <div class=\"col-12\">\n        <a class=\"btn text-capitalize font-weight-bold\"\n         [routerLink]=\"['/users/adminDashboard/remove']\" \n         routerLinkActive=\"active\">remove image <i class=\"fa fa-remove\"></i></a>\n      </div>\n      <div class=\"col-12\">\n          <a class=\"btn text-capitalize font-weight-bold\" \n          [routerLink]=\"['/users/adminDashboard/register']\"\n           routerLinkActive=\"active\">add new admin <i class=\"fa fa-plus\"></i></a>\n        </div>\n        <div class=\"col-12\">\n          <a class=\"btn text-capitalize font-weight-bold\" \n          [routerLink]=\"['/users/adminDashboard/messages']\" \n          routerLinkActive=\"active\">messages <i class=\"fa fa-envelope\"></i></a>\n        </div>\n    </div>\n  </div>\n<!-- end linkes for admin -->\n\n<!-- start router outlet -->\n  <div class=\"col-md-8\">\n    <router-outlet></router-outlet>\n  </div>\n<!-- end router outlet -->\n</div>"

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 100%;\n  margin-top: 20px;\n  cursor: pointer;\n  color: #eeddcd !important;\n  background-color: #820000 !important; }\n  .btn:focus, .btn:active {\n    box-shadow: none; }\n  .active {\n  color: #fff !important;\n  background-color: #ff5757 !important; }\n"

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/components/admin-dashboard/admin-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2 class=\"brand text-capitalize\">contact me</h2>\n<!-- start flash messages-->\n  <div class=\"col-12\">\n    <flash-messages></flash-messages>\n  </div>\n<!-- end flash messages-->\n<!-- start contact page-->\n  <div class=\"col-12\">\n      <div class=\"wrapper animated bounceInLeft\">\n          <div class=\"contact-info text-left  d-none d-md-block\">\n            <ul class=\"contact-ul\">\n              <li><i class=\"fa fa-road\"></i> 44 nemabay sharm el shaikh</li>\n              <li><i class=\"fa fa-phone\"></i> (555) 555-5555</li>\n              <li><i class=\"fa fa-envelope\"></i> test@acme.test</li>\n            </ul>\n            <div class=\"text-center medea-info\" >\n              <h3 class=\"text-left\">folow us</h3>\n              <a href=\"#\" class=\"face\"><i class=\"fa fa-facebook fa-2x\"></i></a> \n              <a href=\"#\" class=\"googel-plus\"><i class=\"fa fa-google-plus fa-2x\"></i></a> \n              <a href=\"#\" class=\"twet\" ><i class=\"fa fa-twitter fa-2x\"></i></a> \n              <a href=\"#\" class=\"linked\"><i class=\"fa fa-linkedin fa-2x\"></i></a>\n              <a href=\"#\" class=\"you\"><i class=\"fa fa-youtube fa-2x\"></i></a>\n              </div>\n          </div>\n          <div class=\"contact\">\n            <h3>Email Us</h3>\n            <form (submit)='sendMessage()'>\n              <p>\n                <input [(ngModel)]=\"name\" type=\"text\" name=\"name\" placeholder=\"Name\">\n              </p>\n              <p>\n                <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\">\n              </p>\n              <p class=\"full\">\n                <label>Message</label>\n                <textarea [(ngModel)]=\"message\" name=\"message\" rows=\"5\" placeholder=\"Message\" ></textarea>\n              </p>\n              <p class=\"full\">\n                <button type=\"submit\" class=\"btn btn-danger\">Send</button>\n              </p>\n            </form>\n          </div>\n          <div class=\"contact-info text-left d-block d-md-none\">\n              <ul class=\"contact-ul\">\n                <li><i class=\"fa fa-road\"></i> 44 nemabay sharm el shaikh</li>\n                <li><i class=\"fa fa-phone\"></i> (555) 555-5555</li>\n                <li><i class=\"fa fa-envelope\"></i> test@acme.test</li>\n              </ul>\n              <div class=\"text-center medea-info\" >\n                      <h3 class=\"text-left\">folow us</h3>\n                          <a href=\"#\" class=\"face\"><i class=\"fa fa-facebook fa-2x\"></i></a> \n                          <a href=\"#\" class=\"googel-plus\"><i class=\"fa fa-google-plus fa-2x\"></i></a> \n                          <a href=\"#\" class=\"twet\" ><i class=\"fa fa-twitter fa-2x\"></i></a> \n                          <a href=\"#\" class=\"linked\"><i class=\"fa fa-linkedin fa-2x\"></i></a>\n                          <a href=\"#\" class=\"you\"><i class=\"fa fa-youtube fa-2x\"></i></a>\n                </div>\n            </div>\n        </div>\n      </div>\n<!-- end contact page-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  background-size: cover;\n  padding: 2em; }\n\n.wrapper {\n  box-shadow: 0 0 20px 0 #820000;\n  border-radius: 10px;\n  margin-bottom: 15px; }\n\n.contact-info {\n  background: #eeddcd;\n  padding: 1em;\n  padding-top: 35% !important;\n  border-left: 2px solid #820000; }\n\n.contact-info h3 {\n    padding: 20px 0; }\n\n.contact-info h3, .contact-info ul {\n    text-align: center;\n    margin: 0 0 1rem 0; }\n\n.medea-info a {\n  margin: 5px;\n  color: #820000;\n  transition: all ease .3s; }\n\n.medea-info a:hover {\n    color: #ff5757; }\n\ntextarea {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  resize: none;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 18px;\n  border: 2px #820000 solid; }\n\n.contact form label {\n  display: block; }\n\nul li {\n  list-style: none;\n  padding: 0;\n  line-height: 30px; }\n\n.contact-ul {\n  padding-left: 10px; }\n\n.contact form p {\n  margin: 0;\n  padding-top: 10px; }\n\n.contact form .full {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-column: 1 / 3; }\n\n.contact form button,\n.contact form input {\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-bottom: solid #820000 2px; }\n\n.contact form input {\n  background-color: transparent; }\n\n.contact form button {\n  border: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 2px;\n  background-color: #820000; }\n\n.contact form button:hover {\n    opacity: .6; }\n\n.contact form button:hover,\n.contact form button:focus,\n.contact form button:hover,\n.contact form input:hover,\n.contact form button:focus,\n.contact form input:focus,\n.contact form textarea:hover,\n.contact form textarea:focus {\n  outline: none; }\n\n.brand {\n  padding: 20px 0; }\n\n@media (min-width: 768px) {\n  .wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 2fr;\n        grid-template-columns: 1fr 2fr; }\n  .contact {\n    padding: 2em; } }\n\n@media (max-width: 768px) {\n  .wrapper > * {\n    padding: 2em; }\n  .contact-info h3,\n  .contact-info ul,\n  .brand {\n    text-align: center; }\n  .contact-info {\n    background: #820000;\n    color: #fff;\n    padding: 2em !important; } }\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_messagesServices, flashMessage, _http) {
        this._messagesServices = _messagesServices;
        this.flashMessage = flashMessage;
        this._http = _http;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    // start send message 
    ContactComponent.prototype.sendMessage = function () {
        var _this = this;
        var msg = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        this._messagesServices.sendMessage(msg).subscribe(function (res) {
            if (res.success) {
                window.scrollTo(0, 0);
                _this.flashMessage.show(res.MSG, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show(res.errMSG, { cssClass: 'alert-danger', timeout: 5000 });
            }
        }, function (err) {
            window.scrollTo(0, 0);
            _this.flashMessage.show(err, { cssClass: 'alert-danger', timeout: 5000 });
        });
    }; // end send message 
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/erorr/erorr.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/erorr/erorr.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-5\">\n    <div class=\"card text-white bg-transparent\">\n      <img class=\"card-img-top\" src=\"images/404.png\" alt=\"404-image\">\n    </div>\n  </div>\n  <div class=\"col-7\">\n    <h2 class=\"h1\">page not found</h2>\n    <a [routerLink]=\"['/home']\" class=\"text-capitalize\" >back to home page</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/erorr/erorr.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/erorr/erorr.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1 {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\na {\n  position: absolute;\n  top: 65%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n"

/***/ }),

/***/ "./src/app/components/erorr/erorr.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/erorr/erorr.component.ts ***!
  \*****************************************************/
/*! exports provided: ErorrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErorrComponent", function() { return ErorrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErorrComponent = /** @class */ (function () {
    function ErorrComponent() {
    }
    ErorrComponent.prototype.ngOnInit = function () {
    };
    ErorrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erorr',
            template: __webpack_require__(/*! ./erorr.component.html */ "./src/app/components/erorr/erorr.component.html"),
            styles: [__webpack_require__(/*! ./erorr.component.scss */ "./src/app/components/erorr/erorr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErorrComponent);
    return ErorrComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n  <div class=\"row justify-content-between\">\n      <div class=\"col col-md-auto font-weight-bold\">\n        Copy Right &copy; 2018\n      </div>\n        <!-- start soctial medea icons -->\n        <div class=\"col col-md-auto\">\n            <a href=\"#\" class=\"a_link\" title=\"face book\">\n              <i class=\"fa fa-facebook fa-2x\" ></i>\n            </a>\n            <a href=\"#\"  class=\"a_link\" title=\"twitter\">\n              <i class=\"fa fa-twitter fa-2x\"></i>\n            </a>\n            <a href=\"#\" class=\"a_link\" title=\"instagram\">\n              <i class=\"fa fa-2x fa-instagram\"></i>\n            </a>\n            <a href=\"#\" class=\"a_link\" title=\"google\">\n                <i class=\"fa fa-2x fa-google-plus\"></i>\n            </a>\n            <a href=\"#\" class=\"a_link\" title=\"youtube\">\n              <i class=\"fa fa-2x fa-youtube\"></i>       \n            </a>\n        </div>\n      <!-- end soctial medea icons -->\n    </div>\n  </div>\n  <!-- start end  of the page border & logo-->\n  <div class=\"col-sm-12 text-center\">\n      <hr class=\"border\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\" >\n        <img width=\"150px\" height=\"50px\" src=\"images/brwaaz.png\" alt=\"web sit logo\">\n      </a>\n  </div>\n  <!-- start end  of the page  border & log-->\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding-top: 50px;\n  color: #ff5757 !important; }\n  footer i {\n    margin-left: 10px; }\n  footer a {\n    color: #ff5757 !important;\n    transition: all ease-in-out .3s;\n    text-decoration: none; }\n  footer a:hover {\n      color: #820000 !important; }\n  footer .border {\n    border: 1px solid #ff5757 !important; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-4\">\n      <div class=\"row padding_right\">\n          <div class=\"col-md-12\">\n              <a [routerLink]=\"['/view/', {category:'natral'}]\">\n                  <div class=\"position-relative natral\" style=\"height: 400px;\">\n                      <div class=\"ovarlay\">\n                          <h2>natral</h2>\n                      </div>\n                      <img src=\"images/natral.jpg\"  alt=\"natral\">\n                  </div>\n              </a>\n          </div>\n          <div class=\"col-md-12 padding_top\" >\n              <a [routerLink]=\"['/view/', {category:'food'}]\" >\n                  <div class=\"position-relative food pb-2\">\n                      <div class=\"ovarlay\">\n                          <h2>food</h2>\n                      </div>\n                  <img src=\"images/brooke-lark-391764.jpg\" alt=\"food\">\n                  </div>\n              </a>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-8 \">\n      <div class=\"row\">\n      <div class=\"col-md-8 padding_right\">\n          <a [routerLink]=\"['/view/', {category:'all'}]\">\n              <div class=\"position-relative town\">\n               <div class=\"ovarlay\">\n                   <h2>all images</h2>\n               </div>\n              <img src=\"images/street.jpg\" alt=\"street\">\n              </div>\n          </a>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"row\" >\n              <div class=\"col-md-12\">\n                    <a [routerLink]=\"['/view/', {category:'animals'}]\">\n                        <div class=\"position-relative walf\" >\n                            <div class=\"ovarlay\">\n                                <h2>animals</h2>\n                            </div>\n                        <img src=\"images/walf.jpg\" alt=\"big walf\">\n                        </div>\n                    </a>\n              </div>\n              <div class=\"col-md-12 padding_top\" >\n                      <a [routerLink]=\"['/view/', {category:'art'}]\">\n                          <div class=\"position-relative art\" id=\"art\">\n                              <div class=\"ovarlay\">\n                                  <h2>art</h2>\n                              </div>\n                          <img src=\"images/art.jpg\" alt=\"food\">\n                          </div>\n                      </a>\n                  </div>\n          </div>\n      </div>\n      </div>\n      <div class=\"col-md-12\" >\n          <div class=\"row padding_top\">\n              <div class=\"col-md-4 padding_right\" >\n                  <a [routerLink]=\"['/view/', {category:'town'}]\">\n                      <div class=\"position-relative anmation\" >\n                          <div class=\"ovarlay\">\n                              <h2>town</h2>\n                          </div>\n                      <img src=\"images/town.jpg\"  alt=\"town\">\n                      </div>\n                  </a>\n              </div>\n              <div class=\"col-md-8\" >\n                  <a [routerLink]=\"['/view/', {category:'cars'}]\">\n                      <div class=\"position-relative cars\">\n                          <div class=\"ovarlay\">\n                              <h2>cars</h2>\n                          </div>\n                      <img src=\"images/cars.jpg\"  alt=\"jops\">\n                      </div>\n                  </a>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 0px !important;\n  margin: 0px !important; }\n\n.row {\n  padding-bottom: 0px !important; }\n\n.padding_right {\n  padding-right: 12px !important; }\n\n.padding_top {\n  padding-top: 12px !important; }\n\nimg {\n  width: 100% !important;\n  height: 100% !important; }\n\na {\n  color: #eeddcd; }\n\na:hover .ovarlay {\n    opacity: 1;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0; }\n\n.walf {\n  height: 270px; }\n\n.art {\n  height: 290px; }\n\n.food {\n  height: 450px; }\n\n.natral {\n  height: 400px; }\n\n.cars, .anmation {\n  height: 280px; }\n\n.town {\n  height: 570px; }\n\n.ovarlay {\n  transition: all ease-in .5s;\n  opacity: 0;\n  position: absolute;\n  bottom: 100%;\n  top: 100%;\n  right: 100%;\n  left: 100%;\n  background-color: rgba(130, 0, 0, 0.5);\n  text-align: center; }\n\n.ovarlay h2 {\n    top: 50%;\n    display: block;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    color: #eeddcd;\n    text-transform: capitalize; }\n\n@media (max-width: 766px) {\n  .pl-1, .pr-0, .p-0, .col-md-8 {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    padding: 0px !important; }\n  .row {\n    margin: 0px; }\n    .row .col-md-4, .row .col-md-8, .row .col-md-12 {\n      margin-top: 5px !important; }\n  .ovarlay {\n    opacity: 1;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0; } }\n\n@media (max-width: 767px) {\n  .padding_right {\n    padding-right: 0px !important; }\n  .padding_top {\n    padding-top: 0px !important; } }\n\n@media (max-width: 900px) {\n  .walf {\n    height: 210px; }\n  .art {\n    height: 270px; }\n  .food {\n    height: 315px; }\n  .natral {\n    height: 300px; }\n  .cars, .anmation {\n    height: 220px; }\n  .town {\n    height: 490px; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // to make window scroll top
        window.scrollTo(0, 0);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n<div class=\"col-md-6\">\n    <h3 *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n  <!-- start flash-messages -->\n  <flash-messages></flash-messages>\n  <!-- end flash-messages -->\n\n<!-- start login form -->\n<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n<!-- end login form -->\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row label {\n  font-weight: bold;\n  font-size: 18px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authServices, _router, flashMessage) {
        this._authServices = _authServices;
        this._router = _router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // to make window scroll top
        window.scrollTo(0, 0);
    };
    //  on login submit function
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (this.username == undefined || this.password == undefined) {
            window.scrollTo(0, 0);
            this.flashMessage.show('plz fill  all fields', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this._authServices.loginUser(user).subscribe(function (data) {
                if (data.success) {
                    _this._authServices.storeUserData(data.token, data.user);
                    _this._router.navigate(['/users/adminDashboard']);
                }
                else {
                    window.scrollTo(0, 0);
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this._router.navigate(['/users/admin']);
                }
            }, // end new fromdata to send to server
            function (err) {
                window.scrollTo(0, 0);
                _this.errorMessage = err;
            }); // end subscribe
        }
    }; // end login submit function
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__["AuthServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <h2>messages</h2>\n    <h3 *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n<!-- start flash messages -->\n    <div class=\"col-12\">\n        <flash-messages></flash-messages>\n    </div>\n<!-- start flash messages -->\n  <ng-container *ngIf=\"messages != 0; else noMessages\">\n      <div class=\"col-12 message\" *ngFor=\"let message of messages\">\n          <a class=\"position-absolute\" (click)='remove(message._id)' title=\"remove message\"><i  class=\"fa fa-close\"></i></a>\n          <h3>{{message.name | titlecase}}</h3>\n          <h4>{{message.email}}</h4>\n          <p>{{message.message}}</p>\n        </div>\n  </ng-container>\n  <ng-template #noMessages>\n    <h3>No Messages</h3>\n  </ng-template>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  border: 1px solid #000;\n  margin-top: 10px;\n  position: relative; }\n  .message a {\n    color: #ff5757;\n    right: 10px;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(_messagesServices, _flashMessages) {
        this._messagesServices = _messagesServices;
        this._flashMessages = _flashMessages;
        this.messages = 0;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // to get all meassges
        this._messagesServices.getMessages().subscribe(function (res) {
            if (res.success) {
                _this.messages = res.messages;
            }
            else {
                _this._flashMessages.show(res.errMSG, { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            _this.errorMessage = err;
        }); //end get all meassges
    }; // end ngOnInit
    // start remove message
    MessagesComponent.prototype.remove = function (id) {
        var _this = this;
        this._messagesServices.removeMessage(id).subscribe(function (res) {
            for (var i = 0; i < _this.messages.length; i++) {
                var item = _this.messages[i];
                if (item.id = id) {
                    _this.messages.splice(i, 1);
                    _this._messagesServices.getMessages().subscribe(function (data) {
                        if (!res.success) {
                            _this._flashMessages.show(res.err.message, { cssClass: 'alert-danger', timeout: 3000 });
                        }
                        else {
                            _this.messages = data.messages;
                            _this._flashMessages.show(res.MSG, { cssClass: 'alert-success', timeout: 3000 });
                        }
                    }, function (err) {
                        _this.errorMessage = err;
                    }); // end get all messages aftar remove message
                    break;
                }
                else {
                    _this._flashMessages.show(res.MSG, { cssClass: 'alert-success', timeout: 3000 });
                }
            } // end for loop
        });
    }; // end remove message
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light pl-2 pr-2\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" \n        data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-home fa-2x\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link font-weight-bold\" \n        [routerLink]=\"['/home']\" routerLinkActive=\"active\" >Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link font-weight-bold\" \n        [routerLink]=\"['/contact']\" routerLinkActive=\"active\" >contact me</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"_auth.loggedIn()\">\n        <a class=\"nav-link font-weight-bold\"\n         [routerLink]=\"['/users/adminDashboard']\" routerLinkActive=\"active\" >admin</a>\n      </li>\n      <li *ngIf=\"_auth.loggedIn()\">\n        <a class=\"nav-link font-weight-bold\" \n        [routerLink]=\"['/users/login']\" (click)='onLogoutClick()' routerLinkActive=\"active\" >logout</a>\n      </li>\n    </ul>\n  </div>\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" routerLinkActive=\"active\" >\n    <img width=\"150px\" height=\"50px\" src=\"images/brwaaz.png\" alt=\"web sit logo\">\n  </a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #820000; }\n  nav .active {\n    color: #ff5757 !important; }\n  nav a, nav button {\n    color: #eeddcd !important;\n    font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // start logOut function
    NavbarComponent.prototype.onLogoutClick = function () {
        this._auth.logout();
        this._router.navigate(['/home']);
        return false;
    }; // end logOut function
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__["AuthServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n<!-- start flash masseges -->\n<div class=\"col-md-6\">\n  <h3 *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n    <flash-messages></flash-messages>\n  <div>\n<!-- end flash masseges-->\n\n<!-- start registre page -->\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anybody in all plante.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"repassword\">Re Password</label>\n        <input type=\"password\" [(ngModel)]=\"repassword\" name=\"repassword\" class=\"form-control\" id=\"repassword\" placeholder=\" Re Password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n    </div>\n</div>\n<!-- end registre page -->\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row .text-muted {\n  color: #820000 !important; }\n\n.row label {\n  font-weight: bold;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate-services.service */ "./src/app/services/validate-services.service.ts");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, _authServices, router, flashMessage) {
        this.validateService = validateService;
        this._authServices = _authServices;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // to make window scroll top
        window.scrollTo(0, 0);
    };
    // registry submit function
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password,
            repassword: this.repassword
        };
        // validateService
        if (!this.validateService.validateRegister(user)) {
            this.username = '';
            this.password = '';
            this.email = '';
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            window.scrollTo(0, 0);
            return false;
        } // validateService
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.username = '';
            this.password = '';
            this.email = '';
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            window.scrollTo(0, 0);
            return false;
        } // end Validate Email
        // to equal password field with repasword field 
        if (user.password != user.repassword) {
            this.flashMessage.show('password fied must be the same repassword', { cssClass: 'alert-danger', timeout: 3000 });
            this.password = '';
            this, this.repassword = '';
            window.scrollTo(0, 0);
            return false;
        } //end to equal password field with repasword field 
        // start  Register
        this._authServices.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/users/admin']);
            }
            else {
                _this.flashMessage.show(data.sms, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/users/register']);
                window.scrollTo(0, 0);
            }
        }, // end new fromdata to send to server
        function (err) {
            window.scrollTo(0, 0);
            _this.errorMessage = err;
        }); // end subscribe
    }; // end on registre submit
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_services_service__WEBPACK_IMPORTED_MODULE_1__["ValidateServicesService"],
            _services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/remove-image/remove-image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/remove-image/remove-image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start flash-messages -->\n  <flash-messages></flash-messages>\n<!-- end flash-messages -->\n<ng-container *ngIf=\"images; else error\">\n  <h1>{{name | titlecase}}</h1>\n<div class=\"row m-0 justify-content-start\">\n    <div *ngFor=\"let image of images\" class=\"col-4 col-md-2 p-0 m-1 images\" style=\"height: 130px;;\">\n      <div class=\"ovarlay\" (dblclick)='remove(image._id)'>\n        <h4>dblclick to Remove</h4>\n      </div>\n      <img width=\"100%\" height=\"100%\" src=\"build/{{image.small_image}}\" alt=\"{{image.alt}}\">\n    </div>\n  </div>\n</ng-container>\n<ng-template #error>\n  <h3>no images</h3>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/remove-image/remove-image.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/remove-image/remove-image.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ovarlay {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: rgba(130, 0, 0, 0.5);\n  z-index: 100;\n  display: none;\n  text-align: center;\n  color: #eeddcd; }\n  .ovarlay h4 {\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  .images {\n  cursor: pointer; }\n  .images img {\n    cursor: pointer; }\n  .images:hover .ovarlay {\n    display: block !important; }\n"

/***/ }),

/***/ "./src/app/components/remove-image/remove-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/remove-image/remove-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: RemoveImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveImageComponent", function() { return RemoveImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_images_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/images-services.service */ "./src/app/services/images-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveImageComponent = /** @class */ (function () {
    function RemoveImageComponent(_imagesService, _router, flashMessages) {
        this._imagesService = _imagesService;
        this._router = _router;
        this.flashMessages = flashMessages;
    }
    RemoveImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // start get all images
        this._imagesService.getData().subscribe(function (res) {
            if (!res.success) {
                _this.flashMessages.show(res.errMSG.message, { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.images = res.images;
            }
        }, function (err) {
            _this.flashMessages.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
        });
    }; // end get all images
    //start remove image
    RemoveImageComponent.prototype.remove = function (id) {
        var _this = this;
        this._imagesService.removeImage(id).subscribe(function (res) {
            for (var i = 0; i < _this.images.length; i++) {
                var item = _this.images[i];
                if (item.id = id) {
                    _this.images.splice(i, 1);
                    _this._imagesService.getData().subscribe(function (data) {
                        if (!res.success) {
                            window.scrollTo(0, 0);
                            _this.flashMessages.show(res.errMSG.message, { cssClass: 'alert-danger', timeout: 3000 });
                        }
                        else {
                            _this.images = data.images;
                            window.scrollTo(0, 0);
                            _this.flashMessages.show(res.MSG, { cssClass: 'alert-success', timeout: 3000 });
                        }
                    }); // end get images from server after remove image
                    break;
                }
                else {
                    window.scrollTo(0, 0);
                    _this.flashMessages.show(res.message, { cssClass: 'alert-danger', timeout: 3000 });
                }
            }
        }, // end remove image from servar
        function (err) {
            _this.flashMessages.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
        });
    }; //end remove image
    RemoveImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-image',
            template: __webpack_require__(/*! ./remove-image.component.html */ "./src/app/components/remove-image/remove-image.component.html"),
            styles: [__webpack_require__(/*! ./remove-image.component.scss */ "./src/app/components/remove-image/remove-image.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_images_services_service__WEBPACK_IMPORTED_MODULE_1__["ImagesServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], RemoveImageComponent);
    return RemoveImageComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- loding page -->\n<div class=\"load\" id=\"windowLoad\">\n  <div class=\"spinner\">\n      <div class=\"spinner2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".load {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 1000000; }\n  .load .spinner {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    border: #ead5ffab solid 15px;\n    margin: 150px auto;\n    border-left-color: #820000;\n    position: relative;\n    -webkit-animation: rotate1 linear 1s infinite;\n            animation: rotate1 linear 1s infinite; }\n  .load .spinner .spinner2 {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      border: #ead5ffab solid 15px;\n      border-left-color: #820000;\n      position: absolute;\n      -webkit-animation: rotate2 linear 1s infinite;\n              animation: rotate2 linear 1s infinite; }\n  @-webkit-keyframes rotate1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes rotate2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngFor=\"let button of buttons \" class=\"btn btn-success m-2\" (click)='filter(button)' [id]=\"button\">{{button}}</button>\n    <div  id=\"ovar\" class=\"d-none\"  >\n      <span  class=\"close\" (click)=closeImage()><i class=\"fa fa-close\"></i></span>\n      <picture>\n        <img  src=\"\" id=\"image\" style=\"max-width: 95vw; max-height: 95%\"  class=\"image\" alt=\"image.alt\">\n      </picture>\n  </div>\n  <h3 *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n  <!-- start page -->\n   <ng-container *ngIf=\"images != 0; else nowImages\">\n      <h1>{{category | titlecase}}</h1>\n    <div class=\"row m-0 justify-content-start\">\n      <!-- start flash messages -->\n        <div class=\"col-md-12\">\n            <flash-messages></flash-messages>\n        </div> \n      <!-- end flash messages -->\n        <div *ngFor=\"let image of images\" class=\"col-4 col-md-2 p-0 pb-2 pl-2\" style=\"height: 130px;;\">\n            <img (click)='seeImage(image.original_image, image.alt)' width=\"100%\" height=\"100%\" \n            src=\"build/{{image.small_image}}\" alt=\"{{image.alt}}\">\n        </div>\n      </div>\n  </ng-container>\n  <ng-template #nowImages>\n    <h3>no images</h3>\n  </ng-template>\n  <!-- end page -->\n  \n  "

/***/ }),

/***/ "./src/app/components/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 5px;\n  cursor: pointer; }\n\n.ovar {\n  background-color: rgba(130, 0, 0, 0.7);\n  z-index: 10;\n  left: 50%;\n  width: 0px;\n  top: 50%;\n  display: block !important;\n  text-align: center;\n  position: fixed;\n  overflow: hidden; }\n\n.ovar .image {\n    position: relative;\n    top: 50% !important;\n    -webkit-transform: translateY(-50%) !important;\n            transform: translateY(-50%) !important; }\n\n.ovar .close {\n    position: fixed;\n    z-index: 210;\n    top: 20px;\n    right: 50px;\n    color: #eeddcd;\n    cursor: pointer; }\n\n.ovar .close:hover {\n      color: #ff5757 !important; }\n\n.dis {\n  display: block;\n  -webkit-animation: anetion linear .6s forwards;\n          animation: anetion linear .6s forwards; }\n\n@-webkit-keyframes anetion {\n  from {\n    width: 0;\n    height: 0%; }\n  to {\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0%; } }\n\n@keyframes anetion {\n  from {\n    width: 0;\n    height: 0%; }\n  to {\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0%; } }\n"

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/get-services.service */ "./src/app/services/get-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_images_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/images-services.service */ "./src/app/services/images-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewComponent = /** @class */ (function () {
    function ViewComponent(_service, _imagesService, _activeRouter, flashMessage) {
        this._service = _service;
        this._imagesService = _imagesService;
        this._activeRouter = _activeRouter;
        this.flashMessage = flashMessage;
        this.images = 0;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // to kep windo scroll top on init
        window.scrollTo(0, 0);
        // get data from params
        this._activeRouter.paramMap.subscribe(function (params) {
            var category = params.get('category');
            _this._imagesService.getData().subscribe(function (res) {
                // start switch
                switch (category) {
                    case 'animals':
                        _this.buttons = ['all', 'horses', 'birdes', 'dogs', 'wolfs', 'elefants', 'cats'];
                        break;
                    case 'food':
                        _this.buttons = ['all', 'drinks', 'spice', 'fast food'];
                        break;
                    case 'art':
                        _this.buttons = ['all', 'old art', 'grafety', 'free style'];
                        break;
                    case 'natral':
                        _this.buttons = ['all', 'flowers', 'sea', 'other'];
                        break;
                    case 'cars':
                        _this.buttons = ['all', 'red', 'blue', 'yellow'];
                        break;
                    case 'town':
                        _this.buttons = ['all', 'streets', 'bilding', 'houses'];
                        break;
                } // end switch
                if (category == 'all') {
                    _this.images = res.images;
                }
                else {
                    _this.images = _this._service.filterByCategory(res.images, category);
                }
            }, function (err) {
                _this.errorMessage = err;
            }); // end get data from server
        }); // end get data from params
    }; // end ngOnInit
    // open ovar fllow to see image
    ViewComponent.prototype.seeImage = function (src, alt) {
        var ovar = document.getElementById('ovar');
        var image = document.getElementById('image');
        ovar.classList.add('ovar', 'dis');
        image.setAttribute('src', 'src/' + src);
        image.setAttribute('alt', 'src/' + alt);
        document.body.style.overflow = 'hidden';
    }; // end open ovar fllow to see image
    // close ovar fllow button
    ViewComponent.prototype.closeImage = function () {
        var ovar = document.getElementById('ovar');
        ovar.classList.toggle('ovar');
        document.body.style.overflow = 'auto';
    }; // end close ovar fllow button
    // start filter special category
    ViewComponent.prototype.filter = function (word) {
        var _this = this;
        this._imagesService.getData().subscribe(function (res) {
            _this._activeRouter.paramMap.subscribe(function (params) {
                var category = params.get('category');
                _this._imagesService.getData().subscribe(function (res) {
                    if (category == 'all') {
                        _this.images = _this._service.filterByCategory(res.images, category);
                    }
                    else {
                        _this.images = _this._service.filterByCategory(res.images, category);
                        if (word == 'all') {
                            _this.images = _this._service.filterByCategory(res.images, category);
                        }
                        else {
                            _this.images = _this._service.filterBySpCategory(_this.images, word);
                        }
                    }
                }, function (err) {
                    _this.errorMessage = err;
                }); // end get data from server
            }); // end get data from params
        }); // end get data from params
    }; // end fillter special
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/components/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_get_services_service__WEBPACK_IMPORTED_MODULE_1__["GetServicesService"],
            _services_images_services_service__WEBPACK_IMPORTED_MODULE_4__["ImagesServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth-guard.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guard/auth-guard.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AuthGuardGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/users/admin']);
            return false;
        }
    };
    AuthGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-services.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth-services.service.ts ***!
  \***************************************************/
/*! exports provided: AuthServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServicesService", function() { return AuthServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _get_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-services.service */ "./src/app/services/get-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthServicesService = /** @class */ (function () {
    function AuthServicesService(http, _router, _service) {
        this.http = http;
        this._router = _router;
        this._service = _service;
        this._url = '/users';
        this.isDev = true; // Change to false before deployment
    }
    // registry new user
    AuthServicesService.prototype.registerUser = function (user) {
        return this.http.post(this._url + '/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
    }; // end registry new user
    // login user
    AuthServicesService.prototype.loginUser = function (user) {
        {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.append('Content-Type', 'application/json');
            return this.http.post(this._url + '/admin', user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
        }
    }; // login user
    // get item from localstorge token
    AuthServicesService.prototype.getToken = function () {
        return localStorage.getItem('token');
    }; // end localstorge token
    // set item from localstorge token
    AuthServicesService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }; // end set item from localstorge token
    // loggedin 
    AuthServicesService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])('token');
    }; // end loggedin 
    // start load token 
    AuthServicesService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    }; // end load token 
    // to get profile 
    AuthServicesService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authToken,
            'Content-Type': 'application/json'
        });
        return this.http.get(this._url + '/add_image', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
    }; //end get profile 
    // logout
    AuthServicesService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }; // end logout
    AuthServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _get_services_service__WEBPACK_IMPORTED_MODULE_4__["GetServicesService"]])
    ], AuthServicesService);
    return AuthServicesService;
}());



/***/ }),

/***/ "./src/app/services/get-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/get-services.service.ts ***!
  \**************************************************/
/*! exports provided: GetServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServicesService", function() { return GetServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetServicesService = /** @class */ (function () {
    function GetServicesService(_getHttp) {
        this._getHttp = _getHttp;
    }
    // handel error getData 
    GetServicesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.' + error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message);
    };
    ;
    // sort data by catgory
    GetServicesService.prototype.filterByCategory = function (data, filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return data.filter(function (images) {
            return images.category.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }; // end filter data by catgory
    // to filter images by spiatcal image
    GetServicesService.prototype.filterBySpCategory = function (data, filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return data.filter(function (images) {
            return images.sp_category.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }; // end filter images by spiatcal image
    GetServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetServicesService);
    return GetServicesService;
}());



/***/ }),

/***/ "./src/app/services/images-services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/images-services.service.ts ***!
  \*****************************************************/
/*! exports provided: ImagesServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesServicesService", function() { return ImagesServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _get_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-services.service */ "./src/app/services/get-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagesServicesService = /** @class */ (function () {
    // _url = '/images';
    function ImagesServicesService(_http, _authService, _services) {
        this._http = _http;
        this._authService = _authService;
        this._services = _services;
        this._url = '/images';
    }
    ImagesServicesService.prototype.removeImage = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this._authService.authToken
        });
        return this._http.get(this._url + '/remove/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._services.handleError));
    };
    // add new image
    ImagesServicesService.prototype.addNewImage = function (formData) {
        return this._http.post(this._url, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._services.handleError));
    }; // end add new image
    // get data from url + observable
    ImagesServicesService.prototype.getData = function () {
        return this._http.get(this._url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._services.handleError));
    }; // end get data from url + observable
    ImagesServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_services_service__WEBPACK_IMPORTED_MODULE_3__["AuthServicesService"],
            _get_services_service__WEBPACK_IMPORTED_MODULE_4__["GetServicesService"]])
    ], ImagesServicesService);
    return ImagesServicesService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _get_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-services.service */ "./src/app/services/get-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = /** @class */ (function () {
    // _url:string = '/message';
    function MessageService(_http, _auth, _getServices) {
        this._http = _http;
        this._auth = _auth;
        this._getServices = _getServices;
        this._url = '/message';
    }
    // post messages
    MessageService.prototype.sendMessage = function (msg) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        return this._http.post(this._url, msg, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._getServices.handleError));
    }; // end post messages
    // get messages
    MessageService.prototype.getMessages = function () {
        return this._http.get(this._url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._getServices.handleError));
    }; // end get messages
    // remove messages
    MessageService.prototype.removeMessage = function (id) {
        return this._http.get(this._url + '/' + id + '/remove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._getServices.handleError));
    }; // end remove messages
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"],
            _get_services_service__WEBPACK_IMPORTED_MODULE_4__["GetServicesService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/validate-services.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/validate-services.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidateServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateServicesService", function() { return ValidateServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateServicesService = /** @class */ (function () {
    function ValidateServicesService() {
    }
    // to valdaet if empety filde
    ValidateServicesService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // to valdaet if it email
    ValidateServicesService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateServicesService);
    return ValidateServicesService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\apps\mean stake\brwaaz_mean\angular_src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
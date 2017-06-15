webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(234),
        styles: [__webpack_require__(224)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__changeprofile_changeprofile_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__searching_and_explore_searching_and_explore_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_photo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_validate_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_auth_guard__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__changeprofile_changeprofile_component__["a" /* ChangeprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__searching_and_explore_searching_and_explore_component__["a" /* SearchingAndExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_11__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                //login
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                },
                //home
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]]
                },
                //profile
                {
                    path: 'profile',
                    component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'changeprofile',
                    component: __WEBPACK_IMPORTED_MODULE_9__changeprofile_changeprofile_component__["a" /* ChangeprofileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'searching-and-explore',
                    component: __WEBPACK_IMPORTED_MODULE_10__searching_and_explore_searching_and_explore_component__["a" /* SearchingAndExploreComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'post',
                    component: __WEBPACK_IMPORTED_MODULE_11__post_post_component__["a" /* PostComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13_app_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14_app_photo_service__["a" /* PhotoService */], __WEBPACK_IMPORTED_MODULE_15_app_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17_app_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18_app_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('id_token')) {
            return true;
        }
        else {
            this.router.navigate(['/register']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeprofileComponent = (function () {
    function ChangeprofileComponent() {
    }
    ChangeprofileComponent.prototype.ngOnInit = function () {
    };
    return ChangeprofileComponent;
}());
ChangeprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-changeprofile',
        template: __webpack_require__(235),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], ChangeprofileComponent);

//# sourceMappingURL=changeprofile.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_photo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_photoService, authService, router, userService) {
        this._photoService = _photoService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get photos
        this._photoService.getPhotos()
            .subscribe(function (response) {
            _this.photos = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        //get uer
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(236),
        styles: [__webpack_require__(226)],
        inputs: ['photos']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_photo_service__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            userpassword: this.userpassword
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user, data.user.id);
                _this.flashMessages.show("login success", {
                    cssClass: "alert-danger", timeout: 5000
                });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessages.show(data.msg, {
                    cssClass: "alert-danger", timeout: 5000
                });
                _this.router.navigate(['/']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(237),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_photo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_validate_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(router, flashMessagesService, authService, photoService, validateSerVice) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.photoService = photoService;
        this.validateSerVice = validateSerVice;
        this.user_id = localStorage.getItem('user_id');
        this.date = Date.now();
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.onPostSubmitPhoto = function () {
        var _this = this;
        var photo = {
            caption: this.caption,
            user_id: this.user_id,
            image_path: this.image_path,
            date: this.date
        };
        if (!this.validateSerVice.validatePostPhoto(photo)) {
            this.flashMessagesService.show('please fill in all field', { cssClass: 'alert-danger', timeout: 300 });
            return false;
        }
        this.photoService.addPhoto(photo).subscribe(function (data) {
            if (data) {
                _this.flashMessagesService.show('post success', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessagesService.show('false to upload', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    PostComponent.prototype.goToHomePage = function () {
        this.router.navigate(['/home']);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(238),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_photo_service__["a" /* PhotoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_validate_service__["a" /* ValidateService */]) === "function" && _e || Object])
], PostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_photo_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessages, _photoService) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this._photoService = _photoService;
        this.user_id = localStorage.getItem('user_id');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get an user 
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        // get photos
        this._photoService.getPhotos()
            .subscribe(function (response) {
            _this.photos = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('you are logout', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/']);
        return false;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(239),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_photo_service__["a" /* PhotoService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_validate_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(_userService, router, validateService, flashMessagesService, authService) {
        this._userService = _userService;
        this.router = router;
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            useremail: this.useremail,
            userpassword: this.userpassword,
            fullname: this.fullname,
            nickname: this.nickname,
            phone: this.phone,
            gender: this.gender,
            personal_information: this.personal_information,
            avatar: this.avatar
        };
        // require fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('please fill in all field', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // require email
        if (!this.validateService.validateEmail(user.useremail)) {
            this.flashMessagesService.show('please user a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('you are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessagesService.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent.prototype.goToLoginPage = function () {
        this.router.navigate(['/']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(240),
        styles: [__webpack_require__(230)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchingAndExploreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchingAndExploreComponent = (function () {
    function SearchingAndExploreComponent() {
    }
    SearchingAndExploreComponent.prototype.ngOnInit = function () {
    };
    return SearchingAndExploreComponent;
}());
SearchingAndExploreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-searching-and-explore',
        template: __webpack_require__(241),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], SearchingAndExploreComponent);

//# sourceMappingURL=searching-and-explore.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <router-outlet></router-outlet>\n</div>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n</div>\n<br><br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\" > <!--footer-->\n        <div class=\"col-lg-1 col-sm-2  col-xs-4 text-center\"><a routerLink=\"#\">ABOUT US</a></div>\n        <div class=\"col-lg-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">TERM</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">SUPPORT</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">BLOG</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">PRESS</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">API</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">JOBS</a></div>\n        <div class=\"col-md-1 col-sm-2  col-xs-4 text-center\"><a routerLink=\"#\">PRIVACY</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">DIRECTORY</a></div>\n        <div class=\"col-md-1 col-sm-2 col-xs-4 text-center\"><a routerLink=\"#\">LANGUAGE</a></div>\t\n        <div class=\"col-md-2 col-sm-2 col-xs-4 text-center\">\n                            &copy K59GROUP\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\n<!-- navbar -->\n   <div class=\"row\" style=\"border-bottom: 1px solid grey \">\n        <div class=\"text-center\">\n          <div class=\"col-md-1 col-xs-1\"></div>\n        <div class=\"col-md-2 col-xs-2\">\n          <a routerLink=\"\"><span class=\"glyphicon glyphicon-home\" style=\"font-size: 25px\"></span></a>\n        </div>\n        <div class=\"col-md-2  col-xs-2\">\n          <a routerLink=\"/searching-and-explore\"><span class=\"glyphicon glyphicon-search \" style=\"font-size: 25px\"></span></a>\n        </div>\n        <div class=\"col-md-2  col-xs-2\">\n          <a routerLink=\"/post\"><span class=\"glyphicon glyphicon-camera\" style=\"font-size: 25px\"></span></a>\n        </div>\n        <div class=\"col-md-2  col-xs-2\">\n          <a href=\"\"><span class=\"glyphicon glyphicon-heart\" style=\"font-size: 25px\"></span></a>\n        </div>\n        <div class=\"col-md-2  col-xs-2\">\n          <a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\" style=\"font-size: 25px\"></span></a>\n        </div>\n         <div class=\"col-md-1 col-xs-1\"></div>\n        </div>\n       </div>\n<!-- /navbar -->\n\n<!-- content -->\n    <div class=\"container\" style=\"padding-top: 60px;\">\n  <!-- frame profile picture -->\n  <div class=\"row\">\n    <!-- left column -->\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n      <div class=\"text-center\">\n        <img src=\"http://eva-img.24hstatic.com/upload/2-2016/images/2016-05-26/lee-min-ho-bi-su-dung-hinh-anh-trai-phep-de-lua-dao-25-ty-3-1464249930-width1000height750.jpg\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar\">\n        \n        <input type=\"file\" class=\"text-center center-block well well-sm\">\n      </div>\n    </div>\n   <!-- /frame profile picture -->\n\n   <!-- edit form column -->\n    <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n     \n      <h3>Thông tin</h3>\n      <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Họ Tên:</label>\n          <div class=\"col-lg-8\">\n            <input class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Biệt danh:</label>\n          <div class=\"col-lg-8\">\n            <input class=\"form-control\"  type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Giới thiệu:</label>\n          <div class=\"col-lg-8\">\n            <input class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Email:</label>\n          <div class=\"col-lg-8\">\n            <input class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Số điện thoại:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Giới tính:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\"></label>\n          <div class=\"col-md-8\">\n            <input class=\"btn btn-primary\" value=\"Lưu thay đổi\" type=\"button\">\n            <span></span>\n            <input class=\"btn btn-default\" value=\"Hủy\" type=\"reset\">\n          </div>\n        </div>\n      </form>\n      <h3>Mật khẩu</h3>\n       <form class=\"form-horizontal\" role=\"form\">\n       \n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Mật khẩu:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\">\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Nhập lại mật nhẩu:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" type=\"password\">\n          </div>\n        </div>\n           <div class=\"form-group\">\n              <label class=\"col-md-3 control-label\"></label>\n              <div class=\"col-md-8\">\n                <input class=\"btn btn-primary\" value=\"Lưu thay đổi\" type=\"button\">\n                <span></span>\n                <input class=\"btn btn-default\" value=\"Hủy\" type=\"reset\">\n              </div>\n            </div>\n       </form>\n    </div>\n     <!-- /edit form column -->\n    </div>\n  </div>  \n<!-- /content -->"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<!-- navbar -->\n\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid grey \">\n\t\t\t  <div class=\"text-center\">\n\t\t\t  \t<div class=\"col-md-1 col-xs-1\"></div>\n\t\t\t\t<div class=\"col-md-2 col-xs-2\">\n\t\t\t\t\t\t<a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t\t<a routerLink=\"/searching-and-explore\"><span class=\"glyphicon glyphicon-search \" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t<a routerLink=\"/post\"><span class=\"glyphicon glyphicon-camera\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t\t<a routerLink=#><span class=\"glyphicon glyphicon-heart\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t\t<a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t <div class=\"col-md-1 col-xs-1\"></div>\n\t\t\t\t</div>\n\t\t\t </div>\n<!-- /navbar -->\n\n<!-- container -->\n\t<!-- frame of post -->\n\t<ul class=\"nav nav-pills nav-stacked\">\t\n\t\t<li *ngFor=\"let user of users\"> \n\t\t\t<div class=\"row\" style=\"padding-top: 10px\" *ngFor=\"let photo of photos\">\n\t\t\t\t<div class=\"col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2\" style=\"border: 1px solid black;\" *ngIf=\"user._id == photo.user_id\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\" style=\"padding-top: 10px\">\n\t\t\t\t\t\t\t<img [src]=\"user.avatar\" class=\"img-circle\" style=\"height: 70px\">\n\t\t\t\t\t\t\t<a routerLink=\"/profile\" style=\"color: black\">{{user.fullname}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 text-right\" style=\"padding-top: 20px\"><p class=\"float-right\" >{{photo.date | date:'medium'}}</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\" row image thumbnail\" style=\"padding-top: 10px;border: none;\">\n\t\t\t\t\t\t<img [src]=\"photo.image_path\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\" status\" style=\"padding-top: 10px\">\n\t\t\t\t\t\t<strong>1 view</strong> <br>\n\t\t\t\t\t\t<a routerLink=\"/profile\" style=\"color: black\"><strong>{{user.fullname}}</strong></a> {{photo.caption}}\n\t\t\t\t\t</div>\n\t\t\t\t<!--\t<div class=\"comment\" style=\"padding-top: 10px\">\n\t\t\t\t\t\t<i>view comment</i>\t<br>\n\t\t\t\t\t\t<a routerLink=\"/profile\" style=\"color: black\"><strong>tien.thinhvu</strong></a> cho chu dep the\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"your-comment\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let comment of comments\">\n\t\t\t\t\t\t\t\t\t{{comment}}\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<i>your comment</i> <br>\n\t\t\t\t\t\t<input style=\"border: none;\"  #newComment\n\t\t\t\t\t\t(keyup.enter)=\"addComment(newComment.value)\"\n     \t\t\t\t\t(blur)=\"addComment(newComment.value); newComment.value =''\"\n\t\t\t\t\t\t>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\t\t\t\n\t<!-- /frame of post -->\n\n\t\n<!-- container -->\t\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding: 70px 0px\">\n\t<!-- navbar -->\n\t<nav id=\"myNavbar\" class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" role=\"navigation\">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n\t\t                <span class=\"sr-only\">Toggle navigation</span>\n\t\t                <span class=\"icon-bar\"></span>\n\t\t                <span class=\"icon-bar\"></span>\n\t\t                <span class=\"icon-bar\"></span>\n\t\t            </button>\n\t\t\t\t<a class=\"navbar-brand\" href=\"#\">Instagram</a>\n\t\t\t</div>\n\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li class=\"active\"><a href=\"http://www.tutorialrepublic.com\" target=\"_blank\">Home</a></li>\n\t\t\t\t\t<li><a href=\"http://www.tutorialrepublic.com/about-us.php\" target=\"_blank\">About</a></li>\n\t\t\t\t\t<li><a href=\"http://www.tutorialrepublic.com/contact-us.php\" target=\"_blank\">Contact</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\t<!-- /navbar -->\n\n\t<!-- logo + label -->\n\t<div class=\"row\">\n\t\t<h2 class=\"text-center\">Instagram</h2><br>\n\t\t<div class=\"text-center\">\n\t\t\t<a href=\"#>\"><img src=\"https://instagram.fhan4-1.fna.fbcdn.net/t51.2885-19/s150x150/15876016_237940189965257_1575679576548311040_a.jpg\"\n\t\t\t\t alt=\"download appstore\" class=\"img-circle\" width=\"100\" height=\"100\" align=\"center\"></a>\n\t\t</div>\n\t</div>\n\t<!-- /logo + label -->\n\n\t<!-- form -->\n\t<div class=\"row\">\n\t\t<div class=\"col-md-offset-1 col-md-10 col-xs-10 col-xs-offset-1\">\n\t\t\t<form (submit)=\"onLoginSubmit()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>UserName</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"username\" [(ngModel)]=\"username\">\n\t\t\t\t\t<label>Mật Khẩu</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"userpassword\" [(ngModel)]=\"userpassword\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label><input type=\"checkbox\">REMEMBER</label>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<a href=\"#\">FORGET PASSWORD</a>\n\t\t\t\t<br>\n\t\t\t\t<a routerLink=\"/register\">REGISTER</a>\n`\t\t\t\t<br><br>\n\t\t\t\t<div class=\"button\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\">LOGIN</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<!-- /form -->\n\t<br><br>\n\t<!-- apple + android -->\n\t<div class=\"row\">\n\t\t<div class=\"download\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"text-center\">DOWNLOAD</div>\n\t\t\t\t<div class=\"col-md-12 col-xs-12 text-center\">\n\t\t\t\t\t<a href=\"#>\"><img src=\"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201701231950\" alt=\"download appstore\"\n\t\t\t\t\t\t class=\"img-circle\" width=\"100\" height=\"100\"></a>\n\t\t\t\t\t<a href=\"#\"><img src=\"https://image.freepik.com/free-vector/android-boot-logo_634639.jpg\" alt=\"download playstore\" class=\"img-circle\"\n\t\t\t\t\t\t width=\"120\" height=\"120\"></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /apple + android -->\n</div>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<!-- navbar -->\n<div class=\"row\" style=\"border-bottom: 1px solid grey \">\n\t<div class=\"text-center\">\n\t\t<div class=\"col-md-1 col-xs-1\"></div>\n\t\t<div class=\"col-md-2 col-xs-2\">\n\t\t\t<a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\" style=\"font-size: 25px\"></span></a>\n\t\t</div>\n\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t<a routerLink=\"/searching-and-explore\"><span class=\"glyphicon glyphicon-search \" style=\"font-size: 25px\"></span></a>\n\t\t</div>\n\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t<a routerLink=\"/post\"><span class=\"glyphicon glyphicon-camera\" style=\"font-size: 25px\"></span></a>\n\t\t</div>\n\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t<a routerLink=#><span class=\"glyphicon glyphicon-heart\" style=\"font-size: 25px\"></span></a>\n\t\t</div>\n\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t<a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\" style=\"font-size: 25px\"></span></a>\n\t\t</div>\n\t\t<div class=\"col-md-1 col-xs-1\"></div>\n\t</div>\n</div>\n<!-- /navbar -->\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"jumbotron\">\n\t\t\tPOST YOUR PHOTOS HERE !\n\t\t</div>\n\t\t<form #form=\"ngForm\" class=\"well\" (submit)=\"onPostSubmitPhoto()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>LINK YOUR IMAGE</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"image_path\" [(ngModel)]=\"image_path\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" *ngIf=\"hidden\">\n\t\t\t\t<label>USER ID</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"user_id\" [(ngModel)]=\"user_id\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" *ngIf=\"hidden\">\n\t\t\t\t<label>date_create</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"date\" [(ngModel)]=\"date\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" >\n\t\t\t\t<label for=\"comment\">CAPTION:</label>\n\t\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"caption\" [(ngModel)]=\"caption\"></textarea>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"goToHomePage()\">Cancel</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<!-- navbar -->\n\t<div class=\"row\" style=\"border-bottom: 1px solid grey \">\n\t\t<div class=\"text-center\">\n\t\t\t<div class=\"col-md-1 col-xs-1\"></div>\n\t\t\t<div class=\"col-md-2 col-xs-2\">\n\t\t\t\t<a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\" style=\"font-size: 25px\"></span></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t<a routerLink=\"/searching-and-explore\"><span class=\"glyphicon glyphicon-search \" style=\"font-size: 25px\"></span></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t<a routerLink=\"/post\"><span class=\"glyphicon glyphicon-camera\" style=\"font-size: 25px\"></span></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t<a href=\"#\"><span class=\"glyphicon glyphicon-heart\" style=\"font-size: 25px\"></span></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t<a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\" style=\"font-size: 25px\"></span></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-1 col-xs-1\"></div>\n\t\t</div>\n\t</div>\n\t<!-- /navbar -->\n\t<!-- container -->\n\t<!-- information -->\n\t<div class=\"row\" style=\"padding-top: 80px\">\n\t\t<div id=\"information\" class=\"col-md-12\">\n\t\t\t<div class=\"col-md-1 col-md-offset-3 col-xs-1 col-md-offset-3 thumbnail\" id=\"image\" style=\"border: none\">\n\t\t\t\t<img [src]=\"user.avatar\"\n\t\t\t\t alt=\"anhdaidien\" class=\"img-circle\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8 col-xs-8\" id=\"information\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<span style=\"font-size: 40px\">{{user.fullname}}</span><a routerLink=\"/changeprofile\">. CHANGE PROFILE</a> <a (click)=\"onLogoutClick()\"\n\t\t\t\t\t routerLink=\"#\">Logout</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"font-size: 20px;padding-top: 10px;padding-bottom: 10px\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-3\"><strong>16</strong> POST</div>\n\t\t\t\t\t<div class=\"col-md-4 col-xs-4\"><strong>79</strong> FOLLOWER</div>\n\t\t\t\t\t<div class=\"col-md-5 col-md-5\">FOLLOWING <strong>43 </strong></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"font-size: 20px;padding-top: 40px;padding-bottom: 10px\">\n\t\t\t\t\t{{user.fullname}}, {{user.personal_information}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- /information -->\n\n\t<!-- image frame -->\n\t<div class=\"container\">\n\t\t<ul id=\"image\" style=\"padding-top: 100px\" class=\"col-md-12\">\n\t\t\t<li *ngFor=\"let photo of photos\" style=\"list-style-type: none\">\n\t\t\t\t<div  *ngIf=\"photo.user_id == user._id\" class=\"col-md-2 thumbnail\" style=\"border: solid;padding: 5px; margin: 5px; height: 300px; width: 300px\"><img [src]=\"photo.image_path\"></div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<!-- /image frame -->\n\t<!-- /container -->\n</div>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Register</h2>\n  <form #form=\"ngForm\" class=\"well\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"useremail\"  [(ngModel)]=\"useremail\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"userpassword\"  [(ngModel)]=\"userpassword\">\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Gender\" name=\"gender\"  [(ngModel)]=\"gender\">\n    </div>\n    <div class=\"form-group\">\n      <label>Full Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" name=\"fullname\"  [(ngModel)]=\"fullname\">\n    </div>\n    <div class=\"form-group\">\n      <label>Nick Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"nick name\" name=\"nickname\" [(ngModel)]=\"nickname\">\n    </div>\n    <div class=\"form-group\">\n      <label>Phone Number</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"phone\" [(ngModel)]=\"phone\">\n    </div>\n    <div class=\"form-group\">\n      <label>Personal Information</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"personal_information\" [(ngModel)]=\"personal_information\">\n    </div>\n    <div class=\"form-group\">\n      <label>Avatar link</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Avatar\" name=\"avatar\" [(ngModel)]=\"avatar\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"goToLoginPage()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid grey \">\n\t\t\t  <div class=\"text-center\">\n\t\t\t  \t<div class=\"col-md-1 col-xs-1\"></div>\n\t\t\t\t<div class=\"col-md-2 col-xs-2\">\n\t\t\t\t\t<a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t<a routerLink=\"/searching-and-explore\"><span class=\"glyphicon glyphicon-search \" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t<a href=\"\"><span class=\"glyphicon glyphicon-camera\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t<a href=\"\"><span class=\"glyphicon glyphicon-heart\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2  col-xs-2\">\n\t\t\t\t\t<a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\" style=\"font-size: 25px\"></span></a>\n\t\t\t\t</div>\n\t\t\t\t <div class=\"col-md-1 col-xs-1\"></div>\n\t\t\t\t</div>\n\t\t\t </div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label for=\"usr\">Search:</label>\n\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"usr\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\"> <!--explore-->\n\t\t\t\t<div class=\"row\"> <!---ROW 1 -->\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" class=\"img-circle\">\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://eva-img.24hstatic.com/upload/2-2016/images/2016-05-26/lee-min-ho-bi-su-dung-hinh-anh-trai-phep-de-lua-dao-25-ty-3-1464249930-width1000height750.jpg\" />\n\t\t\t\t\t\t\t<p class=\"text-center \">LeeMinHo</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"https://dantricdn.com/k:2016/torres1-1463549649780/torres-loi-hen-voi-euro-2016-nuoc-mat-ke-ngoai-cuoc.jpg\"/>\n\t\t\t\t\t\t\t<p class=\"text-center \">Torres Fernando</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://enternews.vn/wp-content/uploads/2017/01/Mark-Zuckerberg.jpg\" />\n\n\n\t\t\t\t\t\t\t<p class=\"text-center \">Markzugkerberg</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"> <!---ROW 2 -->\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" class=\"img-circle\">\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://eva-img.24hstatic.com/upload/2-2016/images/2016-05-26/lee-min-ho-bi-su-dung-hinh-anh-trai-phep-de-lua-dao-25-ty-3-1464249930-width1000height750.jpg\" />\n\t\t\t\t\t\t\t<p class=\"text-center \">LeeMinHo</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"https://dantricdn.com/k:2016/torres1-1463549649780/torres-loi-hen-voi-euro-2016-nuoc-mat-ke-ngoai-cuoc.jpg\"/>\n\t\t\t\t\t\t\t<p class=\"text-center \">Torres Fernando</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://enternews.vn/wp-content/uploads/2017/01/Mark-Zuckerberg.jpg\" />\n\n\n\t\t\t\t\t\t\t<p class=\"text-center \">Markzugkerberg</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"> <!---ROW 3 -->\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" class=\"img-circle\">\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://eva-img.24hstatic.com/upload/2-2016/images/2016-05-26/lee-min-ho-bi-su-dung-hinh-anh-trai-phep-de-lua-dao-25-ty-3-1464249930-width1000height750.jpg\" />\n\t\t\t\t\t\t\t<p class=\"text-center \">LeeMinHo</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"https://dantricdn.com/k:2016/torres1-1463549649780/torres-loi-hen-voi-euro-2016-nuoc-mat-ke-ngoai-cuoc.jpg\"/>\n\t\t\t\t\t\t\t<p class=\"text-center \">Torres Fernando</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a href=\"#\" >\n\t\t\t\t\t\t\t<img id=\"_imgArticle_0\" class=\"img-responsive img-circle\" title=\"NoSQL là gì? Tại sao cần quan tâm?\" src=\"http://enternews.vn/wp-content/uploads/2017/01/Mark-Zuckerberg.jpg\" />\n\n\n\t\t\t\t\t\t\t<p class=\"text-center \">Markzugkerberg</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('user_api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('user_api/authen', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('user_api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user, user_id) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_id', user_id);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoService = (function () {
    function PhotoService(_http) {
        this._http = _http;
        this._getAllPhotosUrl = "/photo_api/photos";
        this._postAPhotoUrl = "/photo_api/photo";
        this._putAPhotoUrl = "/photo_api/photo/";
        this._getPhotosByUserId = "/photo_api/photos/:user_id";
    }
    // get get photos
    PhotoService.prototype.getPhotos = function () {
        return this._http
            .get(this._getAllPhotosUrl)
            .map(function (response) { return response.json(); });
    };
    // get photo with user_id
    PhotoService.prototype.getPhotoByUserId = function () {
        return this._http
            .get(this._getPhotosByUserId)
            .map(function (response) { return response.json(); });
    };
    // end get photos
    /* addPhoto(photo: Photo) {
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post(this._postUrl, JSON.stringify(photo), options)
         .map((response: Response) => response.json());
     } */
    PhotoService.prototype.addPhoto = function (photo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http.post(this._postAPhotoUrl, photo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.updatePhoto = function (photo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ "Content-Type": "application/json" });
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putAPhotoUrl + photo._id, JSON.stringify(photo), option)
            .map(function (response) { return response.json(); });
    };
    return PhotoService;
}());
PhotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PhotoService);

var _a;
//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._getUrl = "/user_api/users";
        this._postUrl = "/user_api/newuser";
        this._putUrl = "/user_api/user/";
    }
    // get Users
    UserService.prototype.getUsers = function () {
        return this._http
            .get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    // add a user
    UserService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.post(this._postUrl, { user: user }, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    // update user
    UserService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ "Content-Type": "application/json" });
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putUrl + user._id, JSON.stringify(user), option)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.useremail == undefined || user.userpassword == undefined || user.fullname == undefined || user.nickname == undefined || user.phone == undefined || user.personal_information == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    };
    ValidateService.prototype.validatePostPhoto = function (photo) {
        if (photo.caption == undefined || photo.image_path == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ })

},[504]);
//# sourceMappingURL=main.bundle.js.map
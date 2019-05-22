(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");





var Module = /** @class */ (function () {
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_4__["Routing"]
            ]
        })
    ], Module);
    return Module;
}());



/***/ }),

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"],
    }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPageComponent = /** @class */ (function () {
    function UserPageComponent() {
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.scss */ "./src/app/routes/user-page/user-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map
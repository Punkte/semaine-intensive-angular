(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

/***/ "./src/app/components/merchant-card/merchant-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/merchant-card/merchant-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"section\">\n  <div class=\"container\" >\n      <div class=\"columns is-multiline\">\n          <div class=\"\" *ngFor=\"let item of merchant\" [class]=\"item.category.slug && 'card column is-3'\" >\n            <div class=\"card-image\" *ngIf=\"item.content && item.content.cover\">\n              <figure class=\"image is-4by3\">\n                <img [src]=\"item.content.cover\" alt=\"Placeholder image\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"media\">\n                <div class=\"media-left\">\n                  <figure class=\"image is-48x48\">\n                    <img src=\"https://bulma.io/images/placeholders/96x96.png\" alt=\"Placeholder image\">\n                  </figure>\n                </div>\n                <div class=\"media-content\">\n                  <p class=\"title is-4\">{{item.content.name}}</p>\n                  <p class=\"subtitle is-6\">@{{item.content.name}}</p>\n                </div>\n              </div>\n          \n              <div class=\"content\" *ngIf=\"item.content.description\">\n                {{ item.content.description }}\n              </div>\n            </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/merchant-card/merchant-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/merchant-card/merchant-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alimentation {\n  color: #aaa2c0; }\n\n.services {\n  color: #ba39e9; }\n\n.beaute--sante-et-bien-etre {\n  color: #a59061; }\n\n.restauration {\n  color: #e92051; }\n\n.maison-et-deco {\n  color: #903246; }\n\n.loisirs-et-divertissements {\n  color: #7bdec4; }\n\n.list__item {\n  display: inline-block;\n  padding: 5px 15px;\n  cursor: pointer; }\n\n.list__item .alimentation {\n  color: #65b6b8; }\n\n.list__item .services {\n  color: #f72d71; }\n\n.list__item .beaute--sante-et-bien-etre {\n  color: #a27659; }\n\n.list__item .restauration {\n  color: #4a3ced; }\n\n.list__item .maison-et-deco {\n  color: #cdf073; }\n\n.list__item .loisirs-et-divertissements {\n  color: #a0b26e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWFydGhlZXBhbi9Eb2N1bWVudHMvcGFucGFuL2hldGljL3M0L2FuZ3VsYXIvTUVBTmFwcC9BTkdjbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21lcmNoYW50LWNhcmQvbWVyY2hhbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQUluRDtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdmO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lcmNoYW50LWNhcmQvbWVyY2hhbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaXN0OiBhbGltZW50YXRpb24sIHNlcnZpY2VzLCBiZWF1dGUtLXNhbnRlLWV0LWJpZW4tZXRyZSwgcmVzdGF1cmF0aW9uLCBtYWlzb24tZXQtZGVjbywgbG9pc2lycy1ldC1kaXZlcnRpc3NlbWVudHM7XG5cbkBlYWNoICRpdGVtIGluICRsaXN0IHtcbiAgLiN7JGl0ZW19IHtcbiAgICBjb2xvcjogcmdiKHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSwgcmFuZG9tKDI1NSkpO1xuICB9XG59XG4ubGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICZfX2l0ZW0gLiN7JGl0ZW19IHtcbiAgICAgIGNvbG9yOiByZ2IocmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSk7XG4gICAgfVxuICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/merchant-card/merchant-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/merchant-card/merchant-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: MerchantCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantCardComponent", function() { return MerchantCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MerchantCardComponent = /** @class */ (function () {
    function MerchantCardComponent() {
    }
    MerchantCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MerchantCardComponent.prototype, "merchant", void 0);
    MerchantCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merchant-card',
            template: __webpack_require__(/*! ./merchant-card.component.html */ "./src/app/components/merchant-card/merchant-card.component.html"),
            styles: [__webpack_require__(/*! ./merchant-card.component.scss */ "./src/app/components/merchant-card/merchant-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MerchantCardComponent);
    return MerchantCardComponent;
}());



/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"merchantCollection\">\n  <div class=\"list__container\">\n    <div \n      *ngFor=\"let item of categoriesCollection\" \n      class=\"list__item\"\n      [class]=\"{'list__item': true, 'active': activeCategory === item.slug}\" \n      (click)=\"filterCategory(item.slug)\"\n    >\n      {{ item.name }}\n    </div>\n  </div>\n  <!-- {{merchantCollection | json}} -->\n  <app-merchant-card [merchant]=\"(filteredCategory.length > 0) ? filteredCategory : merchantCollection\"></app-merchant-card>\n<div>\nlol"

/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alimentation {\n  color: #e4b621; }\n\n.services {\n  color: #b822b0; }\n\n.beaute--sante-et-bien-etre {\n  color: #e6b210; }\n\n.restauration {\n  color: #560b3e; }\n\n.maison-et-deco {\n  color: #d4b349; }\n\n.loisirs-et-divertissements {\n  color: #77dbbf; }\n\n.list__item {\n  display: inline-block;\n  padding: 5px 15px;\n  cursor: pointer; }\n\n.list__item .alimentation {\n  color: #990295; }\n\n.list__item .services {\n  color: #0b6c73; }\n\n.list__item .beaute--sante-et-bien-etre {\n  color: #0a6f56; }\n\n.list__item .restauration {\n  color: #b86ef9; }\n\n.list__item .maison-et-deco {\n  color: #3bc9a3; }\n\n.list__item .loisirs-et-divertissements {\n  color: #3dc324; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYWFydGhlZXBhbi9Eb2N1bWVudHMvcGFucGFuL2hldGljL3M0L2FuZ3VsYXIvTUVBTmFwcC9BTkdjbGllbnQvc3JjL2FwcC9yb3V0ZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQUluRDtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdmO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUE7O0FBRG5EO0VBQ0UsY0FBaUQsRUFBQTs7QUFEbkQ7RUFDRSxjQUFpRCxFQUFBOztBQURuRDtFQUNFLGNBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaXN0OiBhbGltZW50YXRpb24sIHNlcnZpY2VzLCBiZWF1dGUtLXNhbnRlLWV0LWJpZW4tZXRyZSwgcmVzdGF1cmF0aW9uLCBtYWlzb24tZXQtZGVjbywgbG9pc2lycy1ldC1kaXZlcnRpc3NlbWVudHM7XG5cbkBlYWNoICRpdGVtIGluICRsaXN0IHtcbiAgLiN7JGl0ZW19IHtcbiAgICBjb2xvcjogcmdiKHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSwgcmFuZG9tKDI1NSkpO1xuICB9XG59XG4ubGlzdCB7XG4gICZfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICZfX2l0ZW0gLiN7JGl0ZW19IHtcbiAgICAgIGNvbG9yOiByZ2IocmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpLCByYW5kb20oMjU1KSk7XG4gICAgfVxuICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/merchant/merchant.service */ "./src/app/services/merchant/merchant.service.ts");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(merchantService) {
        var _this = this;
        this.merchantService = merchantService;
        this.categoriesCollectionSlug = [];
        this.categoriesCollection = [];
        this.filteredCategory = [];
        this.getMerchantList = function () {
            _this.merchantService.readAllItems()
                .then(function (apiResponse) {
                _this.merchantCollection = apiResponse.data;
                _this.getMerchantCategories(apiResponse.data);
            });
        };
        this.getMerchantCategories = function (data) {
            data.map(function (item) {
                console.log(item.category.slug);
                if (_this.categoriesCollectionSlug.indexOf(item.category.slug) === -1) {
                    _this.categoriesCollectionSlug.push(item.category.slug);
                    _this.categoriesCollection.push(item.category);
                }
            });
        };
        this.filterCategory = function (slug) {
            _this.filteredCategory = _this.merchantCollection.filter(function (el) { return el.category.slug === slug; });
            _this.activeCategory = slug;
        };
        this.sortMerchant = function (slug) {
            console.log({ slug: slug });
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getMerchantList();
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/routes/home-page/home-page.component.html"),
            providers: [_services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"]],
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/routes/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");
/* harmony import */ var _components_merchant_card_merchant_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/merchant-card/merchant-card.component */ "./src/app/components/merchant-card/merchant-card.component.ts");






var Module = /** @class */ (function () {
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _components_merchant_card_merchant_card_component__WEBPACK_IMPORTED_MODULE_5__["MerchantCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_4__["Routing"]
            ]
        })
    ], Module);
    return Module;
}());



/***/ }),

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");


var route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"],
    }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);


/***/ }),

/***/ "./src/app/services/merchant/merchant.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/merchant/merchant.service.ts ***!
  \*******************************************************/
/*! exports provided: MerchantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantService", function() { return MerchantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MerchantService = /** @class */ (function () {
    function MerchantService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.readAllItems = function () {
            return _this.httpClient.get(_this.apiUrl)
                .toPromise()
                .then(_this.getData)
                .catch(_this.handleError);
        };
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MerchantService.prototype.getData = function (res) {
        return res || {};
    };
    MerchantService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    MerchantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MerchantService);
    return MerchantService;
}());



/***/ })

}]);
//# sourceMappingURL=routes-home-page-module.js.map
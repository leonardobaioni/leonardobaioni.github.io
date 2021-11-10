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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-filters/cat-filters.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-filters/cat-filters.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters-container\">\r\n  <div class=\"filter\">\r\n    <h2> Marca </h2>\r\n    <ul>\r\n      <li *ngFor=\"let filter of filters.marca\" (click)=\"applyFilterFn('MARCA', filter)\"\r\n        [ngClass]=\"{ 'selected': filter.selected }\"> {{ filter.value }} </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"filter\">\r\n    <h2> Potenza </h2>\r\n    <ul>\r\n      <li *ngFor=\"let filter of filters.potenza\" (click)=\"applyFilterFn('POTENZA', filter)\"\r\n        [ngClass]=\"{ 'selected': filter.selected }\"> {{ filter.value }} Watt </li>\r\n    </ul>\r\n  </div>\r\n  <!-- <div class=\"filter\">\r\n    <h2> Prezzo </h2>\r\n    <input class=\"price\" type=\"number\" placeholder=\"Da\">\r\n    <input class=\"price\" type=\"number\" placeholder=\"A\">\r\n  </div> -->\r\n  <!-- <div class=\"filter\">\r\n    <h2> Filtri Applicati </h2>\r\n  </div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-grid/cat-grid.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-grid/cat-grid.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row items-container\">\r\n  <div class=\"col-sm-3\" *ngFor=\"let item of filteredItems\">\r\n    <div class=\"item card\">\r\n      <img class=\"card-img-top\" [src]=\"item.getDisplayedImagePath()\" [alt]=\"item.getTitle()\"\r\n        (mouseover)=\"item.onImageMouseOver()\" (mouseout)=\"item.onImageMouseOut()\" (click)=\"openDetail(item)\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title title\" (click)=\"openDetail(item)\"> {{ item.getTitle() }} </h5>\r\n        <p class=\"card-text categoria\"> {{ item.categoria }} </p>\r\n        <p class=\"card-text prezzo\" *ngIf=\"!item.noPrice\"> {{ item.prezzo | currency: 'EUR':'symbol':'0.2-2' }} </p>\r\n        <p class=\"card-text coming-soon\" *ngIf=\"item.noPrice\"> {{ item.noPriceLabel }} </p>\r\n        <!-- <a href=\"#\" class=\"btn btn-primary\"> Aggiungi al carrello </a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-item/cat-item.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-item/cat-item.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  cat-item works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-title/cat-title.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-title/cat-title.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <h1 class=\"col title\">\r\n    <ng-content></ng-content>\r\n  </h1>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/container/container.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/container/container.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <ng-content></ng-content>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/content/content.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/content/content.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row content\">\r\n  <div class=\"col-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row footer\">\r\n  <div class=\"col-4 logo\">\r\n    <img src=\"/assets/img/logo.png\" class=\"logo\" alt=\"GTS Car\">\r\n  </div>\r\n  <div class=\"col-4 info\">\r\n    <p class=\"title\"> CONCESSIONARIO </p>\r\n    <p> via Mario Rigamonti 100 (C.C. I Granai) </p>\r\n    <p> 00142 Roma (RM) </p>\r\n    <p> 06 4544 7456 </p>\r\n  </div>\r\n  <div class=\"col-4 info\">\r\n    <p class=\"title\"> OFFICINA </p>\r\n    <p> via di Grotta Perfetta 333 </p>\r\n    <p> 00142 Roma (RM) </p>\r\n    <p> 06 4554 1974 </p>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row header\">\r\n  <div class=\"col-4 logo\">\r\n    <img src=\"/assets/img/logo.png\" class=\"logo\" alt=\"GTS Car\" (click)=\"redirectToHome()\">\r\n  </div>\r\n  <div class=\"col-6 navbar\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n  <div class=\"col-2\"></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_component/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"page.path\" *ngFor=\"let page of pages\"> {{ page.title?.toUpperCase() }} </a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container>\r\n  <app-header></app-header>\r\n  <app-content></app-content>\r\n  <app-footer></app-footer>\r\n</app-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/countdown/countdown.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countdown/countdown.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"countdown-card days\">\r\n  {{ countdown.getDays() | number: '2.0' }}\r\n</div>\r\n\r\n<div class=\"countdown-card hours\">\r\n  {{ countdown.getHours() | number: '2.0' }}\r\n</div>\r\n\r\n<div class=\"countdown-card minutes\">\r\n  {{ countdown.getMinutes() | number: '2.0' }}\r\n</div>\r\n\r\n<div class=\"countdown-card seconds\">\r\n  {{ countdown.getSeconds() | number: '2.0' }}\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center\">\r\n  <div class=\"col-8\">\r\n    <app-cat-grid #catGrid [items]=\"items\"></app-cat-grid>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  not-found works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accessori/accessori.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accessori/accessori.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cat-title> Accessori </app-cat-title>\r\n<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <!-- <app-cat-filters #catFilter [filters]=\"filters\" (applyFilter)=\"catGrid.applyFilter($event)\"\r\n      (removeFilter)=\"catGrid.removeFilter($event)\"></app-cat-filters> -->\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <app-cat-grid #catGrid [items]=\"items\"></app-cat-grid>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auto/auto.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auto/auto.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cat-title> Auto </app-cat-title>\r\n<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <app-cat-filters #catFilter [filters]=\"filters\" (applyFilter)=\"catGrid.applyFilter($event)\"\r\n      (removeFilter)=\"catGrid.removeFilter($event)\"></app-cat-filters>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <app-cat-grid #catGrid [items]=\"items\"></app-cat-grid>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chi-siamo/chi-siamo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chi-siamo/chi-siamo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  chi-siamo works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatti/contatti.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatti/contatti.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  contatti works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebike/ebike.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebike/ebike.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  ebike works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/elenco-prodotti/elenco-prodotti.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/elenco-prodotti/elenco-prodotti.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cat-title> {{ title }} </app-cat-title>\r\n<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <app-cat-filters #catFilter [filters]=\"filters\" (applyFilter)=\"catGrid.applyFilter($event)\"\r\n      (removeFilter)=\"catGrid.removeFilter($event)\"></app-cat-filters>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <app-cat-grid #catGrid [items]=\"items\"></app-cat-grid>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/monopattini/monopattini.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/monopattini/monopattini.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-elenco-prodotti title=\"Monopattini\" [items]=\"items\" [filters]=\"filters\"></app-elenco-prodotti>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moto/moto.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moto/moto.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-elenco-prodotti title=\"Moto\" [items]=\"items\" [filters]=\"filters\"></app-elenco-prodotti>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scheda-prodotto/scheda-prodotto.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scheda-prodotto/scheda-prodotto.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"item\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"main-image-container\">\r\n        <img class=\"img-main\" [src]=\"item.getDisplayedImagePath()\" [alt]=\"item.getTitle()\">\r\n      </div>\r\n      <div class=\"image-preview-container\" *ngFor=\"let imagePath of item.imagesPath\">\r\n        <img class=\"img-preview\" [src]=\"imagePath\" [alt]=\"item.getTitle()\"\r\n          (click)=\"item.changeDisplayedImagePath(imagePath)\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h1 class=\"title\"> {{ item.getTitle() }} </h1>\r\n      <h5 class=\"price\"> {{ item.prezzo | currency: 'EUR':'symbol':'0.2-2' }} </h5>\r\n      <p class=\"description\" [innerHTML]=\"item.descrizione\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"item.hasCaratteristiche()\">\r\n    <div class=\"col\">\r\n      <h1> Caratteristiche </h1>\r\n      <table>\r\n        <tr *ngFor=\"let caratteristica of item.caratteristiche\">\r\n          <td class=\"car-property\"> {{ caratteristica.property }} </td>\r\n          <td class=\"car-value\"> {{ caratteristica.value }} </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scooter/scooter.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scooter/scooter.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-elenco-prodotti title=\"Scooter\" [items]=\"items\" [filters]=\"filters\"></app-elenco-prodotti>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-elenco-prodotti title=\"Scooter\" [items]=\"items\" [filters]=\"filters\"></app-elenco-prodotti>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_component/cat-filters/cat-filters.component.css":
/*!******************************************************************!*\
  !*** ./src/app/_component/cat-filters/cat-filters.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.filters-container {\r\n    padding: 0 1rem;\r\n}\r\n\r\ninput.price {\r\n    padding: .5rem;\r\n    margin-right: 1rem;\r\n    width: calc(50% - 1rem);\r\n    max-width: 8rem;\r\n}\r\n\r\ndiv.filter {\r\n    padding-bottom: 2rem;\r\n}\r\n\r\ndiv.filter ul {\r\n    margin-bottom: 0;\r\n}\r\n\r\ndiv.filter li.selected {\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.filter li {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9jYXQtZmlsdGVycy9jYXQtZmlsdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudC9jYXQtZmlsdGVycy9jYXQtZmlsdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmZpbHRlcnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuaW5wdXQucHJpY2Uge1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcclxuICAgIG1heC13aWR0aDogOHJlbTtcclxufVxyXG5cclxuZGl2LmZpbHRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuZGl2LmZpbHRlciB1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5kaXYuZmlsdGVyIGxpLnNlbGVjdGVkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXYuZmlsdGVyIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/_component/cat-filters/cat-filters.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_component/cat-filters/cat-filters.component.ts ***!
  \*****************************************************************/
/*! exports provided: CatFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatFiltersComponent", function() { return CatFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatFiltersComponent = class CatFiltersComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.applyFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    applyFilterFn(property, filter) {
        if (filter.selected) {
            filter.selected = false;
            this.removeFilter.emit({ property, value: filter.value });
        }
        else {
            filter.selected = true;
            this.applyFilter.emit({ property, value: filter.value });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CatFiltersComponent.prototype, "filters", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CatFiltersComponent.prototype, "applyFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CatFiltersComponent.prototype, "removeFilter", void 0);
CatFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-filters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-filters/cat-filters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-filters.component.css */ "./src/app/_component/cat-filters/cat-filters.component.css")).default]
    })
], CatFiltersComponent);



/***/ }),

/***/ "./src/app/_component/cat-grid/cat-grid.component.css":
/*!************************************************************!*\
  !*** ./src/app/_component/cat-grid/cat-grid.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.items-container {\r\n    padding-bottom: 3rem;\r\n}\r\n\r\ndiv.item {\r\n    width: 16rem;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 1rem;\r\n}\r\n\r\ndiv.items-container div.col-3 {\r\n    padding-bottom: 1rem;\r\n}\r\n\r\nh5.title, p.categoria, p.prezzo {\r\n    text-align: center;\r\n}\r\n\r\nh5.title {\r\n    font-size: 1.45rem;\r\n}\r\n\r\np.categoria {\r\n    text-transform: uppercase;\r\n    font-size: .8rem;\r\n    font-weight: 600;\r\n}\r\n\r\np.prezzo {\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\np.prezzo::first-letter {\r\n    padding-right: 0.3em;\r\n}\r\n\r\nimg.card-img-top, h5.title {\r\n    cursor: pointer;\r\n}\r\n\r\n.coming-soon {\r\n    color: rgb(165, 30, 10);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9jYXQtZ3JpZC9jYXQtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvY2F0LWdyaWQvY2F0LWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5pdGVtcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbmRpdi5pdGVtIHtcclxuICAgIHdpZHRoOiAxNnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuZGl2Lml0ZW1zLWNvbnRhaW5lciBkaXYuY29sLTMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbmg1LnRpdGxlLCBwLmNhdGVnb3JpYSwgcC5wcmV6em8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNS50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbn1cclxuXHJcbnAuY2F0ZWdvcmlhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxucC5wcmV6em8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnAucHJlenpvOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbmltZy5jYXJkLWltZy10b3AsIGg1LnRpdGxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbWluZy1zb29uIHtcclxuICAgIGNvbG9yOiByZ2IoMTY1LCAzMCwgMTApO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/_component/cat-grid/cat-grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/_component/cat-grid/cat-grid.component.ts ***!
  \***********************************************************/
/*! exports provided: CatGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatGridComponent", function() { return CatGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_service/shared.service */ "./src/app/_service/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let CatGridComponent = class CatGridComponent {
    constructor(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.filters = { marca: [], potenza: [] };
        this.filteredItems = [];
        this.items = [];
    }
    ngOnInit() {
        this.filteredItems = this.items;
    }
    openDetail(item) {
        this.sharedService.selectedItem = item;
        this.router.navigate(['/prodotto/scheda']);
    }
    applyFilter(filter) {
        this.filters[filter.property.toLowerCase()].push({ value: filter.value });
        this.buildFilteredItems();
    }
    removeFilter(filter) {
        this.filters[filter.property.toLowerCase()] = this.filters[filter.property.toLowerCase()].filter(el => el.value !== filter.value);
        this.buildFilteredItems();
    }
    buildFilteredItems() {
        this.filteredItems = this.items.filter(item => {
            return (this.filters.marca.length === 0 || this.filters.marca.map(marca => marca.value).includes(item.marca))
                && (this.filters.potenza.length === 0 || this.filters.potenza.map(potenza => potenza.value).includes(item.potenza));
        });
    }
};
CatGridComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], CatGridComponent.prototype, "items", void 0);
CatGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cat-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-grid/cat-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-grid.component.css */ "./src/app/_component/cat-grid/cat-grid.component.css")).default]
    })
], CatGridComponent);



/***/ }),

/***/ "./src/app/_component/cat-item/cat-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/_component/cat-item/cat-item.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvY2F0LWl0ZW0vY2F0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/_component/cat-item/cat-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/_component/cat-item/cat-item.component.ts ***!
  \***********************************************************/
/*! exports provided: CatItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatItemComponent", function() { return CatItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatItemComponent = class CatItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-item/cat-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-item.component.css */ "./src/app/_component/cat-item/cat-item.component.css")).default]
    })
], CatItemComponent);



/***/ }),

/***/ "./src/app/_component/cat-title/cat-title.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_component/cat-title/cat-title.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1.title {\r\n    padding: 1rem 1.75rem;\r\n    font-size: 4rem;\r\n    text-transform: capitalize;\r\n    background: rgba(45, 80, 101, 20%);\r\n    color: #1F3344;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9jYXQtdGl0bGUvY2F0LXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvY2F0LXRpdGxlL2NhdC10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEudGl0bGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA4MCwgMTAxLCAyMCUpO1xyXG4gICAgY29sb3I6ICMxRjMzNDQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/_component/cat-title/cat-title.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_component/cat-title/cat-title.component.ts ***!
  \*************************************************************/
/*! exports provided: CatTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatTitleComponent", function() { return CatTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatTitleComponent = class CatTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-title',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/cat-title/cat-title.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-title.component.css */ "./src/app/_component/cat-title/cat-title.component.css")).default]
    })
], CatTitleComponent);



/***/ }),

/***/ "./src/app/_component/container/container.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_component/container/container.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/_component/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_component/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContainerComponent = class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/container/container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container.component.css */ "./src/app/_component/container/container.component.css")).default]
    })
], ContainerComponent);



/***/ }),

/***/ "./src/app/_component/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/_component/content/content.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n    min-height: 8rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/_component/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/_component/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/app/_component/content/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/_component/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/_component/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n    min-height: 8rem;\r\n    background-color: #2D5065;\r\n    color: #fff;\r\n}\r\n\r\ndiv.logo, div.info {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nimg.logo {\r\n    width: 75%;\r\n    max-width: 12rem;\r\n    margin: 1rem auto;\r\n}\r\n\r\ndiv.info p {\r\n    margin-bottom: 0;\r\n}\r\n\r\ndiv.info p.title {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENTA2NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYubG9nbywgZGl2LmluZm8ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcubG9nbyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWF4LXdpZHRoOiAxMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5kaXYuaW5mbyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmRpdi5pbmZvIHAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/_component/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_component/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/_component/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/_component/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/_component/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n    min-height: 8rem;\r\n    background-image: linear-gradient(#f0f0f0, #eeeeee);\r\n    box-shadow: 0 0 20px 2px #bbb;\r\n}\r\n\r\ndiv.logo, div.navbar {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nimg.logo {\r\n    width: 75%;\r\n    max-width: 22rem;\r\n    margin: 1rem auto;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbURBQW1EO0lBQ25ELDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2YwZjBmMCwgI2VlZWVlZSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggI2JiYjtcclxufVxyXG5cclxuZGl2LmxvZ28sIGRpdi5uYXZiYXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcubG9nbyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/_component/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_component/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToHome() {
        this.router.navigate(['']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/_component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/_component/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/_component/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: #333;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    position: relative;\r\n    margin: 0 .5rem;\r\n    padding: 0.2em 0;\r\n    overflow: hidden;\r\n}\r\n\r\na::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 0.1em;\r\n    background-color: #3ECE33;\r\n    opacity: 1;\r\n    transition: opacity 300ms, transform 300ms;\r\n    transform: translate3d(-100%, 0, 0);\r\n}\r\n\r\na:hover::after, a:focus::after {\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFQ0UzMztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxufVxyXG5cclxuYTpob3Zlcjo6YWZ0ZXIsIGE6Zm9jdXM6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/_component/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_component/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_constant/path */ "./src/app/_constant/path.ts");



let NavbarComponent = class NavbarComponent {
    constructor() {
        this.pages = [];
    }
    ngOnInit() {
        this.pages = this.getNavbarPages();
    }
    getNavbarPages() {
        // TODO: GET NavbarPages
        const arr = [
            { title: 'Homepage', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].HOMEPAGE, showInNavbar: true, navbarPosition: 1 },
            { title: 'Auto', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].AUTO, showInNavbar: false, navbarPosition: 2 },
            { title: 'Moto', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].MOTO, showInNavbar: true, navbarPosition: 3 },
            { title: 'Scooter', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].SCOOTER, showInNavbar: true, navbarPosition: 4 },
            { title: 'E-Bike', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].EBIKE, showInNavbar: false, navbarPosition: 5 },
            { title: 'Monopattini', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].MONOPATTINI, showInNavbar: true, navbarPosition: 6 },
            { title: 'Veicoli da Lavoro', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].VEICOLI_DA_LAVORO, showInNavbar: true, navbarPosition: 7 },
            { title: 'Accessori', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].ACCESSORI, showInNavbar: true, navbarPosition: 8 },
            { title: 'Chi Siamo', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].CHI_SIAMO, showInNavbar: false, navbarPosition: 9 },
            { title: 'Contatti', path: src_app_constant_path__WEBPACK_IMPORTED_MODULE_2__["Path"].CONTATTI, showInNavbar: false, navbarPosition: 10 }
        ]; // MOCK
        return arr.filter(page => page.showInNavbar).sort((a, b) => a.navbarPosition - b.navbarPosition);
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_component/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/_component/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/_constant/path.ts":
/*!***********************************!*\
  !*** ./src/app/_constant/path.ts ***!
  \***********************************/
/*! exports provided: Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Path {
}
Path.HOME = 'home';
Path.HOMEPAGE = 'homepage';
Path.COUNTDOWN = 'countdown';
Path.AUTO = 'auto';
Path.MOTO = 'moto';
Path.SCOOTER = 'scooter';
Path.EBIKE = 'ebike';
Path.MONOPATTINI = 'monopattini';
Path.VEICOLI_DA_LAVORO = 'veicoli-da-lavoro';
Path.ACCESSORI = 'accessori';
Path.SCHEDA_PRODOTTO = 'prodotto';
Path.CHI_SIAMO = 'chi-siamo';
Path.CONTATTI = 'contatti';


/***/ }),

/***/ "./src/app/_mock/record.ts":
/*!*********************************!*\
  !*** ./src/app/_mock/record.ts ***!
  \*********************************/
/*! exports provided: Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_viewmodel/cat-item */ "./src/app/_viewmodel/cat-item.ts");


class Record {
    static getAll() {
        const items = [
            Record.MONOPATTINI,
            Record.MOTO,
            Record.SCOOTER,
            Record.ACCESSORI,
            Record.AUTO,
            Record.VEICOLI_DA_LAVORO
        ];
        return items.reduce((a, b) => a.concat(b), []);
    }
}
Record.ACCESSORI = [
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Parabrezza Robo-S',
        modello: '(PMMA Classic)',
        categoria: 'Accessori',
        prezzo: 97.6,
        imagesPath: ['assets/img/parabrezza-robo-s/pmma-classic.jpg']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Portapacchi Robo-S',
        modello: '(PMMA Fumè)',
        categoria: 'Accessori',
        prezzo: 109.8,
        imagesPath: ['assets/img/portapacchi-robo-s/pmma-fume.jpg']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Portapacchi Robo-S',
        modello: '(PMMA Trasparente)',
        categoria: 'Accessori',
        prezzo: 97.6,
        imagesPath: ['assets/img/portapacchi-robo-s/pmma-trasparente.jpg']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Portapacchi Robo-S',
        modello: '(Acciaio Nero)',
        categoria: 'Accessori',
        prezzo: 85.4,
        imagesPath: ['assets/img/portapacchi-robo-s/acciaio-nero.jpg']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Portapacchi Robo-S',
        modello: '(Piastra per Delivery)',
        categoria: 'Accessori',
        prezzo: 146.4,
        imagesPath: ['assets/img/portapacchi-robo-s/piastra-per-delivery.jpg',
            'assets/img/portapacchi-robo-s/piastra-per-delivery-02.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-03.jpg',
            'assets/img/portapacchi-robo-s/piastra-per-delivery-04.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-05.jpg',
            'assets/img/portapacchi-robo-s/piastra-per-delivery-06.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-07.jpg',
            'assets/img/portapacchi-robo-s/piastra-per-delivery-08.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-09.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Casco Airflow',
        categoria: 'Accessori',
        prezzo: 79.0,
        imagesPath: [
            'assets/img/casco-ls2/01.jpg', 'assets/img/casco-ls2/02.jpg', 'assets/img/casco-ls2/03.jpg',
            'assets/img/casco-ls2/04.jpg', 'assets/img/casco-ls2/05.jpg', 'assets/img/casco-ls2/06.jpg',
            'assets/img/casco-ls2/07.jpg', 'assets/img/casco-ls2/08.jpg', 'assets/img/casco-ls2/09.jpg',
            'assets/img/casco-ls2/10.jpg', 'assets/img/casco-ls2/11.jpg', 'assets/img/casco-ls2/12.jpg',
            'assets/img/casco-ls2/13.jpg', 'assets/img/casco-ls2/14.jpg', 'assets/img/casco-ls2/15.jpg',
            'assets/img/casco-ls2/16.jpg', 'assets/img/casco-ls2/17.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Giacca antipioggia',
        categoria: 'Accessori',
        prezzo: 69.0,
        imagesPath: [
            'assets/img/giacca-ls2/01.jpg', 'assets/img/giacca-ls2/02.jpg', 'assets/img/giacca-ls2/03.jpg', 'assets/img/giacca-ls2/04.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Guanti neri (con protezioni)',
        categoria: 'Accessori',
        prezzo: 49.99,
        imagesPath: [
            'assets/img/guanti-ls2/con-protezioni/black/01.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Guanti viola (con protezioni)',
        categoria: 'Accessori',
        prezzo: 49.99,
        imagesPath: [
            'assets/img/guanti-ls2/con-protezioni/purple/01.jpg',
            'assets/img/guanti-ls2/con-protezioni/purple/02.jpg',
            'assets/img/guanti-ls2/con-protezioni/purple/03.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Guanti neri',
        categoria: 'Accessori',
        prezzo: 39.99,
        imagesPath: [
            'assets/img/guanti-ls2/black/01.jpg',
            'assets/img/guanti-ls2/black/02.jpg'
        ]
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'LS2',
        modello: 'Guanti neri e grigi',
        categoria: 'Accessori',
        prezzo: 39.99,
        imagesPath: [
            'assets/img/guanti-ls2/black-and-grey/01.png'
        ]
    })
];
Record.MOTO = [
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Sunra',
        modello: 'Miku Max',
        categoria: 'Moto',
        descrizione: 'I fari Full LED illuminano il percorso garantendo un ampio raggio di visibilità ed una proiezione che raggiunge i 12 metri. <br> Il quadro strumenti Full Digital ha un design minimale e compatto, inclusivo di tutti gli indicatori necessari per il conducente: velocità massima, livello di carica della batteria, connessione Bluetooth e tanto altro. <br> Il motore 800W e le sospensioni Bosch®️ garantiscono prestazioni ottimizzate a potenza costante e comfort durante il tragitto. <br> Il vano sottosella può contenere tutto ciò di cui necessiti, oltre ad una comoda porta USB per ricaricare il tuo smartphone durante la guida, in un vano protetto da urti e sbalzi.',
        caratteristiche: [
            { property: 'Motore', value: '800W BOSCH Technology Field Oriented Control' },
            { property: 'Autonomia', value: '60 km' },
            { property: 'Velocità', value: '45 km/h' },
            { property: 'Carico Massimo', value: '1 persona (70kg/persona)' },
            { property: 'Ricarica', value: '4 ore (0-100%)' },
            { property: 'Batteria', value: '60V 20AH a litio, estraibile' }
        ],
        potenza: 800,
        prezzo: 2499,
        imagesPath: ['assets/img/miku-max/01.png', 'assets/img/miku-max/02.png', 'assets/img/miku-max/03.png',
            'assets/img/miku-max/04.png', 'assets/img/miku-max/05.png', 'assets/img/miku-max/06.png',
            'assets/img/miku-max/07.png', 'assets/img/miku-max/08.png']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Sunra',
        modello: 'Miku Super',
        categoria: 'Moto',
        descrizione: 'Non dovrai più scegliere tra Potenza e Comfort: con il nuovo MIKU Super puoi averli entrambi. Il design unico e dalle curve sportive racchiude la potenza del motore Bosch®️ da 3000W. La sella ergonomica studiata da Sunra EV garantisce comfort per tutta la durata del tuo viaggio. <br> Il quadro strumenti permette una visualizzazione immediata di tutte le informazioni necessarie al conducente, senza ulteriori distrazioni. <br> La forma del faro anteriore con illuminazione Full LED rende immediatamente riconoscibile lo scooter e si fa notare sin dal primo approccio visivo. <br> Lo scooter è dotato di doppia batteria estraibile e portatile, facilmente rimovibile. Il sistema di gestione delle batterie assicura tolleranza degli errori e migliori performance. <br> Modalità di guida adattabili al tuo stile e al tipo di percorso. Il cruise control ti permette di regolare la velocità di guida facilitando la percorrenza sui lunghi tratti.',
        caratteristiche: [
            { property: 'Motore', value: '3000W Sunra' },
            { property: 'Autonomia', value: '135 km' },
            { property: 'Velocità', value: '80 km/h' },
            { property: 'Carico Massimo', value: '2 persone (70kg/persona)' },
            { property: 'Ricarica', value: '4 ore (0-100%)' },
            { property: 'Batteria', value: '2 * 72V 20AH a litio, estraibili' }
        ],
        potenza: 200,
        prezzo: null,
        imagesPath: ['assets/img/miku-super/01.png', 'assets/img/miku-super/02.png', 'assets/img/miku-super/03.png',
            'assets/img/miku-super/04.png', 'assets/img/miku-super/05.png', 'assets/img/miku-super/06.png',
            'assets/img/miku-super/07.png', 'assets/img/miku-super/08.png', 'assets/img/miku-super/09.png',
            'assets/img/miku-super/10.png', 'assets/img/miku-super/11.png', 'assets/img/miku-super/12.png'],
        noPriceLabel: 'IN ARRIVO'
    })
];
Record.MONOPATTINI = [
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Sunra',
        modello: 'X7',
        categoria: 'Monopattini',
        potenza: 350,
        prezzo: 399,
        imagesPath: ['assets/img/x7/01.png', 'assets/img/x7/02.png', 'assets/img/x7/03.png', 'assets/img/x7/04.png',
            'assets/img/x7/05.png', 'assets/img/x7/06.png', 'assets/img/x7/07.png', 'assets/img/x7/08.png']
    }),
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Sunra',
        modello: 'X8',
        categoria: 'Monopattini',
        potenza: 350,
        prezzo: 499,
        imagesPath: ['assets/img/x8/01.png', 'assets/img/x8/02.png', 'assets/img/x8/03.png']
    })
];
Record.SCOOTER = [
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Sunra',
        modello: 'Robo-S',
        categoria: 'Scooter',
        descrizione: 'Robo-S è uno scooter elettrico 125  (categoria L3) innovativo, potente e connesso adatto all’uso quotidiano cittadino.  È costruito per offrire prestazioni elevate in termini di autonomia e di velocità. <br> Lo scooter a primo impatto si presenta con un grande look sportivo grazie al suo gruppo ottico full-led, per poi mostrare il suo cuore digitale con il quadro comandi full-digital, il Touch ID e l’app per il controllo e la diagnostica da remoto. <br> A differenza degli altri scooter elettrici il Robo-s raggiunge una velocità di 90km/h, e dispone di un vano sottosella spazioso che può contenere uno casco jet di grosse dimensioni.',
        caratteristiche: [
            { property: 'Lunghezza', value: '1.750 mm' },
            { property: 'Larghezza', value: '770 mm' },
            { property: 'Altezza sella da terra MIN', value: '770 mm' },
            { property: 'Interasse', value: '1.305 mm' },
            { property: 'Peso a secco', value: '100 Kg' },
            { property: 'Tipo motore', value: 'Elettrico' },
            { property: 'Potenza', value: '3 kW (4,1 CV)' },
            { property: 'Emissioni', value: 'Zero Emissioni' },
            { property: 'Tipologia cambio', value: 'Diretta' },
            { property: 'Trasmissione finale', value: 'Ingranaggi' },
            { property: 'Velocità massima', value: '90 km/h' },
            { property: 'Telaio', value: 'Monotrave - Acciaio' },
            { property: 'Sospensione anteriore', value: 'Forcella telescopica' },
            { property: 'Sospensione posteriore', value: 'Forcellone' },
            { property: 'Tipo freno anteriore', value: 'Disco' },
            { property: 'Misura freno anteriore', value: '220 mm' },
            { property: 'Tipo freno posteriore', value: 'Disco' },
            { property: 'Misura freno posteriore', value: '180 mm' },
            { property: 'Misura cerchio anteriore', value: '12 pollici' },
            { property: 'Pneumatico anteriore', value: '110/70 R12 53J-R12"' },
            { property: 'Misura cerchio posteriore', value: '12 pollici' },
            { property: 'Pneumatico posteriore', value: '110/70 R12 53J-R12"' }
        ],
        potenza: 3000,
        prezzo: 3999,
        imagesPath: ['assets/img/robo-s/01.png', 'assets/img/robo-s/02.png', 'assets/img/robo-s/03.png', 'assets/img/robo-s/04.png',
            'assets/img/robo-s/05.png', 'assets/img/robo-s/06.png', 'assets/img/robo-s/07.png', 'assets/img/robo-s/08.png']
    })
];
Record.AUTO = [];
Record.VEICOLI_DA_LAVORO = [
    _viewmodel_cat_item__WEBPACK_IMPORTED_MODULE_1__["CatItem"].init({
        marca: 'Regis',
        modello: 'Epic0 - Pickup Cassonato',
        categoria: 'Veicoli da lavoro',
        descrizione: 'Il veicolo è stato concepito valutando le esigenze del mercato dell’elettrico e coniugandole ad una progettazione funzionale che rispondesse agli aspetti da noi ritenuti prioritari',
        caratteristiche: [
            { property: 'Dimensioni esterne (Lu X La X H (mm))', value: '3.700 X 1.500 X 1.640' },
            { property: 'Piano di carico (Lu X La (mm))', value: '1.520 X 1.450' },
            { property: 'Portata', value: '700 Kg' },
            { property: 'Autonomia', value: '130 - 160 KM' },
            { property: 'Tempo di ricarica standard (Carica batteria 3,3 kW)', value: '4,5 H' },
            { property: 'Tempo di ricarica fast charge (Carica batteria 6,6 kW)', value: '2,5 H' },
            { property: 'Dimensioni cassone (Lu X La X H sponde (mm))', value: '1.570 X 1.500 X 350-400' },
            { property: 'Altezza  piano di carico', value: '700 mm' }
        ],
        potenza: null,
        prezzo: null,
        imagesPath: [
            'assets/img/epico-finito-male/pickup-cassonato/01.jpg',
            'assets/img/epico-finito-male/pickup-cassonato/02.jpg',
            'assets/img/epico-finito-male/pickup-cassonato/03.png'
        ],
        noPriceLabel: 'DISPONIBILE'
    })
];


/***/ }),

/***/ "./src/app/_service/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/_service/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SharedService = class SharedService {
    constructor() { }
};
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/_viewmodel/cat-item.ts":
/*!****************************************!*\
  !*** ./src/app/_viewmodel/cat-item.ts ***!
  \****************************************/
/*! exports provided: CatItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatItem", function() { return CatItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CatItem {
    constructor(marca, modello, descrizione, categoria, potenza, prezzo, noPriceLabel, imagesPath = [], caratteristiche = []) {
        this.marca = marca;
        this.modello = modello;
        this.descrizione = descrizione;
        this.categoria = categoria;
        this.potenza = potenza;
        this.prezzo = prezzo;
        this.imagesPath = imagesPath;
        this.caratteristiche = caratteristiche;
        this.changeDisplayedImagePath(this.imagesPath.length > 0 ? this.imagesPath[0] : null);
        this.noPrice = prezzo === null;
        this.noPriceLabel = noPriceLabel;
    }
    static init(catItem) {
        return new CatItem(catItem.marca, catItem.modello, catItem.descrizione, catItem.categoria, catItem.potenza, catItem.prezzo, catItem.noPriceLabel, catItem.imagesPath, catItem.caratteristiche);
    }
    getTitle() {
        return this.marca + ' ' + this.modello;
    }
    getDisplayedImagePath() {
        return this.displayedImagePath;
    }
    onImageMouseOver() {
        if (this.imagesPath.length > 1) {
            this.changeDisplayedImagePath(this.imagesPath[1]);
        }
        else {
            this.onImageMouseOut();
        }
    }
    onImageMouseOut() {
        this.changeDisplayedImagePath(this.imagesPath.length > 0 ? this.imagesPath[0] : null);
    }
    changeDisplayedImagePath(imagePath) {
        this.displayedImagePath = imagePath;
    }
    hasCaratteristiche() {
        return this.caratteristiche && this.caratteristiche.length > 0;
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countdown/countdown.component */ "./src/app/countdown/countdown.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _pages_accessori_accessori_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/accessori/accessori.component */ "./src/app/pages/accessori/accessori.component.ts");
/* harmony import */ var _pages_auto_auto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/auto/auto.component */ "./src/app/pages/auto/auto.component.ts");
/* harmony import */ var _pages_chi_siamo_chi_siamo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/chi-siamo/chi-siamo.component */ "./src/app/pages/chi-siamo/chi-siamo.component.ts");
/* harmony import */ var _pages_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contatti/contatti.component */ "./src/app/pages/contatti/contatti.component.ts");
/* harmony import */ var _pages_ebike_ebike_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ebike/ebike.component */ "./src/app/pages/ebike/ebike.component.ts");
/* harmony import */ var _pages_monopattini_monopattini_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/monopattini/monopattini.component */ "./src/app/pages/monopattini/monopattini.component.ts");
/* harmony import */ var _pages_moto_moto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/moto/moto.component */ "./src/app/pages/moto/moto.component.ts");
/* harmony import */ var _pages_scheda_prodotto_scheda_prodotto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/scheda-prodotto/scheda-prodotto.component */ "./src/app/pages/scheda-prodotto/scheda-prodotto.component.ts");
/* harmony import */ var _pages_scooter_scooter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/scooter/scooter.component */ "./src/app/pages/scooter/scooter.component.ts");
/* harmony import */ var _pages_veicoli_da_lavoro_veicoli_da_lavoro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/veicoli-da-lavoro/veicoli-da-lavoro.component */ "./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.ts");
/* harmony import */ var _constant_path__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_constant/path */ "./src/app/_constant/path.ts");

















const routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].HOMEPAGE,
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].HOME,
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].AUTO,
        component: _pages_auto_auto_component__WEBPACK_IMPORTED_MODULE_7__["AutoComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].MOTO,
        component: _pages_moto_moto_component__WEBPACK_IMPORTED_MODULE_12__["MotoComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].SCOOTER,
        component: _pages_scooter_scooter_component__WEBPACK_IMPORTED_MODULE_14__["ScooterComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].EBIKE,
        component: _pages_ebike_ebike_component__WEBPACK_IMPORTED_MODULE_10__["EbikeComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].MONOPATTINI,
        component: _pages_monopattini_monopattini_component__WEBPACK_IMPORTED_MODULE_11__["MonopattiniComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].VEICOLI_DA_LAVORO,
        component: _pages_veicoli_da_lavoro_veicoli_da_lavoro_component__WEBPACK_IMPORTED_MODULE_15__["VeicoliDaLavoroComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].ACCESSORI,
        component: _pages_accessori_accessori_component__WEBPACK_IMPORTED_MODULE_6__["AccessoriComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].CHI_SIAMO,
        component: _pages_chi_siamo_chi_siamo_component__WEBPACK_IMPORTED_MODULE_8__["ChiSiamoComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].CONTATTI,
        component: _pages_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_9__["ContattiComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].SCHEDA_PRODOTTO + '/:id',
        component: _pages_scheda_prodotto_scheda_prodotto_component__WEBPACK_IMPORTED_MODULE_13__["SchedaProdottoComponent"]
    },
    {
        path: _constant_path__WEBPACK_IMPORTED_MODULE_16__["Path"].COUNTDOWN,
        component: _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_3__["CountdownComponent"]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countdown/countdown.component */ "./src/app/countdown/countdown.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _pages_accessori_accessori_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/accessori/accessori.component */ "./src/app/pages/accessori/accessori.component.ts");
/* harmony import */ var _pages_auto_auto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/auto/auto.component */ "./src/app/pages/auto/auto.component.ts");
/* harmony import */ var _pages_chi_siamo_chi_siamo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/chi-siamo/chi-siamo.component */ "./src/app/pages/chi-siamo/chi-siamo.component.ts");
/* harmony import */ var _pages_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contatti/contatti.component */ "./src/app/pages/contatti/contatti.component.ts");
/* harmony import */ var _pages_ebike_ebike_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/ebike/ebike.component */ "./src/app/pages/ebike/ebike.component.ts");
/* harmony import */ var _pages_elenco_prodotti_elenco_prodotti_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/elenco-prodotti/elenco-prodotti.component */ "./src/app/pages/elenco-prodotti/elenco-prodotti.component.ts");
/* harmony import */ var _pages_monopattini_monopattini_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/monopattini/monopattini.component */ "./src/app/pages/monopattini/monopattini.component.ts");
/* harmony import */ var _pages_moto_moto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/moto/moto.component */ "./src/app/pages/moto/moto.component.ts");
/* harmony import */ var _pages_scheda_prodotto_scheda_prodotto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/scheda-prodotto/scheda-prodotto.component */ "./src/app/pages/scheda-prodotto/scheda-prodotto.component.ts");
/* harmony import */ var _pages_scooter_scooter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/scooter/scooter.component */ "./src/app/pages/scooter/scooter.component.ts");
/* harmony import */ var _pages_veicoli_da_lavoro_veicoli_da_lavoro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/veicoli-da-lavoro/veicoli-da-lavoro.component */ "./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.ts");
/* harmony import */ var _component_cat_filters_cat_filters_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_component/cat-filters/cat-filters.component */ "./src/app/_component/cat-filters/cat-filters.component.ts");
/* harmony import */ var _component_cat_grid_cat_grid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_component/cat-grid/cat-grid.component */ "./src/app/_component/cat-grid/cat-grid.component.ts");
/* harmony import */ var _component_cat_item_cat_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_component/cat-item/cat-item.component */ "./src/app/_component/cat-item/cat-item.component.ts");
/* harmony import */ var _component_cat_title_cat_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_component/cat-title/cat-title.component */ "./src/app/_component/cat-title/cat-title.component.ts");
/* harmony import */ var _component_container_container_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_component/container/container.component */ "./src/app/_component/container/container.component.ts");
/* harmony import */ var _component_content_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_component/content/content.component */ "./src/app/_component/content/content.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_component/footer/footer.component */ "./src/app/_component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_component/header/header.component */ "./src/app/_component/header/header.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_component/navbar/navbar.component */ "./src/app/_component/navbar/navbar.component.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _component_container_container_component__WEBPACK_IMPORTED_MODULE_24__["ContainerComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
            _component_content_content_component__WEBPACK_IMPORTED_MODULE_25__["ContentComponent"],
            _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
            _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
            _pages_auto_auto_component__WEBPACK_IMPORTED_MODULE_10__["AutoComponent"],
            _pages_moto_moto_component__WEBPACK_IMPORTED_MODULE_16__["MotoComponent"],
            _pages_scooter_scooter_component__WEBPACK_IMPORTED_MODULE_18__["ScooterComponent"],
            _pages_ebike_ebike_component__WEBPACK_IMPORTED_MODULE_13__["EbikeComponent"],
            _pages_monopattini_monopattini_component__WEBPACK_IMPORTED_MODULE_15__["MonopattiniComponent"],
            _pages_accessori_accessori_component__WEBPACK_IMPORTED_MODULE_9__["AccessoriComponent"],
            _pages_chi_siamo_chi_siamo_component__WEBPACK_IMPORTED_MODULE_11__["ChiSiamoComponent"],
            _pages_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_12__["ContattiComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
            _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_6__["CountdownComponent"],
            _pages_scheda_prodotto_scheda_prodotto_component__WEBPACK_IMPORTED_MODULE_17__["SchedaProdottoComponent"],
            _pages_elenco_prodotti_elenco_prodotti_component__WEBPACK_IMPORTED_MODULE_14__["ElencoProdottiComponent"],
            _component_cat_item_cat_item_component__WEBPACK_IMPORTED_MODULE_22__["CatItemComponent"],
            _component_cat_grid_cat_grid_component__WEBPACK_IMPORTED_MODULE_21__["CatGridComponent"],
            _component_cat_filters_cat_filters_component__WEBPACK_IMPORTED_MODULE_20__["CatFiltersComponent"],
            _component_cat_title_cat_title_component__WEBPACK_IMPORTED_MODULE_23__["CatTitleComponent"],
            _pages_veicoli_da_lavoro_veicoli_da_lavoro_component__WEBPACK_IMPORTED_MODULE_19__["VeicoliDaLavoroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/countdown/countdown.component.css":
/*!***************************************************!*\
  !*** ./src/app/countdown/countdown.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".countdown-card {\r\n    background-color: purple;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZG93bi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/countdown/countdown.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countdown/countdown.component.ts ***!
  \**************************************************/
/*! exports provided: CountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountdownComponent = class CountdownComponent {
    // countdown: Countdown = new Countdown();
    constructor() { }
    ngOnInit() {
    }
};
CountdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/countdown/countdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./countdown.component.css */ "./src/app/countdown/countdown.component.css")).default]
    })
], CountdownComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mock_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_mock/record */ "./src/app/_mock/record.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomepageComponent = class HomepageComponent {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
    }
    getItems() {
        this.items = _mock_record__WEBPACK_IMPORTED_MODULE_1__["Record"].getAll();
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/accessori/accessori.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/accessori/accessori.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY2Vzc29yaS9hY2Nlc3NvcmkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/accessori/accessori.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/accessori/accessori.component.ts ***!
  \********************************************************/
/*! exports provided: AccessoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriComponent", function() { return AccessoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_mock/record */ "./src/app/_mock/record.ts");



let AccessoriComponent = class AccessoriComponent {
    constructor() {
        // filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        // this.buildFilters();
    }
    getItems() {
        this.items = src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__["Record"].ACCESSORI;
    }
};
AccessoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accessori',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessori.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accessori/accessori.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accessori.component.css */ "./src/app/pages/accessori/accessori.component.css")).default]
    })
], AccessoriComponent);



/***/ }),

/***/ "./src/app/pages/auto/auto.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/auto/auto.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dG8vYXV0by5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auto/auto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auto/auto.component.ts ***!
  \**********************************************/
/*! exports provided: AutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComponent", function() { return AutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutoComponent = class AutoComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        this.buildFilters();
    }
    getItems() {
        this.items = [];
    }
    buildFilters() {
        this.items.forEach(item => {
            if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
                this.filters.marca.push({ value: item.marca });
            }
            if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
                this.filters.potenza.push({ value: item.potenza });
            }
        });
    }
};
AutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auto/auto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auto.component.css */ "./src/app/pages/auto/auto.component.css")).default]
    })
], AutoComponent);



/***/ }),

/***/ "./src/app/pages/chi-siamo/chi-siamo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/chi-siamo/chi-siamo.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoaS1zaWFtby9jaGktc2lhbW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/chi-siamo/chi-siamo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/chi-siamo/chi-siamo.component.ts ***!
  \********************************************************/
/*! exports provided: ChiSiamoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiSiamoComponent", function() { return ChiSiamoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChiSiamoComponent = class ChiSiamoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChiSiamoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chi-siamo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-siamo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chi-siamo/chi-siamo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-siamo.component.css */ "./src/app/pages/chi-siamo/chi-siamo.component.css")).default]
    })
], ChiSiamoComponent);



/***/ }),

/***/ "./src/app/pages/contatti/contatti.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contatti/contatti.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhdHRpL2NvbnRhdHRpLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/contatti/contatti.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contatti/contatti.component.ts ***!
  \******************************************************/
/*! exports provided: ContattiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContattiComponent", function() { return ContattiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContattiComponent = class ContattiComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContattiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contatti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contatti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatti/contatti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contatti.component.css */ "./src/app/pages/contatti/contatti.component.css")).default]
    })
], ContattiComponent);



/***/ }),

/***/ "./src/app/pages/ebike/ebike.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/ebike/ebike.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ViaWtlL2ViaWtlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ebike/ebike.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/ebike/ebike.component.ts ***!
  \************************************************/
/*! exports provided: EbikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbikeComponent", function() { return EbikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EbikeComponent = class EbikeComponent {
    constructor() { }
    ngOnInit() {
    }
};
EbikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ebike',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ebike.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ebike/ebike.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ebike.component.css */ "./src/app/pages/ebike/ebike.component.css")).default]
    })
], EbikeComponent);



/***/ }),

/***/ "./src/app/pages/elenco-prodotti/elenco-prodotti.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/elenco-prodotti/elenco-prodotti.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VsZW5jby1wcm9kb3R0aS9lbGVuY28tcHJvZG90dGkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/elenco-prodotti/elenco-prodotti.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/elenco-prodotti/elenco-prodotti.component.ts ***!
  \********************************************************************/
/*! exports provided: ElencoProdottiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElencoProdottiComponent", function() { return ElencoProdottiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElencoProdottiComponent = class ElencoProdottiComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ElencoProdottiComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ElencoProdottiComponent.prototype, "filters", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ElencoProdottiComponent.prototype, "items", void 0);
ElencoProdottiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-elenco-prodotti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./elenco-prodotti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/elenco-prodotti/elenco-prodotti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./elenco-prodotti.component.css */ "./src/app/pages/elenco-prodotti/elenco-prodotti.component.css")).default]
    })
], ElencoProdottiComponent);



/***/ }),

/***/ "./src/app/pages/monopattini/monopattini.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/monopattini/monopattini.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vbm9wYXR0aW5pL21vbm9wYXR0aW5pLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/monopattini/monopattini.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/monopattini/monopattini.component.ts ***!
  \************************************************************/
/*! exports provided: MonopattiniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonopattiniComponent", function() { return MonopattiniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_mock/record */ "./src/app/_mock/record.ts");



let MonopattiniComponent = class MonopattiniComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        this.buildFilters();
    }
    getItems() {
        this.items = src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__["Record"].MONOPATTINI;
    }
    buildFilters() {
        this.items.forEach(item => {
            if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
                this.filters.marca.push({ value: item.marca });
            }
            if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
                this.filters.potenza.push({ value: item.potenza });
            }
        });
    }
};
MonopattiniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monopattini',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monopattini.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/monopattini/monopattini.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monopattini.component.css */ "./src/app/pages/monopattini/monopattini.component.css")).default]
    })
], MonopattiniComponent);



/***/ }),

/***/ "./src/app/pages/moto/moto.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/moto/moto.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdG8vbW90by5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/moto/moto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/moto/moto.component.ts ***!
  \**********************************************/
/*! exports provided: MotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoComponent", function() { return MotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_mock/record */ "./src/app/_mock/record.ts");



let MotoComponent = class MotoComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        this.buildFilters();
    }
    getItems() {
        this.items = src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__["Record"].MOTO;
    }
    buildFilters() {
        this.items.forEach(item => {
            if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
                this.filters.marca.push({ value: item.marca });
            }
            if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
                this.filters.potenza.push({ value: item.potenza });
            }
        });
    }
};
MotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/moto/moto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moto.component.css */ "./src/app/pages/moto/moto.component.css")).default]
    })
], MotoComponent);



/***/ }),

/***/ "./src/app/pages/scheda-prodotto/scheda-prodotto.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/scheda-prodotto/scheda-prodotto.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.col, div.col-6 {\r\n    padding: 2rem;\r\n}\r\n\r\ndiv.main-image-container {\r\n    background: #eee;\r\n    border: #ddd solid 2px;\r\n}\r\n\r\ndiv.image-preview-container {\r\n    width: 20%;\r\n    display: inline-block;\r\n    padding: .2rem .2rem;\r\n}\r\n\r\ndiv.main-image-container img, div.image-preview-container img {\r\n    width: 100%;\r\n}\r\n\r\ndiv.image-preview-container img {\r\n    background: #eee;\r\n    border: #ddd solid 2px;\r\n    cursor: pointer;\r\n}\r\n\r\nh5.price {\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\nh5.price::first-letter {\r\n    padding-right: 0.3em;\r\n}\r\n\r\np.description {\r\n    padding-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWRhLXByb2RvdHRvL3NjaGVkYS1wcm9kb3R0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZGEtcHJvZG90dG8vc2NoZWRhLXByb2RvdHRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29sLCBkaXYuY29sLTYge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuZGl2Lm1haW4taW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6ICNkZGQgc29saWQgMnB4O1xyXG59XHJcblxyXG5kaXYuaW1hZ2UtcHJldmlldy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IC4ycmVtIC4ycmVtO1xyXG59XHJcblxyXG5kaXYubWFpbi1pbWFnZS1jb250YWluZXIgaW1nLCBkaXYuaW1hZ2UtcHJldmlldy1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXYuaW1hZ2UtcHJldmlldy1jb250YWluZXIgaW1nIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6ICNkZGQgc29saWQgMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oNS5wcmljZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaDUucHJpY2U6OmZpcnN0LWxldHRlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxucC5kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/scheda-prodotto/scheda-prodotto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/scheda-prodotto/scheda-prodotto.component.ts ***!
  \********************************************************************/
/*! exports provided: SchedaProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedaProdottoComponent", function() { return SchedaProdottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_service/shared.service */ "./src/app/_service/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SchedaProdottoComponent = class SchedaProdottoComponent {
    constructor(route, sharedService) {
        this.route = route;
        this.sharedService = sharedService;
        this.item = sharedService.selectedItem;
    }
    ngOnInit() {
        const idProdotto = this.route.snapshot.paramMap.get('id');
    }
};
SchedaProdottoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }
];
SchedaProdottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-scheda-prodotto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scheda-prodotto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scheda-prodotto/scheda-prodotto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scheda-prodotto.component.css */ "./src/app/pages/scheda-prodotto/scheda-prodotto.component.css")).default]
    })
], SchedaProdottoComponent);



/***/ }),

/***/ "./src/app/pages/scooter/scooter.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/scooter/scooter.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Njb290ZXIvc2Nvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/scooter/scooter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/scooter/scooter.component.ts ***!
  \****************************************************/
/*! exports provided: ScooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScooterComponent", function() { return ScooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_mock/record */ "./src/app/_mock/record.ts");



let ScooterComponent = class ScooterComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        this.buildFilters();
    }
    getItems() {
        this.items = src_app_mock_record__WEBPACK_IMPORTED_MODULE_2__["Record"].SCOOTER;
    }
    buildFilters() {
        this.items.forEach(item => {
            if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
                this.filters.marca.push({ value: item.marca });
            }
            if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
                this.filters.potenza.push({ value: item.potenza });
            }
        });
    }
};
ScooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scooter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scooter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scooter/scooter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scooter.component.css */ "./src/app/pages/scooter/scooter.component.css")).default]
    })
], ScooterComponent);



/***/ }),

/***/ "./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlaWNvbGktZGEtbGF2b3JvL3ZlaWNvbGktZGEtbGF2b3JvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.ts ***!
  \************************************************************************/
/*! exports provided: VeicoliDaLavoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeicoliDaLavoroComponent", function() { return VeicoliDaLavoroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_mock_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_mock/record */ "./src/app/_mock/record.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let VeicoliDaLavoroComponent = class VeicoliDaLavoroComponent {
    constructor() {
        this.filters = { marca: [], potenza: [] };
        this.items = [];
    }
    ngOnInit() {
        this.getItems();
        this.buildFilters();
    }
    getItems() {
        this.items = src_app_mock_record__WEBPACK_IMPORTED_MODULE_1__["Record"].VEICOLI_DA_LAVORO;
    }
    buildFilters() {
        this.items.forEach(item => {
            if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
                this.filters.marca.push({ value: item.marca });
            }
            if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
                this.filters.potenza.push({ value: item.potenza });
            }
        });
    }
};
VeicoliDaLavoroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-veicoli-da-lavoro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./veicoli-da-lavoro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./veicoli-da-lavoro.component.css */ "./src/app/pages/veicoli-da-lavoro/veicoli-da-lavoro.component.css")).default]
    })
], VeicoliDaLavoroComponent);



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

const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Majorbit\Documents\GitHub\leonardobaioni.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
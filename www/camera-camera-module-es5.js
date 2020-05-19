function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCameraCameraPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Camera</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/camera/camera-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/camera/camera-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CameraPageRoutingModule */

  /***/
  function srcAppPagesCameraCameraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function () {
      return CameraPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./camera.page */
    "./src/app/pages/camera/camera.page.ts");

    var routes = [{
      path: '',
      component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
    }];

    var CameraPageRoutingModule = function CameraPageRoutingModule() {
      _classCallCheck(this, CameraPageRoutingModule);
    };

    CameraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CameraPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/camera/camera.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/camera/camera.module.ts ***!
    \***********************************************/

  /*! exports provided: CameraPageModule */

  /***/
  function srcAppPagesCameraCameraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
      return CameraPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./camera-routing.module */
    "./src/app/pages/camera/camera-routing.module.ts");
    /* harmony import */


    var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./camera.page */
    "./src/app/pages/camera/camera.page.ts");

    var CameraPageModule = function CameraPageModule() {
      _classCallCheck(this, CameraPageModule);
    };

    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]],
      declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
    })], CameraPageModule);
    /***/
  },

  /***/
  "./src/app/pages/camera/camera.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/camera/camera.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCameraCameraPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/camera/camera.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/camera/camera.page.ts ***!
    \*********************************************/

  /*! exports provided: CameraPage */

  /***/
  function srcAppPagesCameraCameraPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
      return CameraPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CameraPage = /*#__PURE__*/function () {
      function CameraPage() {
        _classCallCheck(this, CameraPage);
      }

      _createClass(CameraPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CameraPage;
    }();

    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./camera.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera.page.scss */
      "./src/app/pages/camera/camera.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CameraPage);
    /***/
  }
}]);
//# sourceMappingURL=camera-camera-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\" [fullscreen]=\"true\">\n</ion-content>\n\n<div id=\"container\">\n  <div class=\"box\">\n    <ion-icon class=\"btter\" class=\"ic\" name=\"alarm\"></ion-icon>\n    <!-- <ion-icon name=\"book-outline\" class=\"ic\"></ion-icon> -->\n    <div class=\"tx\">\n      <span>{{date}}</span><br>\n      <span>{{timeDate}}</span>\n    </div>\n  </div>\n  <div  class=\"box\" *ngIf=\"item.length >0\">\n    <img class=\"ic\" src=\"../../assets/photo/solar.png\" width=\"80px\" />\n    <div class=\"tx1\" >\n      <span>Voltage</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].volteSolar}} </span>\n      <span style=\"padding-left: 10px;\">V</span>\n    </div>\n    <div class=\"tx1\" >\n      <span>Current</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].currentSolar}} </span>\n      <span style=\"padding-left: 10px;\">A</span>\n    </div>\n  </div>\n  <div class=\"box\"  *ngIf=\"item.length >0\">\n    <ion-icon class=\"ic\"name=\"battery-half\"></ion-icon>\n    <div class=\"tx1\">\n      <span>Voltage</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].volteBatt}} </span>\n      <span style=\"padding-left: 10px;\">V</span>\n    </div>\n    <div class=\"tx1\">\n      <span>Current</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].currentBatt}} </span>\n      <span style=\"padding-left: 10px;\">A</span>\n    </div>\n  </div>\n  <div class=\"box\" *ngIf=\"item.length >0\">\n    <ion-icon  class=\"ic\" name=\"battery-charging\"></ion-icon>\n    <div class=\"tx1\">\n      <span>Battery</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].percentBatt}} </span>\n      <span style=\"padding-left: 10px;\">%</span>\n        \n    </div>\n    <div class=\"tx1\">\n      <span>Time</span>\n      <span style=\"padding-left: 10px;\"> {{item[0].timeBatt}} </span>\n      <span style=\"padding-left: 10px;\">M</span>\n    </div>\n  </div>\n  <div class=\"box\" *ngIf=\"item.length >0\">\n    <ion-icon class=\"ic\" name=\"wifi\"></ion-icon><br />\n    <div class=\"tx\">\n      <span> {{connectStatus[item[0].connectStatus]}}</span>\n    </div>\n  </div>\n  <div class=\"box\" *ngIf=\"item.length >0\">\n    <ion-icon *ngIf=\"item[0].StatusError==0\"  class=\"ic\" name=\"checkmark-circle-outline\"></ion-icon>\n    <ion-icon *ngIf=\"item[0].StatusError!=0\" class=\"ic err\" name=\"close-circle-outline\"></ion-icon>\n    <div *ngIf=\"item[0].StatusError==0\" class=\"tx\">\n      <span> {{chargeStatus[item[0].StatusError]}}</span>\n    </div>\n    <div *ngIf=\"item[0].StatusError!=0\" class=\"tx err\">\n      <span> {{chargeStatus[item[0].StatusError]}}</span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
// หน้าโชว์สถานะ



let Tab1Page = class Tab1Page {
    constructor() {
        this.item = [];
        this.connectStatus = ['ไม่มีการเชื่อมต่อ', 'เชื่อมต่ออุปกรณ์'];
        this.chargeStatus = ['ชาร์จปกติ', 'ชาร์จผิดพลาด'];
        this.inputText = '';
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/');
        this.timeDate = '';
        this.date = '';
        this.oldMinutes = 0;
        this.months_th_mini = [
            'ม.ค.',
            'ก.พ.',
            'มี.ค.',
            'เม.ย.',
            'พ.ค.',
            'มิ.ย.',
            'ก.ค.',
            'ส.ค.',
            'ก.ย.',
            'ต.ค.',
            'พ.ย.',
            'ธ.ค.',
        ];
    }
    ngOnInit() {
        // เก็บค่าเวลาปัจจุบัน
        this.oldMinutes = new Date().getMinutes();
        // ดึงค่าจาก firebase
        this.ref.on('value', (resp) => {
            this.item = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["snapshotToArray"])(resp);
        });
        // เรียกใช้ฟังก์ชัน run
        this.run();
    }
    // เพิ่มค่าใน firebase
    // addItem(item) {
    //   if (item !== undefined && item != null) {
    //     const newItem = this.ref.push();
    //     newItem.set(item);
    //     this.inputText = '';
    //   }
    // }
    // ลบค่าใน firebase
    // async delItem(key) {
    //   firebase
    //     .database()
    //     .ref('/' + key)
    //     .remove();
    // }
    // อัพเดทค่าใน firebase
    upItem(key, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            firebase__WEBPACK_IMPORTED_MODULE_4__["database"]()
                .ref('test/' + key)
                .set(item);
        });
    }
    // ฟังก์ชันในการ วนลูปทุกๆ 1 วิ เพื่อเก็บค่า เวลาปัจจุบันขึ้น firebase
    run() {
        setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const t = new Date();
            const s = t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds();
            this.timeDate = this.getTime() + ':' + s;
            this.date =
                t.getDate() +
                    ' ' +
                    this.months_th_mini[t.getMonth()] +
                    ' ' +
                    t.getFullYear();
            if (t.getMinutes() !== this.oldMinutes) { //เช็คนาที ทุกๆ1นาทีจะทำการส่งค่า
                this.oldMinutes = t.getMinutes();
                this.upItem('currentDate', this.getDate()); // update currentDate ใน firebase
                this.upItem('currentTime', this.getTime()); // update currentDate ใน firebase
            }
        }), 1000); // จำนวนวิ 1000 = 1วิ
    }
    //จัด format เวลา HH:MM
    getTime() {
        const t = new Date();
        let h = t.getHours();
        let m = t.getMinutes();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        return h + ':' + m;
    }
    //จัด format วัน วัน-เดือน-ปี
    getDate() {
        const t = new Date();
        let d = t.getDate();
        let m = t.getMonth() + 1;
        const y = t.getFullYear();
        if (d < 10) {
            d = '0' + d;
        }
        if (m < 10) {
            m = '0' + m;
        }
        return d + '-' + m + '-' + y;
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tx {\n  padding-top: 2.3vh;\n  font-size: 3vh;\n}\n\nion-header {\n  background-color: #ffb246;\n}\n\n.tx1 {\n  padding-top: 3%;\n  font-size: 2.4vh;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  height: 100%;\n  background-color: #ffb246;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding-bottom: 3%;\n}\n\n.box {\n  grid-column: span 1;\n  grid-row: span 4;\n  background-color: #ffffff;\n  margin-top: 10%;\n  margin-left: 5%;\n  margin-bottom: 1%;\n  margin-right: 5%;\n  border-radius: 8px;\n  float: left;\n}\n\n.ic {\n  font-size: 64px;\n  margin-top: 10%;\n  color: #000000;\n  margin-bottom: -3px;\n}\n\n.tl {\n  font-size: 20px;\n  margin-top: 10%;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.err {\n  color: #ff6961;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQXZDSjs7QUE0Q0U7RUFDRSx5QkFBQTtBQXpDSjs7QUEyQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF4Q0o7O0FBNENFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBUEc7RUFRSCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQXpDSjs7QUErQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBcEJJO0VBcUJKLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTVDSjs7QUE4Q0U7RUFDRyxlQUFBO0VBQ0QsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTNDSjs7QUE2Q0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTFDSjs7QUE0Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF6Q0o7O0FBMkNFO0VBQ0UsY0FBQTtBQXhDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbi8vIH1cbi8vIC5jb250YWluZXIge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNzgsIDcwKTtcbi8vIH1cbi8vIC50aXRsZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3OCwgNzApO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbi8vIH1cbi8vIC5idHRlciB7XG4vLyAgIGZvbnQtc2l6ZTogNjRweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbi8vIH1cbi8vIC5jb2x1bW4xIHtcbi8vICAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBwYWRkaW5nLXRvcDogMTAlO1xuLy8gfVxuLy8gLmNvbHVtbjIge1xuLy8gICBncmlkLWNvbHVtbjogc3BhbiA2O1xuLy8gICBtYXJnaW4tdG9wOiA4cHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBwYWRkaW5nLXRvcDogMTAlO1xuLy8gfVxuLy8gaW9uLWhlYWRlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE3OCwgNzApO1xuLy8gfVxuLnR4IHtcbiAgICBwYWRkaW5nLXRvcDogMi4zdmg7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gIH1cbiAgLy8gLmljIHtcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTc4LCA3MCk7XG4gIH1cbiAgLnR4MSB7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIGZvbnQtc2l6ZTogMi40dmg7XG4gIH1cbiAgJGJnOiByZ2IoMjU1LCAxNzgsIDcwKTtcbiAgJGJnMjogI2ZmZmZmZjtcbiAgI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgfVxuICAvLyAuYnR0ZXIge1xuICAvLyAgIGZvbnQtc2l6ZTogNjRweDtcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICAvLyB9XG4gIC5ib3gge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gICAgZ3JpZC1yb3c6IHNwYW4gNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmcyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmljIHtcbiAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICB9XG4gIC50bCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5lcnJ7XG4gICAgY29sb3I6ICNmZjY5NjE7XG4gIH0iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map
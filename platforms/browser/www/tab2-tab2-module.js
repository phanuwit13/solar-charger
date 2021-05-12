(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.box {\n  height: 150px;\n  margin: 20px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 5vw;\n  font-weight: 600;\n}\n\n.group-title {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtBQUdKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIH1cbiAgLmJveCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAuZ3JvdXAtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable eqeqeq */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */



let Tab2Page = class Tab2Page {
    constructor() {
        this.status = false;
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/');
        this.lowVolteBatt = 0;
        this.lowCurrentBatt = 0;
        this.timeStart = '11:12';
        this.timeStop = '01:00';
        this.enableTime = false;
        this.lowCurrentSolar = 0;
        this.lowVolteSolar = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // เชื่อมต่อ firebase
            // this.ref.on('value', (resp) => {
            //   this.item = snapshotToArray(resp);
            //   // ตรวจสอบสถานะ เปิดหรือปิด
            //   if (this.item[0].enable == 1) {
            //     this.status = false;
            //   } else {
            //     this.status = true;
            //   }
            // });
            // เชื่อมต่อ firebase
            this.connectFirebase(this.ref).then((res) => {
                this.item = res;
                //ตรวจสอบสถานะว่าเปิดหรือปิด
                if (res[0].enable == 1) {
                    this.status = false;
                }
                else {
                    this.status = true;
                }
                // เซ็ตค่าต่างๆจาก firebase ลง แอพ
                this.lowCurrentBatt = res[0].lowCurrentBatt;
                this.lowCurrentSolar = res[0].lowCurrentSolar;
                this.lowVolteBatt = res[0].lowVolteBatt;
                this.lowVolteSolar = res[0].lowVolteSolar;
                this.enableTime = res[0].enableTime;
                this.timeStart = res[0].timeStart;
                this.timeStop = res[0].timeStop;
            });
        });
    }
    // เชื่อมต่อ firebase
    connectFirebase(ref) {
        let item = [];
        return new Promise(function (resolve, reject) {
            ref.on('value', (resp) => {
                item = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["snapshotToArray"])(resp);
                resolve(item);
            });
        });
    }
    //อัพเดทค่าใน firebase
    upItem(key, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            firebase__WEBPACK_IMPORTED_MODULE_4__["database"]()
                .ref('test/' + key)
                .set(parseFloat(item));
        });
    }
    //อัพเดทค่าใน เวลาซึ่งเป็นสตริง
    upTime(key, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            firebase__WEBPACK_IMPORTED_MODULE_4__["database"]()
                .ref('test/' + key)
                .set(item);
        });
    }
    // อัพเดทสถานะเปิดปิด
    setStatus() {
        this.status = !this.status;
        //ถ้ามีการกดปุ่มเปิดปิด ให้อัพเดทสถานะใน firebase
        if (this.status == true) {
            this.upItem('enable', 0);
        }
        else {
            this.upItem('enable', 1);
        }
    }
    // อัพเดทตัวตั้งเวลา
    setEnableTime() {
        //ถ้ามีการกดปุ่มเปิดปิดตั้งเวลา ให้อัพเดทใน firebase
        if (this.enableTime == false) {
            this.upItem('enableTime', 0);
        }
        else {
            this.upItem('enableTime', 1);
        }
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <button\n        [disabled]=\"!this.status\"\n        (click)=\"setStatus()\"\n        class=\"col box btn btn-success\"\n      >\n        ON\n      </button>\n      <button\n        [disabled]=\"this.status\"\n        (click)=\"setStatus()\"\n        class=\"col box btn btn-danger\"\n      >\n        OFF\n      </button>\n    </div>\n    <label class=\"group-title\">แบตเตอรี่</label>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <label class=\"form-label\">แรงดันขั้นต่ำ</label>\n        <div class=\"mb-3 d-flex\">\n          <input\n            [(ngModel)]=\"lowVolteBatt\"\n            type=\"text\"\n            class=\"form-control w-100\"\n          />\n          <button\n            (click)=\"upItem('lowVolteBatt',this.lowVolteBatt)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <label class=\"form-label\">กระแสขั้นต่ำ</label>\n        <div class=\"mb-3 d-flex\">\n          <input\n            [(ngModel)]=\"lowCurrentBatt\"\n            type=\"text\"\n            class=\"form-control w-100\"\n          />\n          <button\n            (click)=\"upItem('lowCurrentBatt',this.lowCurrentBatt)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n    </div>\n    <label class=\"group-title mt-3\">โซล่าเซลล์</label>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <label class=\"form-label\">แรงดันขั้นต่ำ</label>\n        <div class=\"mb-3 d-flex\">\n          <input\n            [(ngModel)]=\"lowVolteSolar\"\n            type=\"text\"\n            class=\"form-control w-100\"\n          />\n          <button\n            (click)=\"upItem('lowVolteSolar',this.lowVolteSolar)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <label class=\"form-label\">กระแสขั้นต่ำ</label>\n        <div class=\"mb-3 d-flex\">\n          <input\n            [(ngModel)]=\"lowCurrentSolar\"\n            type=\"text\"\n            class=\"form-control w-100\"\n          />\n          <button\n            (click)=\"upItem('lowCurrentSolar',this.lowCurrentSolar)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n    </div>\n    <div mode=\"ios\" class=\"d-flex\">\n      <ion-toggle\n        (ionChange)=\"setEnableTime()\"\n        [(ngModel)]=\"this.enableTime\"\n        slot=\"start\"\n        name=\"blueberry\"\n        checked\n      ></ion-toggle>\n      <ion-label class=\"ml-2 mt-1\">ตั้งเวลาการทำงาน</ion-label>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-6\">\n        <label class=\"form-label\">เวลาเปิด</label>\n        <div class=\"mb-3 d-flex\">\n          <ion-datetime\n            [disabled]=\"!this.enableTime\"\n            [(ngModel)]=\"timeStart\"\n            class=\"form-control\"\n            displayFormat=\"HH:mm\"\n          ></ion-datetime>\n          <button\n            [disabled]=\"!this.enableTime\"\n            (click)=\"upTime('timeStart',this.timeStart)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <label class=\"form-label\">เวลาปิด</label>\n        <div class=\"mb-3 d-flex\">\n          <ion-datetime\n            [disabled]=\"!this.enableTime\"\n            [(ngModel)]=\"timeStop\"\n            class=\"form-control\"\n            displayFormat=\"HH:mm\"\n          ></ion-datetime>\n          <button\n            [disabled]=\"!this.enableTime\"\n            (click)=\"upTime('timeStop',this.timeStop)\"\n            class=\"btn btn-primary ml-2\"\n          >\n            set\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map
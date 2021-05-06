/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable eqeqeq */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public status = false;
  item: any;
  ref = firebase.database().ref('/');
  lowVolteBatt: number = 0;
  lowCurrentBatt = 0;
  timeStart = '11:12';
  timeStop = '01:00';
  enableTime = false;
  lowCurrentSolar = 0;
  lowVolteSolar = 0;
  constructor() {}

  async ngOnInit() {
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
      } else {
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
  }

  // เชื่อมต่อ firebase
  connectFirebase(ref) {
    let item = [];
    return new Promise(function(resolve, reject) {
      ref.on('value', (resp) => {
        item = snapshotToArray(resp);
        resolve(item);
      });
    });
  }

  //อัพเดทค่าใน firebase
  async upItem(key, item) {
    firebase
      .database()
      .ref('test/' + key)
      .set(parseFloat(item));
  }

  //อัพเดทค่าใน เวลาซึ่งเป็นสตริง
  async upTime(key, item) {
    firebase
      .database()
      .ref('test/' + key)
      .set(item);
  }

  // อัพเดทสถานะเปิดปิด
  setStatus() {
    this.status = !this.status;
    //ถ้ามีการกดปุ่มเปิดปิด ให้อัพเดทสถานะใน firebase
    if (this.status == true) {
      this.upItem('enable', 0);
    } else {
      this.upItem('enable', 1);
    }
  }

  // อัพเดทตัวตั้งเวลา
  setEnableTime() {
     //ถ้ามีการกดปุ่มเปิดปิดตั้งเวลา ให้อัพเดทใน firebase
    if (this.enableTime == false) {
      this.upItem('enableTime', 0);
    } else {
      this.upItem('enableTime', 1);
    }
  }
}

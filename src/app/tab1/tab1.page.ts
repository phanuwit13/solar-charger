/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
// หน้าโชว์สถานะ
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public item = [];
  public connectStatus = ['ไม่มีการเชื่อมต่อ', 'เชื่อมต่ออุปกรณ์'];
  public chargeStatus = ['ชาร์จปกติ', 'ชาร์จผิดพลาด'];
  public inputText = '';
  public ref = firebase.database().ref('/');
  public timeDate = '';
  public date = '';
  public oldMinutes = 0;
  public months_th_mini = [
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

  constructor() {}
  ngOnInit() {
    // เก็บค่าเวลาปัจจุบัน
    this.oldMinutes = new Date().getMinutes();
    // ดึงค่าจาก firebase
    this.ref.on('value', (resp) => {
      this.item = snapshotToArray(resp);
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
  async upItem(key, item) {
    firebase
      .database()
      .ref('test/' + key)
      .set(item);
  }

  // ฟังก์ชันในการ วนลูปทุกๆ 1 วิ เพื่อเก็บค่า เวลาปัจจุบันขึ้น firebase
  run() {
    setInterval(async () => {
      const t = new Date();
      const s: any =
        t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds();
      this.timeDate = this.getTime() + ':' + s;
      this.date =
        t.getDate() +
        ' ' +
        this.months_th_mini[t.getMonth()] +
        ' ' +
        t.getFullYear();
      if (t.getMinutes() !== this.oldMinutes) { //เช็คนาที ทุกๆ1นาทีจะทำการส่งค่า
        this.oldMinutes = t.getMinutes();
        this.upItem('currentDate', this.getDate());// update currentDate ใน firebase
        this.upItem('currentTime', this.getTime());// update currentDate ใน firebase
      }
    }, 1000); // จำนวนวิ 1000 = 1วิ
  }

  //จัด format เวลา HH:MM
  getTime() {
    const t = new Date();
    let h: any = t.getHours();
    let m: any = t.getMinutes();
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
    let d: any = t.getDate();
    let m: any = t.getMonth() + 1;
    const y: any = t.getFullYear();
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }
    return d + '-' + m + '-' + y;
  }
}

/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../environments/environment';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  // ประกาศตัวแปรกราฟ มี2 กราฟ
  @ViewChild('barcanvas', { static: true }) barcanvas: any;
  @ViewChild('barcanvas2', { static: true }) barcanvas2: any;

  barChart: any;
  barChart2: any;
  dayNum = [];
  item: any;
  rowData: Array<any> = []; // เป็น Array  ที่เก็บข้อมูลประวัติที่ได้จาก firebaseทั้งหมด
  dateShow: any; // เป็น Array  ที่จะเอาไปโชวืในตาราง
  dataShow: Array<any> = [];
  pointVB: Array<any> = [];
  pointVS: Array<any> = [];
  pointCB: Array<any> = [];
  pointCS: Array<any> = [];
  ref = firebase.database().ref('/');

  async ngOnInit() {
    // วนลูปเพิ่มค่าเวลา ให้เป็น  24  ชมเพื่อนำไปแสดงในกราฟ
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        this.dayNum.push('0' + i + ':00');
      } else {
        this.dayNum.push(i + ':00');
      }
    }

    // เชื่อมต่อ firebasw
    this.ref.on('value', (resp) => {
      this.item = snapshotToArray(resp);
      // แยกข้อมูลที่ได้มาจาก firebase ในเเต่ละ row
      this.rowData = this.item[0].log.split('z');
      this.rowData.pop(); // เอาข้อมูลตัวสุดท้ายที่เป้นค่าว่างออก
      for (let i = 0; i < this.rowData.length; i++) {
        this.rowData[i] = this.rowData[i].split(',');
      }
      // console.log(this.rowData);
    });
    this.chart(); // สร้าง กราฟแรงดัน
    this.chart2(); // สร้าง กราฟกระแส
  }
  constructor() {}

  // สร้างกราฟแรงดัน
  chart() {
    this.barChart = new Chart(this.barcanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dayNum,
        datasets: [
          {
            label: 'VB', // ชื่อข้อมูล
            data: this.pointVB, // ข้อมูล
            fill: false, // พื้นหลังเส้น
            borderColor: 'rgb(75, 192, 192)', //สีเส้นกราฟ
            borderWidth: 2, // ความหนาเส้น
          },
          {
            label: 'VS', // ชื่อข้อมูล
            data: this.pointVS, // ข้อมูล
            fill: false, // พื้นหลังเส้น
            borderColor: 'rgba(45,209,62,1)', //สีเส้นกราฟ
            borderWidth: 2, // ความหนาเส้น
          },
        ],
      },
      options: {
        scales: {
          yAxes: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // สร้าง กราฟกระแส
  chart2() {
    this.barChart2 = new Chart(this.barcanvas2.nativeElement, {
      type: 'line',
      data: {
        labels: this.dayNum,
        datasets: [
          {
            label: 'CB', // ชื่อข้อมูล
            data: this.pointCB, // ข้อมูล
            fill: false, // พื้นหลังเส้น
            borderColor: 'rgba(255,99,132,1)', //สีเส้นกราฟ
            borderWidth: 2, // ความหนาเส้น
          },
          {
            label: 'CS', // ชื่อข้อมูล
            data: this.pointCS, // ข้อมูล
            fill: false, // พื้นหลังเส้น
            borderColor: 'rgba(238,147,44,1)', //สีเส้นกราฟ
            borderWidth: 2, // ความหนาเส้น
          },
        ],
      },
      options: {
        scales: {
          yAxes: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // เซ็ตค่าข้อมูลที่จะเอาไปโชว์ในกราฟ
  dateSet = (e) => {
    this.pointVB = []; //เคลียร์ค่าข้อมูลในกราฟ
    this.pointVS = []; //เคลียร์ค่าข้อมูลในกราฟ
    this.pointCB = []; //เคลียร์ค่าข้อมูลในกราฟ
    this.pointCS = []; //เคลียร์ค่าข้อมูลในกราฟ
    const today = e.target.value.split('-'); // เเยกวันที่
    this.dateShow = today[2] + '-' + today[1] + '-' + today[0]; //ปรัป format เพื่อทำการเช็คกับค่าที่อยู่ในประวัติ
    // console.log(this.dateShow);
    // จะแสดงข้อมูลของ ค่าวันที่ ที่เลือก ตรงกับวันที่ ที่เก็บในประวัติ
    this.dataShow = this.rowData.filter(
      (value) => value[0].substring(5) == this.dateShow
    );

    // วนลูปแยกค่า VB VS CB CS ในเเต่ละ ชม แบ่งออก เป็น 24 ชม
    for (let i = 0; i < 24; i++) {
      let vb = 0;
      let vs = 0;
      let cb = 0;
      let cs = 0;
      let n = 0;
      this.dataShow.forEach((value) => {
        if (parseInt(value[1].substring(5, 7)) === i) {
          n++;
          vb += parseFloat(value[2].substring(3));
          vs += parseFloat(value[3].substring(3));
          cb += parseFloat(value[4].substring(3));
          cs += parseFloat(value[5].substring(3));
        }
      });
      // เก็บค่าที่คำนวณได้ละใน Array ของเเต่ละตัว
      this.pointVB.push(vb / n);
      this.pointVS.push(vs / n);
      this.pointCB.push(cb / n);
      this.pointCS.push(cs / n);
    }
    this.barChart.destroy(); // ล้างค่ากราฟแรงดัน
    this.barChart2.destroy(); // ล้างค่ากราฟกระแส
    this.chart();  //สร้ากราฟแรงดัน
    this.chart2(); //สร้ากราฟกระแส
  };
}

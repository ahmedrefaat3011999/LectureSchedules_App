import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-AllSchedules',
  templateUrl: './AllSchedules.component.html',
  styleUrls: ['./AllSchedules.component.scss']
})
export class AllSchedulesComponent implements OnInit {

  lectureschedules?: any[] = [];
  td = {};
  Days: any[] = [];

  constructor(private httpserv: HttpService, private authserv: AuthService) { }

  ngOnInit(): void {
    // this.getAllLectureSchedules();
    // this.loadDataFromLocal()
    // this.loadAllDataFromLocal()
    this.getAllDays();
    this.getAllDataInSchedules()
  }

  Times: any[] = [];

  // getAllLectureSchedules() {
  //   this.httpserv.GET('lectureschedule').subscribe(data => {
  //     this.lectureschedules = data;
  //     this.Times = this.lectureschedules.map(schedule => ({
  //       from: schedule.timefrom,
  //       to: schedule.timeto
  //     }));
  //   });
  // }
  DayId:any[] = [];
  getAllDays() {
    this.httpserv.GET("days").subscribe(data => {
      this.Days = data;
      this.DayId=data.id;
    });
  }

  // private loadDataFromLocal(): void {
  //   const data = localStorage.getItem('lectureSchedules');
  //   if (data) {
  //     this.lectureschedules = JSON.parse(data);
  //     console.log(this.lectureschedules);
      
  //   }
  // }
  // private loadAllDataFromLocal(): void {
  //   const data = localStorage.getItem('AlllectureSchedules');
  //   if (data) {
  //     this.lectureschedules = JSON.parse(data);
  //     console.log(this.lectureschedules);
      
  //   }
  // }


  getAllDataInSchedules(){
    this.httpserv.GET('lectureschedule').subscribe(data =>{
      console.log(data);
    })
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-AllTeachers',
  templateUrl: './AllTeachers.component.html',
  styleUrls: ['./AllTeachers.component.scss']
})
export class AllTeachersComponent implements OnInit {

  teachers?:any[]=[]


  constructor(private httpserv:HttpService,private authserv:AuthService) { }

  ngOnInit(): void {
    this.getAllTeachers()
  }

getAllTeachers(){
  this.httpserv.GET('teachers').subscribe((response)=>{
    this.teachers=response
    console.log(this.teachers)
  })

}

deleteTeachers(id){
    this.httpserv.DELETE(`teachers/${id}`).subscribe((response)=>{
      console.log(response)
      this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
    })
}
    
  
}

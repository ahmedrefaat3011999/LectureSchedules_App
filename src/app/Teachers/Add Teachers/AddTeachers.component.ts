import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddTeachers',
  templateUrl: './AddTeachers.component.html',
  styleUrls: ['./AddTeachers.component.scss'],
})
export class AddTeachersComponent implements OnInit {
  AddTeacher?:FormGroup


  constructor(private teacherServ: TeacherService,private fb:FormBuilder ,private router:Router) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.AddTeacher = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      country: ["", Validators.required],
      password: ["", Validators.required],
      numberoflecture: ["", Validators.required],
    });
  }
  
  addTeacher(){
    this.teacherServ?.AddTeachers(this.AddTeacher?.value).subscribe((teacher)=>{
      console.log(teacher+"succeful")
      this.router.navigate(['/Teachers/AllTeachers'])

    },errors=>{
      console.log(errors)
    }
  )
  }
}

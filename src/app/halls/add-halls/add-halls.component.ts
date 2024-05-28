import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HallsService } from '../services/halls.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-add-halls',
  templateUrl: './add-halls.component.html',
  styleUrls: ['./add-halls.component.scss']
})
export class AddHallsComponent implements OnInit {
  formHalls?:FormGroup
  constructor(private fb:FormBuilder,private serv:HallsService,private router:Router,private http:HttpService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formHalls = this.fb.group({
      hallname: ["", Validators.required]
    });
  }

  addHalls(){
    this.serv.AddHallsFunction(this.formHalls.value).subscribe((halls:any) => {
      console.log(halls+"halls");
      console.log(this.formHalls.value +"this.formHalls.value");
      this.router.navigate(['/Halls/AllHalls']);

    },error =>{
      console.log(error);
    })
  }

 
}

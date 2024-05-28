import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent implements OnInit {
  formlevels: FormGroup;

  constructor(private fb: FormBuilder, private serv: ServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formlevels = this.fb.group({
      levelyear: ["", Validators.required]
    });
  }

  AddLevelsFunction() {
    this.serv.AddLevelsFunction(this.formlevels.value).subscribe(
      (data) => {
        console.log(JSON.stringify(data) + " successful");
        this.router.navigate(['/levels']);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }
}
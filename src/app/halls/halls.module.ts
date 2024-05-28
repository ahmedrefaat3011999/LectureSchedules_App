import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallsRoutingModule } from './halls-routing.module';
import { AllHallsComponent } from './all-halls/all-halls.component';
import { AddHallsComponent } from './add-halls/add-halls.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllHallsComponent,
    AddHallsComponent
  ],
  imports: [
    CommonModule,
    HallsRoutingModule,
    ReactiveFormsModule
  ]
})
export class HallsModule { }

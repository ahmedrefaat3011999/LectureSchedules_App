import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AllSchedulesComponent } from './All Schedules/AllSchedules.component';
import { AddSchedulesComponent } from './Add Schedules/AddSchedules.component';
import { SchedulesRoutingModule } from './Schedules-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddSchedulesComponent, AllSchedulesComponent, DialogComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SchedulesModule {}

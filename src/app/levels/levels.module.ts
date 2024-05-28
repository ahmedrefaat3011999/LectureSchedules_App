import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { LevelsRoutingModule } from './Levels-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LevelsComponent, AddLevelComponent],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LevelsModule {}

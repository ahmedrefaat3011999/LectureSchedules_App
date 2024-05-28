import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-AddSchedules',
  templateUrl: './AddSchedules.component.html',
  styleUrls: ['./AddSchedules.component.scss'],
})
export class AddSchedulesComponent implements OnInit {
  constructor(private httpserv: HttpService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllLevels();
    this.getAllSemesters();
    this.getAllTeachers();
    this.getAllHalls();
    this.getAllSubjects();
    this.getAllDays();
  }
  selectedSemester: string;
  selectedLevel: number;
  selectedData: any;
  subjects: any[] = [];
  teachers: any[] = [];
  halls: any[] = [];
  levels: any[] = [];
  semester: any[] = [];
  Days: any[] = [];
  AlllectureSchedules: any[] = [];
  lectureSchedules: any[][] = [[]];
  rowIndex: number = 0;

  getAllLevels() {
    this.httpserv.GET('levels').subscribe((data) => {
      this.levels = data;
      console.log(this.levels);
    });
  }

  getAllSubjects() {
    this.httpserv.GET('subjects').subscribe((data) => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }

  getAllTeachers() {
    this.httpserv.GET('teachers').subscribe((data) => {
      this.teachers = data;
      console.log(this.teachers);
    });
  }

  getAllHalls() {
    this.httpserv.GET('halls').subscribe((data) => {
      this.halls = data;
      console.log(this.halls);
    });
  }

  getAllSemesters() {
    this.httpserv.GET('semesters').subscribe((data) => {
      this.semester = data;
      console.log(this.semester);
    });
  }

  getAllDays() {
    this.httpserv.GET('days').subscribe((data) => {
      this.Days = data;
      console.log(this.Days);
    });
  }

  addRow(): void {
    this.lectureSchedules.push([]);
  }

  deleteRow(): void {
    this.lectureSchedules.pop();
  }



  openDialog(rowIndex: number, colIndex: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { rowIndex, colIndex },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { teacher, hall, subject, clockFrom, clockTo, rowIndex, colIndex } = result;
  
        // Check if teacher is already assigned in the same time slot
        const teacherConflict = this.lectureSchedules.some(
          (row, index) =>
            index !== rowIndex && row[colIndex]?.teacher === teacher && row[colIndex]?.clockTo >= clockFrom && row[colIndex]?.clockFrom <= clockTo
        );
  
        // Check if hall is already assigned in the same time slot
        const hallConflict = this.lectureSchedules.some(
          (row, index) =>
            index !== rowIndex && row[colIndex]?.hall === hall && row[colIndex]?.clockTo >= clockFrom && row[colIndex]?.clockFrom <= clockTo
        );
  
        if (!teacherConflict && !hallConflict) {
          if (!this.lectureSchedules[rowIndex]) {
            this.lectureSchedules[rowIndex] = [];
          }
  
          this.lectureSchedules[rowIndex][colIndex] = {
            teacher,
            hall,
            subject,
            day: this.Days[colIndex],
            clockFrom,
            clockTo,
          };
  
          this.updateClockValue(clockFrom, rowIndex, colIndex, 'clockFrom');
          this.updateClockValue(clockTo, rowIndex, colIndex, 'clockTo');

        } else {
          // Display error message or handle the conflict
          console.log('Teacher or Hall conflict!');
        }
      }
    });
  }

 



  updateClockValue(value: string, rowIndex: number, colIndex: number, property: string): void {
    if (!this.lectureSchedules[rowIndex]) {
      this.lectureSchedules[rowIndex] = [];
    }

    if (!this.lectureSchedules[rowIndex][colIndex]) {
      this.lectureSchedules[rowIndex][colIndex] = {};
    }

    this.lectureSchedules[rowIndex][colIndex][property] = value;
  }

  AddLecturesToTables() {
    const postData = {
      lectureSchedules: this.lectureSchedules,
      selectedSemester: this.selectedSemester,
      selectedLevel: this.selectedLevel,
      id:1
    };
    console.log(postData);
    
    this.httpserv.POST('lectureschedule', postData).subscribe(
      (data) => {
        console.log('Data posted successfully:', data);
      },
      (err) => {
        console.log('Error occurred while posting data:', err);
      }
    );
  }}
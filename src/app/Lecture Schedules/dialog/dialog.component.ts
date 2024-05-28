import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  selectedTeacher: string;
  selectedHall: string;
  selectedSubject: string;
  rowIndex: number; // Added variable to store the row index
  colIndex: number; // Added variable to store the column index
  levels: any[] = [];
  semester: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];
  halls: any[] = [];
  constructor(private httpserv: HttpService,   public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getAllSubjects();
    this.getAllTeachers();
    this.getAllHalls();
    this.getAllSemesters()
    this.getAllLevels()
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
  getAllLevels() {
    this.httpserv.GET('levels').subscribe((data) => {
      this.levels = data;
      console.log(this.levels);
    });
  }
  closeDialog(): void {
    this?.dialogRef.close();
  }
  saveData(): void {
    const selectedData = {
      teacher: this?.selectedTeacher,
      hall: this?.selectedHall,
      subject: this?.selectedSubject,
      rowIndex: this?.data.rowIndex,
      colIndex: this?.data.colIndex
    };
    this.dialogRef.close(selectedData);
  }
}

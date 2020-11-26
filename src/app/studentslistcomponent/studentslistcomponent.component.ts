import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import {StudentsService} from '../students.service';

@Component({
  selector: 'app-studentslistcomponent',
  templateUrl: './studentslistcomponent.component.html',
  styleUrls: ['./studentslistcomponent.component.css']
})
export class StudentslistcomponentComponent implements OnInit {
  allStudent: Student[];
  constructor( public studentService:StudentsService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent(){
    this.studentService.getAllStudents().subscribe(
      (data:Student[])=>{
        this.allStudent=data;
      });

  }
}

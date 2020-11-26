import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Student } from '../model/student.model';
import {StudentsService} from './../students.service';

@Component({
  selector: 'app-studentscomponent',
  templateUrl: './studentscomponent.component.html',
  styleUrls: ['./studentscomponent.component.css']
})
export class StudentscomponentComponent implements OnInit {

  constructor(public studentService:StudentsService ) { }

  ngOnInit(): void {
  }
   createStudent(stu:Student){
     this.studentService.createStudent(stu).subscribe()
   }
}

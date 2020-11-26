import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Student} from './model/student.model';
import { Observable } from 'rxjs';

const headerOpition={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url='http://localhost:3000/Student';
  currentStudent:Student={
    firstName:'',
    lastName:'',
    class:'',
    mobile:null,
    address:'',
    id:null
  }
  constructor(public http:HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.url,headerOpition)
  }

  createStudent(stu:Student):Observable<Student>{
    return this.http.post<Student>(this.url,stu,headerOpition)
  }
}

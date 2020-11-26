import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form-validation-component',
  templateUrl: './form-validation-component.component.html',
  styleUrls: ['./form-validation-component.component.css']
})
export class FormValidationComponentComponent implements OnInit {

  constructor( public formBuild:FormBuilder) { }
  rForm:FormGroup;

  ngOnInit(): void {
    this.rForm=this.formBuild.group({
      'name':[null,Validators.required],
      'email':[null, Validators.required],
      'mobile':[null, Validators.required],
      'password':[null ,Validators.compose([Validators.required])]
    })

  }
  // use only Reactive forms  forms this function
 reactive_form_submit(){
  // console.log("Reactive form tamplates");
  console.log(this.rForm.controls)
  // this.rForm.reset(this.rForm.value)
 }
 resetData(){
   this.rForm.reset()
 }

}

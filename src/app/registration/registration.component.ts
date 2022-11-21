import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  requiredForm!: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.requiredForm = this.formBuilder.group({
      firstname: ['', [Validators.minLength(5), Validators.maxLength(50), Validators.required]],
      lastname: ['', [Validators.minLength(5), Validators.maxLength(50), Validators.required]],
      email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.required, Validators.email]],
      phone: ['', [Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.minLength(10),]],
      orgname: ['', [Validators.maxLength(1000)]],
    orgaddress: ['', [Validators.maxLength(1000)]],
    password: ['', [Validators.maxLength(16), Validators.minLength(8)]],
    date: ['', Validators.required]
    })  
  }
  
  get getControl(){
    return this.requiredForm.controls;
  }
  
  onSubmit(){
    console.log(this.requiredForm.value);
  }
  
  // title = 'mdf';
 
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  // requiredForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
  //   lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('null', [Validators.pattern(this.emailPattern), Validators.email]),
  //   phone: new FormControl('', Validators.required),
  //   orgname: new FormControl('', Validators.required),
  //   orgaddress: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // })

  // onSubmit()
  // {
  //    console.log(this.requiredForm.value);
  //    this.requiredForm.get("email")?.value;
  // }
  



}

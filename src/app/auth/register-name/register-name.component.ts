import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { PAGE } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-register-name',
  templateUrl: './register-name.component.html',
  styleUrls: ['./register-name.component.scss']
})
export class RegisterNameComponent implements OnInit {
  nameForm !: FormGroup
  showError = false;
  constructor(private formBuilder : FormBuilder , private router: Router, private localService : LocalService){
    
  }
  
  
  ngOnInit() {
  
    this.nameForm = this.formBuilder.group(
      {
      
        firstName: ['', [Validators.required , Validators.minLength(3)]],
        lastName: ['', [Validators.required , Validators.minLength(3)]],
      })
   
  }
 
  onSubmit(){
    if(this.nameForm.valid){
this.localService.storeName(this.nameForm.value.firstName,this.nameForm.value.lastName)
      this.router.navigate([PAGE.REGISTER_DOB]);
    } 
  }
}

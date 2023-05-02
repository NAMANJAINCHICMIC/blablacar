import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { PAGE } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-register-dob',
  templateUrl: './register-dob.component.html',
  styleUrls: ['./register-dob.component.scss']
})
export class RegisterDobComponent implements OnInit {
  dobForm !: FormGroup
  showError = false;
  constructor(private formBuilder : FormBuilder , private router: Router , private localService : LocalService){
    
  }
  
  
  ngOnInit() {
  
    this.dobForm = this.formBuilder.group(
      {
       
        dateOfBirth: ['', [Validators.required, this.validateDOB]]
    });
  }

  validateDOB(control: FormControl) {
    const dob = new Date(control.value);
    const now = new Date();
    const eighteenYearsAgo = now.getFullYear() - 18;
    const minimumDOB = new Date(eighteenYearsAgo, now.getMonth(), now.getDate());

    if (isNaN(dob.getTime())) {
      return { invalidDate: true };
    }

    if (dob > now) {
      return { futureDate: true };
    }

    if (dob > minimumDOB) {
      return { minimumAge: true };
    }

    return null;
  }

  onSubmit(){
    if(this.dobForm.valid){
this.localService.storeDOB(this.dobForm.value.dateOfBirth);
      this.router.navigate([PAGE.REGISTER_PASSWORD]);
    } 
  }
}

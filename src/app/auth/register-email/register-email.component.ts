import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/local.service';
import { PAGE } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.scss']
})
export class RegisterEmailComponent implements OnInit {
  emailForm !: FormGroup
  showError = false;
  constructor(private formBuilder : FormBuilder , private router: Router , private localService : LocalService , private authService : AuthService){
    
  }
  
  
  ngOnInit() {
  
    this.emailForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]

      })
   
  }
 
  onSubmit(){
    if(this.emailForm.valid){

this.authService.checkEmail(this.emailForm.value.email).subscribe(res => 
  {

    console.log(res)
    this.localService.storeEmail(this.emailForm.value.email)
    this.router.navigate([PAGE.REGISTER_NAME]);
  },(err) =>{
    console.log(err.error.msg)
  }) } 
  }
}

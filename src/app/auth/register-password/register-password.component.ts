import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/local.service';
import { PAGE, REGEX } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss']
})
export class RegisterPasswordComponent implements OnInit {
  passwordForm !: FormGroup
  showError = false;
  visible=true;
  viewPassword(){
    this.visible = !this.visible;
  }
  constructor(private formBuilder : FormBuilder , private router: Router , private authService : AuthService , private localService : LocalService){
    
  }
  
  
  ngOnInit() {
  
    this.passwordForm = this.formBuilder.group(
      {
       
        password: ['',[Validators.required , Validators.minLength(8),Validators.pattern(REGEX.PASSWORD)]],

      })
   
  }
 
  onSubmit(){
    if(this.passwordForm.valid){
    this.authService.register(this.passwordForm.value.password).subscribe(res =>{
      console.log(res)
this.localService.storeToken(res.token);
      this.router.navigate([PAGE.HOME]);
    })
    } 
  }
}

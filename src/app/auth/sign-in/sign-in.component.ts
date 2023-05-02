import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/local.service';
import { PAGE, REGEX } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm !: FormGroup
  showError = false;
  visible=true;
  viewPassword(){
    this.visible = !this.visible;
  }
  constructor(private formBuilder : FormBuilder , private router: Router , private localService : LocalService , private authService : AuthService){
    
  }
  
  
  ngOnInit() {
  
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required , Validators.minLength(8),Validators.pattern(REGEX.PASSWORD)]],

      })
   
  }
 
  onSubmit(){
    if(this.loginForm.valid){
      // this.localService.storeEmail(this.loginForm.value.email)    
      this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe((res:any)=>{
console.log(res);
this.localService.storeToken(res.token);
        this.router.navigate([PAGE.HOME]);
      })
    } 
  }
  onClickSignUp(){
    this.router.navigate([PAGE.SIGN_UP]);
  }
  onClickForget(){

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE } from 'src/app/utils/constant/constant';

@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.component.html',
  styleUrls: ['./register-option.component.scss']
})
export class RegisterOptionComponent {
constructor(private router: Router){}
  onClickEmail(){
    this.router.navigate([PAGE.REGISTER_EMAIL]);
  }
  onClickSignIn(){
    this.router.navigate([PAGE.SIGN_IN]);
  }
}

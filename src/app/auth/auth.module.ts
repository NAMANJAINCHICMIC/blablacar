import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterNameComponent } from './register-name/register-name.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';
import { RegisterDobComponent } from './register-dob/register-dob.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    RegisterEmailComponent,
    RegisterNameComponent,
    RegisterPasswordComponent,
    RegisterDobComponent,
    RegisterOptionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

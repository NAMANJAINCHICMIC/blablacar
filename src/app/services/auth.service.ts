import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { APIS } from '../utils/constant/constant';
import { environment } from 'src/environment';
import { LocalService } from './local.service';
import { signUpData } from '../utils/model/signUpData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private localService : LocalService) { }
checkEmail(email :string){
  return this.http.get(
    environment.AUTH_API + APIS.AUTH.CHECK_EMAIL + '?email='+email,
    // email
  );
}
 
  login(email: string| null | undefined, password: string| null | undefined): Observable<any> {
    return this.http.post(
     environment.AUTH_API + APIS.AUTH.SIGN_IN,
      {
        email,
        password,
      }
     
    );
  }

  register(password : string): Observable<any> {
    let  signUpdata : signUpData = this.localService.getSignUpData()
        signUpdata.password = password;
    return this.http.post(
      environment.AUTH_API + APIS.AUTH.SIGN_UP,
  signUpdata
    );
  }
  forgetPassword(email: string| null | undefined): Observable<any> {
    return this.http.post(
      environment.AUTH_API + APIS.AUTH.FORGOT_PASSWORD + '?email='+email,
      
      email
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  storeEmail(emailValue:string){
    localStorage.setItem('email',emailValue)
  }
  getEmail(){
    return localStorage.getItem('email')
  }
  storeName(firstName:string , lastName : string){
    localStorage.setItem('first_name',firstName)
    localStorage.setItem('last_name',lastName)
  }
  getFirstName(){
    return localStorage.getItem('first_name')
  }
  getLastName(){
    return localStorage.getItem('last_name')
  }
  storeDOB(dob:string){
    localStorage.setItem('dob',dob)
  }
  getDOB(){
    return localStorage.getItem('dob')
  }

  storeResetToken(tokenValue:string){
    localStorage.setItem('resetToken',tokenValue)
  }

  getResetToken(){
    return localStorage.getItem('resetToken')
  }
  isNotLoggedIn():boolean{
    return !localStorage.getItem('token')
  }
  getSignUpData(){
    const email = this.getEmail();
    const first_name = this.getFirstName();
    const last_name = this.getLastName();
    const dob = this.getDOB();
    const data = {
      email :email,
      first_name :first_name,
      last_name : last_name,
      dob : dob,

    }
    return data
  }
}

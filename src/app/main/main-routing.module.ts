import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AuthInterceptor } from '../utils/interceptor/auth.interceptor';

// import { AuthInterceptor } from '../utils/interceptors/auth.interceptor';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'main',
    component: MainComponent,
    children:[
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
            {
            path: 'home',
            component: HomeComponent,
            // canActivate: [AuthGuard]
          },
          
          {
            path: 'view-profile',
            component: ViewProfileComponent,
            // canActivate: [AuthGuard],
          },
          {
            path: 'update-profile',
            component: UpdateProfileComponent,
            // canActivate: [AuthGuard],
          },
          {
            path: 'change-password',
            component: ChangePasswordComponent,
            // canActivate: [AuthGuard],
          },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ]
})
export class MainRoutingModule { }
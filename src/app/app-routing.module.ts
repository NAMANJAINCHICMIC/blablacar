import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './utils/interceptor/auth.interceptor';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
    // canActivate: [AuthGuard]
  },
  {
    path:'main',
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[

    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ]

})
export class AppRoutingModule { }

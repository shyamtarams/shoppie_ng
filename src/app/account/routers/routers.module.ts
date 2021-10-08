import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes=[
  { path: 'account', component: AccountComponent,
  children:[
    {path:'login',component: LoginComponent},
    {path:'signup',component: SignupComponent},
    {path:'logout',component: LoginComponent},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutersModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { AccountComponent } from './account.component';
// import { LoginComponent } from './login/login.component';

// const routes: Routes=[
//   { path: '', component: AccountComponent,
//   children:[
//     {path:'login',component: LoginComponent},
//     ]
//   },
// ];


// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class accountRouterModule { }


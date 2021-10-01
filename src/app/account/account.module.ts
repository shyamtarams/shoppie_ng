import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { RoutersModule } from './routers/routers.module';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    AccountComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RoutersModule,
    SharedModule,
  ]
})
export class AccountModule { }
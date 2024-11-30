import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component'; // Caminho correto para LoginComponent
import { AuthService } from './services/auth.service'; // Caminho correto para AuthService
import { AuthInterceptor } from '../interceptors/auth.interceptor'; // Caminho correto para AuthInterceptor

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginComponent // Importando o componente standalone
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthenticationModule { }

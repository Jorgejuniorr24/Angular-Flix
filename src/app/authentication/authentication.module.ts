// authentication.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Corrigindo os caminhos relativos
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from '../components/services/auth.service';
import { AuthInterceptor } from '../interceptors/auth.interceptor.ts';

@NgModule({
  declarations: [
    LoginComponent  // Declaração do componente Login
  ],
  imports: [
    CommonModule,        // Módulo comum para funcionalidades básicas
    FormsModule,         // Módulo para formulários tradicionais
    ReactiveFormsModule, // Módulo para formulários reativos (necessário para o formulário no LoginComponent)
    HttpClientModule     // Módulo para fazer requisições HTTP
  ],
  providers: [
    AuthService,  // Serviço de autenticação
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Interceptador para adicionar cabeçalhos de autenticação
      multi: true  // Permite múltiplos interceptadores
    }
  ]
})
export class AuthenticationModule { }

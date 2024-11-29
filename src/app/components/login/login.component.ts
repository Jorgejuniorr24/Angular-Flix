import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('email')?.value || '',
        this.loginForm.get('password')?.value || ''
      ).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error: any) => {
          this.errorMessage = error.message;
        }
      );
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.errorMessage = error.message;
      }
    );
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.errorMessage = error.message;
      }
    );
  }
}

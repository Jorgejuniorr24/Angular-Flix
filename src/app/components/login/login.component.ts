import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';  // Remova a extensão .ts
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;

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
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      ).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
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
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}

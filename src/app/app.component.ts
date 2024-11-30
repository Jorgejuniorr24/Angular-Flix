import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './authentication/services/auth.service'; // Caminho corrigido

@Component({
  selector: 'app-root',
  standalone: true,  // Tornando o componente standalone
  imports: [RouterOutlet],  // Importando módulos necessários aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFlix';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}

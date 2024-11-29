import { Routes } from '@angular/router';
import { HomeComponent } from './components/Início/Início.component';
import { ExibiçãoDeVideoComponent } from './components/Exibição de vídeo/Exibição-de-vídeo.component'; // Importando ExibiçãoDeVideoComponent
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'video/:id',
    component: ExibiçãoDeVideoComponent,
  },
  {
    path: 'login',
    component: LoginComponent, // Adicionando a rota para o LoginComponent
  },
  {
    path: 'video-display',
    component: ExibiçãoDeVideoComponent, // Adicionando a rota para ExibiçãoDeVideoComponent
  }
];

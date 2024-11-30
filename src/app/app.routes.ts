import { Routes } from '@angular/router';
import { HomeComponent } from './components/Início/Início.component';
import { ExibiçãoDeVideoComponent } from './components/Exibição de vídeo/Exibição-de-vídeo.component'; // Importando ExibiçãoDeVideoComponent
import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component'; // Caminho corrigido
import { AuthGuard } from './authentication/guards/auth.guard'; // Caminho corrigido

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
    component: LoginComponent,
  },
  {
    path: 'video-display',
    component: ExibiçãoDeVideoComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard], // Protege a rota com AuthGuard
  }
];

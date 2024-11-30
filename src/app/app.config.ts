import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authConfig } from './authentication/auth0.config'; // Importando a configuração do Auth0

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(), // Corrigido para chamar apenas uma vez
    authConfig, // Incluindo a configuração do Auth0
  ]
};

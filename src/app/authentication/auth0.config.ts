import { provideAuth0 } from '@auth0/auth0-angular';

export const authConfig = provideAuth0({
  domain: 'dev-camjborlxjl35ecr.us.auth0.com',
  clientId: 'EzDBwUtzffIZrZr79TodfrhbTv7V1ZmZ',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: 'https://dev-camjborlxjl35ecr.us.auth0.com/api/v2/',
    scope: 'openid profile email offline_access',
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
});

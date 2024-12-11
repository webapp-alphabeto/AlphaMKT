// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceApi: 'http://10.10.0.14:80/v1/'
};


export const TOKEN_STORAGE = 'NOME_CHAVE_TOKEN';
export const PROFILE_STORAGE = 'PROFILE';
export const SCREEN_LOCK = { 'X-PO-Screen-Lock': 'true' };
export const NO_MESSAGE = { 'X-PO-No-Message': 'true' };
export const SCREEN_LOCK_NO_MESSAGE = { 
  'X-PO-Screen-Lock': 'true', 
  'X-PO-No-Message': 'true' 
};

export const CHECK_IN = 'CHECK_IN';

export const SEM_FOTO = 'https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg'

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

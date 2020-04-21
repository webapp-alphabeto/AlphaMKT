// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceApi: 'http://localhost:5000/v1/'
};

export const SCREEN_LOCK = { 'X-PO-Screen-Lock': 'true' };
export const NO_MESSAGE = { 'X-PO-No-Message': 'true' };
export const SCREEN_LOCK_NO_MESSAGE = { 
  'X-PO-Screen-Lock': 'true', 
  'X-PO-No-Message': 'true' 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

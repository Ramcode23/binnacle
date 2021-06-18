// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD3isiosHWVuxksGcV0oce0llpjAcEqXh0',
    authDomain: 'binnacle-2fd3a.firebaseapp.com',
    projectId: 'binnacle-2fd3a',
    storageBucket: 'binnacle-2fd3a.appspot.com',
    messagingSenderId: '687673977731',
    appId: '1:687673977731:web:3525103f97be34e4ce64b6'
  },
  ngx: {
    enableFirestoreSync: true, // enable/disable autosync users with firestore
    toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    authGuardFallbackURL: '/login', // url for unauthenticated users - to use in combination with canActivate feature on a route
    authGuardLoggedInURL: '/main/locations', // url for authenticated users - to use in combination with canActivate feature on a route
    passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
    passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true,
    enableEmailVerification: true, // default: true
    // tslint:disable-next-line:max-line-length
    useRawUserCredential: true, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
  },
  agmapikey: 'AIzaSyDcjR_f0yu0qBIASpx8CL73f8Duhq2bwcs'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

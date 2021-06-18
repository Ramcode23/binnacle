import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from 'src/environments/environment';
import { PageModule } from './page/page.module';
import { AuthModule } from './auth/auth.module';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    PageModule,
    AuthModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcjR_f0yu0qBIASpx8CL73f8Duhq2bwcs'
    }),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'binnacle', environment.ngx),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

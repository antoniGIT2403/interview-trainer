import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzAngularComponent } from './quizz-angular/quizz-angular/quizz-angular.component';
import { LandingComponent } from './landing/landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReviewComponent } from './shared/review/review.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuizzAngularComponent,
    LandingComponent,
    DashboardComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    AngularFireDatabaseModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

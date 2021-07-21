import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LandingComponent } from './landing/landing/landing.component';
import { QuizzAngularComponent } from './quizz-angular/quizz-angular/quizz-angular.component';

const routes: Routes = [

  { path: 'home', component: LandingComponent },
  { path: 'quizz-angular', component: QuizzAngularComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

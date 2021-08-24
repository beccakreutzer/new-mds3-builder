import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent},
  { path: 'admission', component: AssessmentComponent },
  { path: 'quarterly', component: AssessmentComponent },
  { path: 'annual', component: AssessmentComponent },
  { path: 'change_in_status', component: AssessmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

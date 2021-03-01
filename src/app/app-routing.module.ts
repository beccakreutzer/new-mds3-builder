import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { NcAssessmentComponent } from './nc-assessment/nc-assessment.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent},
  { path: 'admission', component: NcAssessmentComponent },
  { path: 'quarterly', component: NcAssessmentComponent },
  { path: 'annual', component: NcAssessmentComponent },
  { path: 'change_in_status', component: NcAssessmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

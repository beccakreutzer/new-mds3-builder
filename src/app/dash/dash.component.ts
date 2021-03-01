import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  admissionItems = [
    { 
      label: 'app.assessments.labels.admission',
      route: '/admission'
    },{ 
      label: 'app.assessments.labels.admission_co',
      route: '/admission_correction'
    },{
      label: 'app.assessments.labels.admission_ia',
      route: '/admission_inactivation'
    }];

  quarterlyItems = [
    {
      label: 'app.assessments.labels.quarterly',
      route: '/quarterly'
    },{ 
      label: 'app.assessments.labels.quarterly_co',
      route: '/quarterly_correction'
    },{
      label: 'app.assessments.labels.quarterly_ia',
      route: '/quarterly_inactivation'
    }];
  
  annualItems = [
    {
      label: 'app.assessments.labels.annual',
      route: '/annual'
    },{
      label: 'app.assessments.labels.annual_co',
      route: '/annual_co'
    }, {
      label: 'app.assessments.labels.annual_ia',
      route: '/annual_ia'
    }
  ]

  changeItems = [
    {
      label: 'app.assessments.labels.change_in_status',
      route: '/change_in_status'
    },{
      label: 'app.assessments.labels.change_in_status_co',
      route: '/change_in_status_co'
    }, {
      label: 'app.assessments.labels.change_in_status_ia',
      route: '/change_in_status_ia'
    }
  ]

  ngOnInit(): void {
  }

}

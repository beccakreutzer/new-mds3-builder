import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-nc-assessment',
  templateUrl: './nc-assessment.component.html',
  styleUrls: ['./nc-assessment.component.scss']
})
export class NcAssessmentComponent implements OnInit {
  
  AssessmentType: any = [
    {
      label: "NC - Admission, Annual, Significant Change", 
      value: "nc"
    },{
      label: "NQ - Quarterly",
      value: "nq"
    },{
      label: "NT - Entry, Death in Facility",
      value: "nt"
    },{
      label: "ND - Discharge (Return Anticipated/Return Not Anticipated",
      value: "nd"
    },{
      label: "NP - Nursing Home PPS",
      value: "np"
    }, {
      label: "IPA - Interim Payment",
      value: 'ipa'
    }, {
      label: "XX - Inactivation",
      value: 'xx'
    }
  ]

  ncForm!: FormGroup; 
  assessmentType!: string;

  constructor(private fb: FormBuilder, public router: Router) {
    let currentUrl = router.url

    if (currentUrl === "/admission" || currentUrl === "/annual" || currentUrl === "/change_in_status") {
      this.assessmentType = "nc";
    } else if (currentUrl === "/quarterly") {
      this.assessmentType = "nq"
    }
  }
  
  ngOnInit() {
    console.log(this.assessmentType)
    
    this.ncForm = this.fb.group({
      itmSbstCd: [''],
      stateCd:   ['CO'],
      facId:     ['whisper']
    })

    this.ncForm.valueChanges.subscribe(newVal => console.log(newVal))
  }

}

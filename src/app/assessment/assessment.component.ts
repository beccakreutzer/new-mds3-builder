import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { XmlService } from '../services/xml.service'
import { DropdownOptions } from './assessment.constants';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})

export class AssessmentComponent implements OnInit {
  options = DropdownOptions
  assessment!: FormGroup; 
  assessmentType!: string;
  filename!: string;
  
  ngOnInit() {

    this.assessment = this.fb.group({
      itm_sbst_cd: this.assessmentType,
      state_cd:    'CO',
      fac_id:      'whisper',
      sectionA:    []
    })
    
  }

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private xmlService: XmlService) {
    let currentUrl = router.url

    switch (currentUrl) {
      case '/admission':
        this.assessmentType = "NC";
        this.filename = "admission";
        break;
      case '/annual':
        this.assessmentType = "NC";
        this.filename = "annual";
        break
      case '/change_in_status':
        this.assessmentType = "NC";
        this.filename = "change_in_status";
        break;
      case '/quarterly':
        this.assessmentType = "NQ";
        this.filename = "quarterly"
        break 
    }
  }

  download() {
    let assessment = this.assessment 
    let filename = this.filename; 
     
    this.xmlService.download(assessment, filename)
  }

}

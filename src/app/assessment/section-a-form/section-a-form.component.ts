import { Component, forwardRef, OnDestroy } from '@angular/core';
import { 
  ControlValueAccessor,
  FormBuilder, 
  FormGroup,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR 
} from '@angular/forms';
import { Subscription } from 'rxjs'

export interface SectionAFormValues {
  a0100b: string;
}

@Component({
  selector: 'app-section-a-form',
  templateUrl: './section-a-form.component.html',
  styleUrls: ['./section-a-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SectionAFormComponent),
      multi: true
    },{
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SectionAFormComponent),
      multi: true
    }
  ]
})

export class SectionAFormComponent implements ControlValueAccessor, OnDestroy {

  sectionA!: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): SectionAFormValues {
    return this.sectionA.value
  }

  set value(value: SectionAFormValues) {
    this.sectionA.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get govIdControl() {
    return this.sectionA.controls.a0100b;
  }

  constructor(private fb: FormBuilder) {
    this.sectionA = this.fb.group({
      a0100b: ['whisper']
    });

    this.subscriptions.push(
      this.sectionA.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
   }

   ngOnDestroy() {
     this.subscriptions.forEach(s => s.unsubscribe());
   }

   onChange: any = () => {};
   onTouched: any = () => {}

   registerOnChange(fn: any) {
     this.onChange = fn
   }

   writeValue(value:any) {
     if (value) {
       this.value = value
     }
     if (value === null) {
       this.sectionA.reset();
     }
   }

   registerOnTouched(fn:any) {
     this.onTouched = fn;
   }

   validate(_: FormControl) {
     return this.sectionA.valid ? null : { sectionA: {valid: false} }
   }


}

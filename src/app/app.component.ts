import { Component, VERSION } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'FormGroup Demo'

//creating instance of FormGroup with default values
  formgrp:FormGroup=new FormGroup({
  firstName:new FormControl(),
  lastName:new FormControl(),
  age:new FormControl()
  });

  //Validation
  // formgrp:FormGroup=new FormGroup({
  // firstName:new FormControl('',[Validators.required]),
  // lastName:new FormControl('',[Validators.required]),
  // age:new FormControl(26,[Validators.required,Validators.min(20)])
  // });


get formgroupcontrols(){
  return this.formgrp.controls;
}
//method to change the nameControl Value
nameChange()
{
  alert(`Value before button click---------> ${JSON.stringify(this.formgrp.value)}`)
  this.formgrp.setValue({firstName:'Bhaskar',lastName:'Reddy',age:30});
  alert(`Value after button click----------> ${JSON.stringify(this.formgrp.value)}`)
}


}

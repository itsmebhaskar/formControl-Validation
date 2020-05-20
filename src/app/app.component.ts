import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'FormControl Demo'

//creating instance of FormControl with default value John
  nameControl:FormControl=new FormControl('John');

  //Validation
  // nameControl:FormControl=new FormControl('John',[Validators.required,Validators.maxLength(5)]);

//method to change the nameControl Value
nameChange()
{
  alert(`Value before button click---------> ${this.nameControl.value}`)
  this.nameControl.setValue('Jay');
  alert(`Value after button click----------> ${this.nameControl.value}`)
}


}

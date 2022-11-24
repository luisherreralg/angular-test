import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formTest = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  isToggle = false;

  toggleHandler() {
    if (this.formTest.value.name !== '' && this.formTest.value.surname !== '') {
      this.isToggle = !this.isToggle;
    }
  }
}

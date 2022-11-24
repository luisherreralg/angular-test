import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-list',
  templateUrl: './form-add-list.component.html',
  styleUrls: ['./form-add-list.component.css'],
})
export class FormAddListComponent {
  itemsList: string[] = [];

  formActive = false;
  formAdd = new FormGroup({
    thing: new FormControl('', Validators.required),
  });

  handleAdd() {
    if (this.formAdd.value.thing !== '') {
      this.itemsList.push(this.formAdd.value.thing as string);
      this.formAdd.reset();
      this.formActive = true;
    }
  }

  handleDelete(item: string) {
    this.itemsList = this.itemsList.filter((i) => i !== item);
  }
}

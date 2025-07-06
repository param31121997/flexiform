import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { DynamicForm } from '../model/models';

@Component({
  selector: 'app-create-form',
  standalone: true,
 imports: [CommonModule, 
     FormsModule,  
     MatToolbarModule,
     MatSidenavModule,
     MatButtonModule,
     MatIconModule,
     MatMenuModule,
     MatFormFieldModule,
     MatInputModule,
     MatListModule,
     MatSelectModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent implements OnInit, OnChanges{
@Input() selectedItem!:DynamicForm;
@Output() saveForm = new EventEmitter<DynamicForm>();
formName:string='';
formType:string=""
formDescription:string='';
  formData = {
    name: '',
    description: '',
    formType:''
  };
  createdBy: string = 'User';
  createdDate: Date = new Date();

constructor(){

}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedItem'] && changes['selectedItem'].currentValue) {
      this.selectedItem = changes['selectedItem'].currentValue as DynamicForm;
      this.formName = this.selectedItem.formName;
      // Use real form types
      const allowedTypes = ['Education', 'Health', 'Sports', 'Other'];
      this.formType = allowedTypes.includes(this.selectedItem.formType) ? this.selectedItem.formType : allowedTypes[0];
      this.formDescription = this.selectedItem.formDescription;
    }
  }
  ngOnInit(): void {
    this.formName = this.selectedItem.formName;
    const allowedTypes = ['Education', 'Health', 'Sports', 'Other'];
    this.formType = allowedTypes.includes(this.selectedItem.formType) ? this.selectedItem.formType : allowedTypes[0];
    this.formDescription = this.selectedItem.formDescription;
  }

  // Update selectedItem when fields change
onTypeChange(value: string) {
  this.formType = value;
  this.selectedItem.formType = value;
}
onDescriptionChange(value: string) {
  this.formDescription = value;
  this.selectedItem.formDescription = value;
}

onSave() {
  // Update selectedItem with latest values
  this.selectedItem.formType = this.formType;
  this.selectedItem.formDescription = this.formDescription;
  this.saveForm.emit(this.selectedItem);
}

}

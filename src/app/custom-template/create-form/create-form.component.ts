import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
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
     MatListModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent implements OnInit, OnChanges{
@Input() selectedItem!:DynamicForm;
formName:string='';
formType:string=""
formDescription:string='';
  formData = {
    name: '',
    description: '',
    formType:''
  };

constructor(){

}
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItem = changes['selectedItem'].currentValue as DynamicForm;
  }
  ngOnInit(): void {
    this.formName=this.selectedItem.formName
    this.formType=this.selectedItem.formType
    this.formDescription=this.selectedItem.formDescription

  }

}

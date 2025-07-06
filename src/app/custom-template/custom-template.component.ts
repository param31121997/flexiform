import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { CreateFormComponent } from "./create-form/create-form.component";
import { DynamicForm } from './model/models';

@Component({
  selector: 'app-custom-template',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    NavBarComponent,
    CreateFormComponent,
  ],
  templateUrl: './custom-template.component.html',
  styleUrl: './custom-template.component.css',
})
export class CustomTemplateComponent {
  sidebarOpened = true;
  sidebarMode: 'side' | 'over' = 'side';
  searchTerm = '';
  items: DynamicForm[] = [
    {
      id:'123',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
    {
      id:'456',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
    {
      id:'567',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
    {
      id:'678',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
    {
      id:'789',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
    {
      id:'235',
      formName: 'Item 1',
      formType: 'Health',
      formDescription: 'test test',
    } as DynamicForm,
  ];
  selectedItem!:DynamicForm;

  ngOnInit() {
    this.onResize(window.innerWidth);
    window.addEventListener('resize', () => this.onResize(window.innerWidth));
  }

  onResize(width: number) {
    if (width <= 767) {
      this.sidebarMode = 'over';
      this.sidebarOpened = false;
    } else {
      this.sidebarMode = 'side';
      this.sidebarOpened = true;
    }
  }

  selectItem(item: DynamicForm) {
    this.selectedItem = item;
  }

  toggleSidenav() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { MatMenuModule } from '@angular/material/menu';
import { CreateFormComponent } from "./create-form/create-form.component";
import { DynamicForm } from './model/models';
import { FormService } from './form.service';
import { MatSelectModule } from '@angular/material/select';

// Extend DynamicForm type to allow 'highlighted' property for template binding
export interface DynamicFormWithHighlight extends DynamicForm {
  highlighted?: boolean;
}

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
    MatSelectModule,
    NavBarComponent,
    CreateFormComponent,
  ],
  templateUrl: './custom-template.component.html',
  styleUrl: './custom-template.component.css',
})
export class CustomTemplateComponent implements OnInit {
  sidebarOpened = true;
  sidebarMode: 'side' | 'over' = 'side';
  searchTerm: string = '';
  items: DynamicFormWithHighlight[] = [
    {
      id: '1',
      formName: 'Student Registration',
      formType: 'Education',
      formDescription: 'Form for new student registration. Please provide all required details including previous academic records, emergency contacts, and any special needs.',
    } as DynamicFormWithHighlight,
    {
      id: '2',
      formName: 'Health Checkup',
      formType: 'Health',
      formDescription: 'Annual health checkup form. Include recent medical history, allergies, and current medications for a comprehensive review.',
    } as DynamicFormWithHighlight,
    {
      id: '3',
      formName: 'Sports Enrollment',
      formType: 'Sports',
      formDescription: 'Form for sports club enrollment. Specify preferred sports, previous experience, and any health restrictions.',
    } as DynamicFormWithHighlight,
    {
      id: '4',
      formName: 'Library Membership',
      formType: 'Education',
      formDescription: 'Library membership application. Provide contact details and preferred genres for personalized recommendations.',
    } as DynamicFormWithHighlight,
    {
      id: '5',
      formName: 'Medical History',
      formType: 'Health',
      formDescription: 'Detailed medical history form. List all past illnesses, surgeries, and family medical background.',
    } as DynamicFormWithHighlight,
    {
      id: '6',
      formName: 'Event Registration',
      formType: 'Other',
      formDescription: 'Register for upcoming events. Indicate event preferences and dietary restrictions if any.',
    } as DynamicFormWithHighlight,
    {
      id: '7',
      formName: 'Parent Consent',
      formType: 'Education',
      formDescription: 'Consent form for parents. Authorize participation in school activities and field trips.',
    } as DynamicFormWithHighlight,
    {
      id: '8',
      formName: 'Fitness Assessment',
      formType: 'Sports',
      formDescription: 'Assessment for fitness programs. Include fitness goals, current activity level, and any injuries.',
    } as DynamicFormWithHighlight,
    {
      id: '9',
      formName: 'Vaccination Record',
      formType: 'Health',
      formDescription: 'Record of vaccinations. Attach copies of vaccination certificates and note any adverse reactions.',
    } as DynamicFormWithHighlight,
    {
      id: '10',
      formName: 'Alumni Feedback',
      formType: 'Other',
      formDescription: 'Feedback form for alumni. Share experiences, suggestions, and willingness to participate in future events.',
    } as DynamicFormWithHighlight,
  ];
  selectedItem!: DynamicFormWithHighlight;
  duplicateError: string = '';
  filterType: string = '';

  constructor(private formService: FormService) {}

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

  selectItem(item: DynamicFormWithHighlight) {
    this.selectedItem = item;
  }

  toggleSidenav() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  onAdd() {
    // Check if any item is new (no id)
    const hasNew = this.items.some(item => !item.id);
    if (!hasNew) {
      const newItem: DynamicFormWithHighlight = {
        id: '',
        formName: 'New Form',
        formType: '',
        formDescription: '',
        schema: {},
        uiSchema: {},
        sections: [],
        createdBy: 'User',
        updatedAt: new Date().toISOString(),
        company: ''
      };
      this.items = [newItem, ...this.items];
      this.selectedItem = newItem;
    } else {
      // Select the existing new item
      this.selectedItem = this.items.find(item => !item.id)!;
    }
  }

  onSaveForm(updatedItem: DynamicFormWithHighlight) {
    this.duplicateError = '';
    this.formService.checkDuplicate(updatedItem.formName, updatedItem.formType).subscribe(isDuplicate => {
      if (isDuplicate && !updatedItem.id) {
        this.duplicateError = 'A form with this name and type already exists.';
        return;
      }
      // Assign a new id if not present
      if (!updatedItem.id) {
        updatedItem.id = Date.now().toString();
        this.formService.save(updatedItem).subscribe();
      } else {
        this.formService.update(updatedItem).subscribe();
      }
      // Replace the item in the list
      this.items = this.items.map(item => item === this.selectedItem ? updatedItem : item);
      this.selectedItem = updatedItem;
    });
  }

  deleteForm(item: DynamicFormWithHighlight) {
    this.items = this.items.filter(i => i !== item);
    if (this.selectedItem === item) {
      this.selectedItem = this.items[0] || undefined;
    }
  }

  toggleHighlight(item: DynamicFormWithHighlight) {
    item.highlighted = !item.highlighted;
  }

  get filteredItems() {
    return this.items.filter(item => {
      const matchesType = !this.filterType || item.formType === this.filterType;
      const matchesSearch = !this.searchTerm ||
        (item.formName && item.formName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }
}
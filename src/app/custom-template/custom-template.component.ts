import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidebarOpened = true;
  sidebarMode: 'side' | 'over' = 'side';
  searchTerm: string = '';
  items: DynamicFormWithHighlight[] = [
    { id: '1', formName: 'Student Registration', formType: 'Education', formDescription: 'Register new students for the academic year.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '2', formName: 'Health Checkup', formType: 'Health', formDescription: 'Annual health checkup form for employees.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '3', formName: 'Sports Enrollment', formType: 'Sports', formDescription: 'Sign up for sports activities and clubs.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '4', formName: 'Event Feedback', formType: 'Other', formDescription: 'Collect feedback for recent events.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '5', formName: 'Expense Reimbursement', formType: 'Finance', formDescription: 'Submit expenses for reimbursement.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '6', formName: 'Leave Application', formType: 'HR', formDescription: 'Apply for leave or time off.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '7', formName: 'IT Support Request', formType: 'IT', formDescription: 'Request IT support for hardware or software issues.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '8', formName: 'Legal Consultation', formType: 'Legal', formDescription: 'Request a legal consultation appointment.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '9', formName: 'Marketing Campaign', formType: 'Marketing', formDescription: 'Submit a new marketing campaign proposal.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '10', formName: 'Operations Checklist', formType: 'Operations', formDescription: 'Daily operations checklist for staff.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '11', formName: 'Research Proposal', formType: 'Research', formDescription: 'Submit a new research project proposal.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '12', formName: 'Course Feedback', formType: 'Education', formDescription: 'Feedback form for completed courses.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '13', formName: 'Vaccination Record', formType: 'Health', formDescription: 'Record of vaccinations for employees.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '14', formName: 'Team Registration', formType: 'Sports', formDescription: 'Register a team for the annual tournament.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '15', formName: 'Suggestion Box', formType: 'Other', formDescription: 'Submit suggestions for workplace improvement.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '16', formName: 'Budget Request', formType: 'Finance', formDescription: 'Request additional budget for your department.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '17', formName: 'Employee Onboarding', formType: 'HR', formDescription: 'Onboarding form for new employees.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '18', formName: 'Software Access', formType: 'IT', formDescription: 'Request access to new software tools.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '19', formName: 'Contract Review', formType: 'Legal', formDescription: 'Submit contracts for legal review.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '20', formName: 'Ad Campaign Results', formType: 'Marketing', formDescription: 'Report results of recent ad campaigns.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '21', formName: 'Inventory Update', formType: 'Operations', formDescription: 'Update inventory records for the warehouse.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '22', formName: 'Lab Results Submission', formType: 'Research', formDescription: 'Submit lab results for ongoing research.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '23', formName: 'Parent Consent', formType: 'Education', formDescription: 'Consent form for student activities.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '24', formName: 'Medical History', formType: 'Health', formDescription: 'Detailed medical history form.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '25', formName: 'Fitness Assessment', formType: 'Sports', formDescription: 'Assessment for fitness program participants.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '26', formName: 'Lost & Found', formType: 'Other', formDescription: 'Report lost or found items.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '27', formName: 'Travel Advance', formType: 'Finance', formDescription: 'Request travel advance for business trips.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '28', formName: 'Exit Interview', formType: 'HR', formDescription: 'Exit interview form for departing employees.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '29', formName: 'Hardware Purchase', formType: 'IT', formDescription: 'Request purchase of new hardware.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false },
    { id: '30', formName: 'Policy Update', formType: 'Legal', formDescription: 'Submit updates to company policies.', schema: {}, uiSchema: {}, sections: [], createdBy: 'Admin', updatedAt: '', company: '', highlighted: false }
  ];
  selectedItem!: DynamicFormWithHighlight;
  duplicateError: string = '';
  filterType: string = '';
  formTypes: string[] = [
    'Education', 'Health', 'Sports', 'Other', 'Finance', 'HR', 'IT', 'Legal', 'Marketing', 'Operations', 'Research'
  ];

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
    if (this.sidebarMode === 'over' && this.sidenav) {
      this.sidenav.close();
    }
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
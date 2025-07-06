import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionsComponent } from './form-sections.component';

describe('FormSectionsComponent', () => {
  let component: FormSectionsComponent;
  let fixture: ComponentFixture<FormSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

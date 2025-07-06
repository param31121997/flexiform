import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicForm } from './model/models';

@Injectable({ providedIn: 'root' })
export class FormService {
  private forms: DynamicForm[] = [];

  getAll(): Observable<DynamicForm[]> {
    return of(this.forms);
  }

  save(form: DynamicForm): Observable<DynamicForm> {
    form.id = Date.now().toString();
    this.forms.unshift(form);
    return of(form);
  }

  update(form: DynamicForm): Observable<DynamicForm> {
    const idx = this.forms.findIndex(f => f.id === form.id);
    if (idx > -1) this.forms[idx] = form;
    return of(form);
  }

  delete(id: string): Observable<boolean> {
    this.forms = this.forms.filter(f => f.id !== id);
    return of(true);
  }

  checkDuplicate(formName: string, formType: string): Observable<boolean> {
    const exists = this.forms.some(f => f.formName === formName && f.formType === formType);
    return of(exists);
  }
}

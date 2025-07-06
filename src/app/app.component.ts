import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CustomTemplateComponent } from './custom-template/custom-template.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

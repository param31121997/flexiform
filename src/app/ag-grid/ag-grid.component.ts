import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridAngular } from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community'
import { MyCellComponent, MyCellParams } from './my-cell/my-cell.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'grid-component',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
pagination=true;
  paginationPageSize=10;
  paginationPageSizeSelector=[10,20]

  defaultColDef:ColDef={
    flex:1,
    filter:true,
    // floatingFilter:true,
    editable:true
  }
 rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
         { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: true },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];

    colDefs: ColDef[] = [
        { field: "make",
          cellRenderer:MyCellComponent,
          flex:2,
          cellEditor:"agSelectCellEditor",
          cellEditorParams:{values:['Tesla', "Ford", "Toyota"]},
          cellRendererParams:{
            buttonText:'company'
          } as MyCellParams
          // checkboxSelection:true
         },
        //  {
        //   valueGetter:p => p.data.make + ' - ' + p.data.price,
        //   headerName:"Company"
        //  },
        { field: "model",
          cellRenderer:MyCellComponent,
           cellRendererParams:{
            buttonText:'model'
          }
        },
        { field: "price",
          valueFormatter:p => p.value,
          cellClassRules:{
            'green-cell':p=> p.value >30000
          }
         },
        { field: "electric",
          filter:false
         }
    ];
}

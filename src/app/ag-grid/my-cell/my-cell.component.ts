import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';



export interface MyCellParams{
  buttonText?:string;
}



@Component({
  selector: 'app-my-cell',
  standalone: true,
  imports: [],
  templateUrl: './my-cell.component.html',
  styleUrl: './my-cell.component.css'
})
export class MyCellComponent implements ICellRendererAngularComp{
  public value!:string;
  buttonText:string='default'
    agInit(params: ICellRendererParams & MyCellParams): void {
    this.value = params.value
    this.buttonText = params.buttonText?? 'Default';
  }
  refresh(params: ICellRendererParams): boolean {
   return true
  }

  buttonClicked(){
    alert("action")
  }

}

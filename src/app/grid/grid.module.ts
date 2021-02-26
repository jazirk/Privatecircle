import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import {GridListComponent} from './grid-list/grid-list.component';
import {GridRoutingModule} from './grid-routing.module';
import {GridDetailsComponent} from './grid-details/grid-details.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [GridComponent, GridListComponent, GridDetailsComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    SharedModule
  ]
})
export class GridModule { }

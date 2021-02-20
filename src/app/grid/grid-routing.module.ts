import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridListComponent} from './grid-list/grid-list.component';
import {GridDetailsComponent} from './grid-details/grid-details.component';
import {GridComponent} from './grid.component';



const routes: Routes = [
  {
  path: '', component: GridComponent, children: [
    {
  path: 'details/:id' , component: GridDetailsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule {
}

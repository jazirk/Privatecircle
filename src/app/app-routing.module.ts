import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridComponent} from './grid/grid.component';



const routes: Routes = [{
  path: '', redirectTo: 'saved-list', pathMatch: 'full',
}, {
  path: 'saved-list', component: GridComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

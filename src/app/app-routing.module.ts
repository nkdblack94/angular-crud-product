import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponentComponent} from './list-component/list-component.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponentComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

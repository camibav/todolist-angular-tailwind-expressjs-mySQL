import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarListComponent } from './editar-list/editar-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'editar/:id', component: EditarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

    constructor() {

    }

 }

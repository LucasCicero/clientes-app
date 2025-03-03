import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'servicos-prestados', canActivate:[AuthGuard], component:LayoutComponent, children:[
    {path: 'form',component:ServicoPrestadoFormComponent},
    {path: 'lista', component: ServicoPrestadoFormComponent},
    {path: '', redirectTo:'/servico-prestados/lista', pathMatch:'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }

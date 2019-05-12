import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
//const routes: Routes = [];
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user'},
  {path: 'user', component: UsuariosComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

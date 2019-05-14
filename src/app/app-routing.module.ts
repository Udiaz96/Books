import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CambioComponent } from './cambio/cambio.component';
import { ComicsComponent } from './comics/comics.component';
import { AdministarUsuariosComponent } from './administar-usuarios/administar-usuarios.component';
import { ListaComicsComponent } from './lista-comics/lista-comics.component';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UsuariosComponent},
  {path: 'cambio', component: CambioComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'admin', component: AdministarUsuariosComponent},
  {path: 'lista', component: ListaComicsComponent}
];
/*const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cambio'},
  {path: 'cambio', component: CambioComponent}
];
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'comics'},
  {path: 'comics', component: ComicsComponent}
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

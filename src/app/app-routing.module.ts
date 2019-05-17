import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CambioComponent } from './cambio/cambio.component';
import { ComicsComponent } from './comics/comics.component';
import { AdministarUsuariosComponent } from './administar-usuarios/administar-usuarios.component';
import { ListaComicsComponent } from './lista-comics/lista-comics.component';
import { UsersGuard } from './users.guard';
import { AuthGuard } from './auth.guard';
import { ComicPrincipalComponent } from './comic-principal/comic-principal.component';


const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UsuariosComponent},
  {path: 'agregar', component: ComicsComponent, canActivate: [UsersGuard]},
  {path: 'cambio', component: CambioComponent, canActivate: [UsersGuard]},
  {path: 'comics', component: ComicsComponent, canActivate: [UsersGuard]},
  {path: 'admin', component: AdministarUsuariosComponent, canActivate: [AuthGuard]},
  {path: 'lista', component: ListaComicsComponent, canActivate: [UsersGuard]},
  {path: 'principal', component: CambioComponent, canActivate: [UsersGuard]}
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

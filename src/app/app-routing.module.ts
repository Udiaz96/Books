import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent}
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

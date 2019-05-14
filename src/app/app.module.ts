import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CambioComponent } from './cambio/cambio.component';
import { ComicsComponent } from './comics/comics.component';
import { AdministarUsuariosComponent } from './administar-usuarios/administar-usuarios.component';
import { ListaComicsComponent } from './lista-comics/lista-comics.component';
import { ComicPrincipalComponent } from './comic-principal/comic-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    CambioComponent,
    ComicsComponent,
    AdministarUsuariosComponent,
    ListaComicsComponent,
    ComicPrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

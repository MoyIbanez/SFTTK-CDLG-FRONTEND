import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { appRouting } from './app.routes';
import { AgregarComponent } from './components/agregar/agregar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowPasswordDirective } from './directives/show-password.directive';
import { MaskpasskowrdPipe } from './pipes/maskpasskowrd.pipe';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { GestionarEquiposComponent } from './components/gestionar-equipos/gestionar-equipos.component';
import { GestionarPartidoComponent } from './components/gestionar-partido/gestionar-partido.component';
import { TablaComunicadosComponent } from './components/tabla-comunicados/tabla-comunicados.component';
import { ListaJugadoresComponent } from './gestion/lista-jugadores/lista-jugadores.component';
import{ArbolComponent}from './components/arbol/arbol.component';

import { ReactiveFormsModule,FormsModule} from '@angular/forms';



import {HttpClientModule} from '@angular/common/http';



import { HomeComponent } from './components/home/home.component';
import { AgregarequiposComponent } from './components/agregar/agregarequipos/agregarequipos.component';
import { AgregarintegrantesComponent } from './components/agregar/agregarintegrantes/agregarintegrantes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardEquiposComponent } from './components/dashboards/dashboard-equipos/dashboard-equipos.component';

//Librerías externas

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AgregarComponent,
    SignupComponent,
    ShowPasswordDirective,
    MaskpasskowrdPipe,
    ComunicadosComponent,
    GestionarEquiposComponent,
    HomeComponent,
    AgregarequiposComponent,
    AgregarintegrantesComponent,
    GestionarPartidoComponent,
    TablaComunicadosComponent,
    
    TablaComunicadosComponent,
    GestionarPartidoComponent,
    ListaJugadoresComponent,
    ArbolComponent,
    NavbarComponent,
    DashboardEquiposComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

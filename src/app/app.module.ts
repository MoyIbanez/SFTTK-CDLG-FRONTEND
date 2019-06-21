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



import { HomeComponent } from './components/home/home.component';
import { TablaComunicadosComponent } from './components/tabla-comunicados/tabla-comunicados.component';
import { GestionarPartidoComponent } from './components/gestionar-partido/gestionar-partido.component';



/*=========================
Imports Formularios
=========================*/
import {  ReactiveFormsModule  } from '@angular/forms';

/*=========================
Imports HTTP
=========================*/

import {HttpClientModule} from '@angular/common/http'



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
    TablaComunicadosComponent,
    GestionarPartidoComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

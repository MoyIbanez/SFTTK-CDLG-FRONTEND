import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { appRouting } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowPasswordDirective } from './directives/show-password.directive';
import { MaskpasskowrdPipe } from './pipes/maskpasskowrd.pipe';

import { ComunicadosComponent } from './components/comunicados/comunicados.component';

import { GestionarTorneosComponent } from './components/gestionar-torneos/gestionar-torneos.component';
import { GestionarEquiposComponent } from './components/gestionar-equipos/gestionar-equipos.component';



import { HomeComponent } from './components/home/home.component';
import { TablaComunicadosComponent } from './components/tabla-comunicados/tabla-comunicados.component';

//Librerías externas

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AgregarComponent,
    SignupComponent,
    ShowPasswordDirective,
    MaskpasskowrdPipe,
    ComunicadosComponent,
    GestionarTorneosComponent,
    GestionarEquiposComponent,
    ComunicadosComponent,
    GestionarTorneosComponent,
    GestionarEquiposComponent,
    HomeComponent,
    TablaComunicadosComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

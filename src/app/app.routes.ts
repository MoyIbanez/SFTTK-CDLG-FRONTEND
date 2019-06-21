import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { SignupComponent } from './components/signup/signup.component';
import { GestionarTorneosComponent } from './components/gestionar-torneos/gestionar-torneos.component';
import { GestionarEquiposComponent } from './components/gestionar-equipos/gestionar-equipos.component';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarequiposComponent } from './components/agregar/agregarequipos/agregarequipos.component';
import { AgregarintegrantesComponent } from './components/agregar/agregarintegrantes/agregarintegrantes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'gestionarTorneos', component: GestionarTorneosComponent },
    { path: 'gestionarEquipos', component: GestionarEquiposComponent },
    { path: 'comunicados', component: ComunicadosComponent },
    { path: 'agregarUsuario', component: AgregarComponent },
    { path: 'agregarEquipos', component: AgregarequiposComponent},
    { path: 'agregarIntegrantes', component: AgregarintegrantesComponent},

    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes,{useHash:true});
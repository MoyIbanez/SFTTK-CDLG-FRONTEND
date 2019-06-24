import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { SignupComponent } from './components/signup/signup.component';
import { GestionarEquiposComponent } from './components/gestionar-equipos/gestionar-equipos.component';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { HomeComponent } from './components/home/home.component';
import { GestionarPartidoComponent } from './components/gestionar-partido/gestionar-partido.component';
import { ListaJugadoresComponent } from './gestion/lista-jugadores/lista-jugadores.component';
import { ArbolComponent } from './components/arbol/arbol.component';
import { EditarJugadorComponent } from './gestion/editar-jugador/editar-jugador.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'gestionarPartido', component: GestionarPartidoComponent },
    { path: 'arbolTorneo', component: ArbolComponent },
    { path: 'gestionarEquipos', component: GestionarEquiposComponent },
    { path: 'listaJugadores', component: ListaJugadoresComponent },
    { path: 'comunicados', component: ComunicadosComponent },
    { path: 'agregarUsuario', component: AgregarComponent },
    { path: 'editarJugador', component: EditarJugadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes,{useHash:true});
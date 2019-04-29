import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandEstiloComponent } from './components/land-estilo/land-estilo.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroExitosoComponent } from './components/registro-exitoso/registro-exitoso.component';
import { LandingDosComponent } from './components/landing-dos/landing-dos.component';
import { LandingTresComponent } from './components/landing-tres/landing-tres.component';

const routes: Routes = [
  {path: 'negocios-1', component: LandEstiloComponent},
  {path: 'negocios-2', component: LandingDosComponent},
  {path: 'negocios-3', component: LandingTresComponent},

  {path: 'informacion', component: InformacionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro-exitoso', component: RegistroExitosoComponent},

  {path: '*', redirectTo: 'negocios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

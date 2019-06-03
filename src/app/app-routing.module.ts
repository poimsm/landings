import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandEstiloComponent } from './components/land-estilo/land-estilo.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroExitosoComponent } from './components/registro-exitoso/registro-exitoso.component';
import { LandingDosComponent } from './components/landing-dos/landing-dos.component';
import { LandingTresComponent } from './components/landing-tres/landing-tres.component';
import { LandingDesktopComponent } from './components/landing-desktop/landing-desktop.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { LandingCuatroComponent } from './components/landing-cuatro/landing-cuatro.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { Landing05Component } from './components/landing05/landing05.component';
import { Blog01Component } from './components/blog01/blog01.component';

const routes: Routes = [
  {path: 'lg-1', component: LandEstiloComponent},
  {path: 'lg-2', component: LandingDosComponent},
  {path: 'lg-3', component: LandingTresComponent},
  {path: 'lg-desktop', component: LandingDesktopComponent},
  {path: 'lg-4', component: LandingCuatroComponent},
  {path: 'lg-5', component: Landing05Component},
  {path: 'blog-1', component: Blog01Component},
  {path: 'politica-privacidad', component: PoliticaPrivacidadComponent},
  {path: 'lg-4-gracias', component: InformacionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro-exitoso', component: RegistroExitosoComponent},
  {path: 'gmail', component: GmailComponent},

  {path: '*', redirectTo: 'negocios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

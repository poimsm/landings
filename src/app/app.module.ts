import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribedComponent } from './components/subscribed/subscribed.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LandEstiloComponent } from './components/land-estilo/land-estilo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroExitosoComponent } from './components/registro-exitoso/registro-exitoso.component';
import { ChatComponent } from './components/chat/chat.component';
import { LandingDosComponent } from './components/landing-dos/landing-dos.component';
import { LandingTresComponent } from './components/landing-tres/landing-tres.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { LandingDesktopComponent } from './components/landing-desktop/landing-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SubscribedComponent,
    InformacionComponent,
    LandEstiloComponent,
    RegistroComponent,
    RegistroExitosoComponent,
    ChatComponent,
    LandingDosComponent,
    LandingTresComponent,
    LandingDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlideshowModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

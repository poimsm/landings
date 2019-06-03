import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-cuatro',
  templateUrl: './landing-cuatro.component.html',
  styleUrls: ['./landing-cuatro.component.css']
})
export class LandingCuatroComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  nombre: string;
  email: string;
  telefono: string;

  isSending = false;

  imageUrlArray = [
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558782153/landing-4/localhost_4200_duc_Galaxy_S5.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558782151/landing-4/localhost_4200_duc_Galaxy_S5_1.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558782155/landing-4/localhost_4200_duc_Galaxy_S5_3.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558782152/landing-4/localhost_4200_duc_Galaxy_S5_4.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558782152/landing-4/localhost_4200_duc_Galaxy_S5_5.png'
  ]

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private _control: ControlService,
    private _data: DataService
  ) {
    _control.chatShowUp();


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  ngOnInit() {

  }

  scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }



  enviar() {
    this.isSending = true;
    const data = {
      email: this.email,
      telefono: this.telefono,
      nombre: this.nombre
    }
    if ( this.telefono && this.nombre.length > 4 && this.email.length > 4) {
      this._data.createLead(data)
        .then(() => {
          this.isSending = false;
          this.router.navigateByUrl('/lg-4-gracias');
        });
    } else {
      this.isSending = false;
    }

  }


}


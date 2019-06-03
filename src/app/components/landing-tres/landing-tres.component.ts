import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-tres',
  templateUrl: './landing-tres.component.html',
  styleUrls: ['./landing-tres.component.css']
})
export class LandingTresComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  nombre: string;
  email: string;
  telefono: string;

  imageUrlArray = [
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657313/landing/localhost_8100__Galaxy_S5_15.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657314/landing/localhost_8100__Galaxy_S5_22.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657296/landing/localhost_8100__Galaxy_S5_18.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657295/landing/localhost_8100__Galaxy_S5_19.png'
  ]

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private _control: ControlService
  ) {

    _control.showChat = true;

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



  masInfo() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono
    }

    this.router.navigateByUrl('/informacion');

  }


}

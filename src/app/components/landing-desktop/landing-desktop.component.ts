import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-desktop',
  templateUrl: './landing-desktop.component.html',
  styleUrls: ['./landing-desktop.component.css']
})
export class LandingDesktopComponent implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  nombre: string;
  email: string;
  telefono: string;

  imageUrlArray = [
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657313/landing/localhost_8100__Galaxy_S5_15.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657314/landing/localhost_8100__Galaxy_S5_22.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657296/landing/localhost_8100__Galaxy_S5_18.png',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657295/landing/localhost_8100__Galaxy_S5_19.png'
  ];

  img1 = this.imageUrlArray[0];
  img2 = this.imageUrlArray[1];
  img3 = 'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657296/landing/localhost_8100__Galaxy_S5_18.png';
  img4 = 'https://res.cloudinary.com/ddon9fx1n/image/upload/v1556657313/landing/localhost_8100__Galaxy_S5_15.png';

  imgs01 = [
    this.imageUrlArray[0],
    this.imageUrlArray[1],
    this.imageUrlArray[2],
    this.imageUrlArray[3]
  ];

  imgs02 = [
    'assets/c5.svg',
    'assets/c5.svg',
    'assets/c5.svg',
    'assets/c5.svg'
  ];

  imgs03 = [
    this.imageUrlArray[2],
    this.imageUrlArray[3],
    this.imageUrlArray[0],
    this.imageUrlArray[1]
  ];
  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private _control: ControlService
  ) {
    _control.chatShowUp();
    // this.mi();

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

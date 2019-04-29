import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-landing-tres',
  templateUrl: './landing-tres.component.html',
  styleUrls: ['./landing-tres.component.css']
})
export class LandingTresComponent implements OnInit {
  nombre: string;
  email: string;
  telefono: string;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private _control: ControlService
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



  masInfo() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono
    }

    this.router.navigateByUrl('/informacion');

  }


}

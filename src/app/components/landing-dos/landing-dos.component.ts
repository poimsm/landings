import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-landing-dos',
  templateUrl: './landing-dos.component.html',
  styleUrls: ['./landing-dos.component.css']
})
export class LandingDosComponent implements OnInit {
  nombre: string;
  email: string;
  telefono: string;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private _control: ControlService
  ) { 
    _control.chatShowUp();
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

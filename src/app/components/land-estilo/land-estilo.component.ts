import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';


@Component({
  selector: 'app-land-estilo',
  templateUrl: './land-estilo.component.html',
  styleUrls: ['./land-estilo.component.css']
})
export class LandEstiloComponent implements OnInit {
  nombre: string;
  email: string;

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
      email: this.email
    }

    this.router.navigateByUrl('/informacion');

  }

 
}

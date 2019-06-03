import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.css']
})
export class PoliticaPrivacidadComponent implements OnInit {

  constructor(private _control:ControlService) {
    this._control.chatNotShow();

   }

  ngOnInit() {
  }

}

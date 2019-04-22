import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showChat = true;
  mensaje: string;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
  }


}

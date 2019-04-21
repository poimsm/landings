import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensaje: string;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
  }

  goToLink(){
    let mensaje = 'hola mundo!';
    let telefono='56936271323';
    let url = '';

    const isMobile = this.deviceService.isMobile();
    const isDesktopDevice = this.deviceService.isDesktop();

    if (isMobile) {
      url = `whatsapp://send?phone=${telefono}&text=${mensaje}`;
    }

    if (isDesktopDevice) {
      url = `https://web.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    }

    window.open(url, "_blank");
}

}

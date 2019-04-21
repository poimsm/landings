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

  openWhatsapp(){
    let telefono='56936271323';
    let url = '';

    const isMobile = this.deviceService.isMobile();
    const isDesktopDevice = this.deviceService.isDesktop();

    if (isMobile) {
      url = `whatsapp://send?phone=${telefono}&text=${this.mensaje}`;
    }

    if (isDesktopDevice) {
      url = `https://web.whatsapp.com/send?phone=${telefono}&text=${this.mensaje}`;
    }

    window.open(url, "_blank");
}

}

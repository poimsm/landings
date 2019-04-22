import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(
    private deviceService: DeviceDetectorService,
    private _control: ControlService
    ) { }
    
  showChat = true;
  mensaje: string;

  openWhatsapp() {
    let telefono = '56936271323';
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

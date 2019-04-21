import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPhone: boolean;
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.setHeaderMenu();
  }

  setHeaderMenu() {
    const isMobile = this.deviceService.isMobile();
    const isDesktopDevice = this.deviceService.isDesktop();

    if (isMobile) {
      this.isPhone = true;
    }

    if (isDesktopDevice) {
      this.isPhone = false;
    }
  }

}

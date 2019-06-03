import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog01',
  templateUrl: './blog01.component.html',
  styleUrls: ['./blog01.component.css']
})
export class Blog01Component implements OnInit {

  @ViewChild('contenedor') contenedor: ElementRef;

  constructor(
    private router: Router,
    private _control: ControlService,
  ) {
    _control.showChat = false;

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

  goJoopiter() {
    this.router.navigateByUrl('/lg-4');
  }

  ngOnInit() {

  }






}


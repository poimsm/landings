import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  showChat = false;

  constructor() { }

  chatNotShow() {
    this.showChat = false;    
  }
  
  chatShowUp() {
    this.showChat = true;    
  }
}

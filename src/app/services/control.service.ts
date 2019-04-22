import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  showChat = true;

  constructor() { }

  chatNotShow() {
    this.showChat = false;    
  }
  
  chatShowUp() {
    this.showChat = true;    
  }
}

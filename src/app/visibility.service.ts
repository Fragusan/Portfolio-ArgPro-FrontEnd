import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  visible:boolean=true;
  
  setVisible(visible:boolean) { 
    this.visible=visible
  }
}
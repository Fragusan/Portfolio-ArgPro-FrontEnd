import { Component } from '@angular/core';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {

  constructor(public visibilityService: VisibilityService){}

    hide(){
      this.visibilityService.setVisible(false)
    }
  }
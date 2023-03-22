import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent {
  
  activeTab = 0;

  changeTab(index: number) {
    this.activeTab = index;
  }

}

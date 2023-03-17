import { Component, ViewEncapsulation } from '@angular/core';

class Lluvia {
  cerca: number = 150;

  rain(): void {
    let element: HTMLElement | null = document.getElementById("lluvia");
    let i: number = 0;
    while (i < this.cerca) {
      let gota: HTMLElement = document.createElement("i");
      let tama: number = Math.random() * 5;
      let postX: number = Math.floor(Math.random() * window.innerWidth);
      let retraso: number= Math.random() * -20;
      let duracion: number= Math.random() * 5;
      
      gota.classList.add("gota");
      gota.style.width = 0.2 + tama + 'px';
      gota.style.left = postX + 'px';
      gota.style.animationDelay = retraso + 's';
      gota.style.animationDuration = 1 + duracion + 's';
      element?.appendChild(gota);
      i++;
    }
  }
}


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent {
  constructor() {
    window.onload = () => {
      const lluvia = new Lluvia();
      lluvia.rain();
    };
  }
  
}

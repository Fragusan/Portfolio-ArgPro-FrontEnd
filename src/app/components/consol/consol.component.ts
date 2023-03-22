import { Component } from '@angular/core';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-consol',
  templateUrl: './consol.component.html',
  styleUrls: ['./consol.component.css']
})
export class ConsolComponent {
  constructor(public visibilityService: VisibilityService) {}
}
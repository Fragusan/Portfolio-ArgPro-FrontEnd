import { Component } from '@angular/core';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  constructor(public visibilityService: VisibilityService) {}
}

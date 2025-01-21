import { Component } from '@angular/core';
import { TooltipStrDirective } from 'ngx-tooltip-directives';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  imports: [TooltipStrDirective]
})

export class AboutSectionComponent {
  constructor() {}
}
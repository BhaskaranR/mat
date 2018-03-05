import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  tooltip;
  position: TooltipPosition = 'below';
  message = 'Here is the tooltip';
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  showExtraClass = false;
}

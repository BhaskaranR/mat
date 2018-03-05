import { Component } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {
  displayMode = 'default';
  multi = false;
  hideToggle = false;
  showPanel3 = true;
}

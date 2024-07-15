import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.component.html',
  styleUrl: 'radio-overview-example.component.css',
  standalone: true,
  imports: [MatRadioModule],
})
export class RadioOverviewExample {}

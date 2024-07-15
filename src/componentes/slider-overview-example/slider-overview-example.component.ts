import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.component.html',
  styleUrl: 'slider-overview-example.component.css',
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderOverviewExample {}

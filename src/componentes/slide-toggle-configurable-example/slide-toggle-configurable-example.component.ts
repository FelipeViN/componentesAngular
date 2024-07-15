import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable slide-toggle
 */
@Component({
  selector: 'slide-toggle-configurable-example',
  templateUrl: 'slide-toggle-configurable-example.component.html',
  styleUrl: 'slide-toggle-configurable-example.component.css',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
})
export class SlideToggleConfigurableExample {
  checked = false;
  disabled = false;
}

import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

/**
 * @title Interactive disabled buttons
 */
@Component({
  selector: 'button-disabled-interactive-example',
  templateUrl: 'button-disabled-interactive-example.component.html',
  styleUrl: 'button-disabled-interactive-example.component.css',
  standalone: true,
  imports: [MatButton, MatTooltip],
})
export class ButtonDisabledInteractiveExample {}

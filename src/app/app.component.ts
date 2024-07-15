import { Component } from '@angular/core';
import { ProgressSpinnerConfigurableExample } from '../componentes/progress-spinner-configurable-example/progress-spinner-configurable-example.component';
import { AutocompleteSimpleExample } from '../componentes/autocomplete-simple-example/autocomplete-simple-example.component';
import { RadioOverviewExample } from '../componentes/radio-overview-example/radio-overview-example.component';
import { RippleOverviewExample } from '../componentes/ripple-overview-example/ripple-overview-example.component';
import { SelectCustomTriggerExample } from '../componentes/select-custom-trigger-example/select-custom-trigger-example.component';
import { SlideToggleConfigurableExample } from '../componentes/slide-toggle-configurable-example/slide-toggle-configurable-example.component';
import { SliderOverviewExample } from 'src/componentes/slider-overview-example/slider-overview-example.component';
import { StepperEditableExample } from 'src/componentes/stepper-editable-example/stepper-editable-example.component';
import { DividerOverviewExample } from 'src/componentes/divider-overview-example/divider-overview-example.component';
import { ExpansionExpandCollapseAllExample } from 'src/componentes/expansion-expand-collapse-all-example/expansion-expand-collapse-all-example.component';
import { ButtonDisabledInteractiveExample } from 'src/componentes/button-disabled-interactive-example/button-disabled-interactive-example.component';
import { BadgeOverviewExample } from 'src/componentes/badge-overview-example/badge-overview-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BadgeOverviewExample,
    ButtonDisabledInteractiveExample,
    ExpansionExpandCollapseAllExample,
    AutocompleteSimpleExample,
    ProgressSpinnerConfigurableExample,
    RadioOverviewExample,
    RippleOverviewExample,
    SelectCustomTriggerExample,
    SlideToggleConfigurableExample,
    SliderOverviewExample,
    StepperEditableExample,
    DividerOverviewExample
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UnidadDos';

}

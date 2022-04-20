import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-two-buttons-container',
  templateUrl: './two-buttons-container.component.html',
  styleUrls: ['./two-buttons-container.component.scss']
})
export class TwoButtonsContainerComponent {

  // Main Button

  @Input('mainButtonText') mainButtonText: string;
  @Input('mainButtonBackground') mainButtonBackground: string;
  @Input('mainButtonFunction') mainButtonFunction!: () => void;
  @Input('mainButtonDisabled') mainButtonDisabled: boolean;

  // Secondary Button
  @Input('secondaryButtonText') secondaryButtonText: string;
  @Input('secondaryButtonBackground') secondaryButtonBackground: string;
  @Input('secondaryButtonFunction') secondaryButtonFunction!: () => void;
  @Input('secondaryButtonDisabled') secondaryButtonDisabled: boolean;


  constructor() {
    this.mainButtonText = "Main Button Text";
    this.mainButtonBackground = "primary";
    this.mainButtonDisabled = false;
    this.secondaryButtonText = "Secondary Button Text";
    this.secondaryButtonBackground = "";
    this.secondaryButtonDisabled = false;
  }

  onMainButtonClick() {
    if (typeof this.mainButtonFunction === 'function')
      this.mainButtonFunction();
  }

  onSecondaryButtonClick() {
    if (typeof this.secondaryButtonFunction === 'function')
      this.secondaryButtonFunction();
  }

}

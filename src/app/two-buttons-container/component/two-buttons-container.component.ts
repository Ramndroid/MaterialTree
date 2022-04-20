import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-buttons-container',
  templateUrl: './two-buttons-container.component.html',
  styleUrls: ['./two-buttons-container.component.scss']
})
export class TwoButtonsContainerComponent implements OnInit {

  @Input('mainButtonText') textButtonPrimary: string = "";
  
  @Input('secondaryButtonText') textButton: string = "";
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

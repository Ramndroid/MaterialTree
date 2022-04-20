import { Component } from '@angular/core';
import { TREE_DATA } from './virtual-assistant/data/data-to-show-at-tree';

@Component({
  selector: 'app-root',
  template: `

    <app-virtual-assistant-tree
        [dataToShow]='data2'>
    </app-virtual-assistant-tree>
    
  `
})
export class AppComponent {

  data = TREE_DATA;

  data2 = {
    Pendiente: {
      'Pendiente 1': null,
      'Pendiente 2': null
    },
    Hecho: {
      'Hecho 1': null,
      'Hecho 2': null,
    }
  };

}

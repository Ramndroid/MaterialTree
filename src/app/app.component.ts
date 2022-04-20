import { Component } from '@angular/core';
import { TREE_DATA } from './virtual-assistant/data/data-to-show-at-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  
  data1 = TREE_DATA;

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

  data3 = {TREE_DATA};

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  data1 = {
    Groceries: {
      'Almond Meal flour': null,
      'Organic eggs': null,
      'Protein Powder': null,
      Fruits: {
        Apple: null,
        Berries: ['Blueberry', 'Raspberry'],
        Orange: null,
      },
    },
    Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
  };

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

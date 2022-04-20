import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // FOR CASE 1 AND CASE 2
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

  btnResumen = (): void => {
    console.log("Ver resumen");
    alert("Ver resumen");
  }

  btnGuardar = (): void => {
    console.log("Guardar");
  }

  btnCompartir = (): void => {
    console.log("Compartir");
  }

  btnImprimir = (): void => {
    console.log("Imprimir");
    alert("Imprimir");
  }

  // FOR CASE 3
  isButtonDisabled: boolean = true;

  buttonDisabledText: string = "Toca para desbloquear";
  
  btnDisable = (): boolean => {
    this.isButtonDisabled = !this.isButtonDisabled;
    if (this.isButtonDisabled) {
      this.buttonDisabledText = "Toca para desbloquear";
    } else {
      this.buttonDisabledText = "Toca para bloquear";
    }
    return this.isButtonDisabled;
  }



}

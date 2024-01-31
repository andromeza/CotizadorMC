import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cotizador';
  items: any[] = [];
  prices: any[] = [];
  discount: any[] = [];
  priceSelected: any;
  discountSelected: any;
  dateE: any;
  dateS: any;

  constructor(){
    this.items = [
      { label: 'Nuevo Precio', icon: 'pi pi-fw pi-plus', command: () => this.handleNuevo() },
      { label: 'Editar Precio', icon: 'pi pi-fw pi-pencil', command: () => this.handleEditar() },
      // Puedes agregar más opciones según tus necesidades
    ];

    this.prices = [
      { label: 'Raza Pequeña', value: '490'},
      { label: 'Raza Mediana y Grande', value: '590'}
    ];

    this.discount = [
      { label: '10%', value: '10' },
      { label: '20%', value: '20' },
      { label: '30%', value: '30' },
      { label: '40%', value: '40' },
      { label: '50%', value: '50' }
    ];
  }

  handleNuevo() {
    // Lógica para la opción Nuevo
    console.log('Nuevo clicked');
  }

  handleEditar() {
    // Lógica para la opción Editar
    console.log('Editar clicked');
  }

  handleChange(event: any) {
    console.log('Opción seleccionada:', event.value);
    // Puedes realizar acciones adicionales aquí si es necesario
  }

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}

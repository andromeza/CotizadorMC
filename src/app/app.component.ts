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
  aditionalTD: any[] = [];

  priceSelected: any;
  discountSelected: any;
  dateE: any;
  dateS: any;
  visible: boolean = false;
  myaditional: any;

  night: any;
  myprice: any;
  total: any;
  ftotal: any;
  mydiscount=0;
  adicional= 0;


  constructor(){
    this.items = [
      { label: 'Nuevo Precio', icon: 'pi pi-fw pi-plus', command: () => this.handleNuevo() },
      { label: 'Editar Precio', icon: 'pi pi-fw pi-pencil', command: () => this.handleEditar() },
      // Puedes agregar más opciones según tus necesidades
    ];

    this.prices = [
      { label: 'Raza Pequeña', value: '590'},
      { label: 'Raza Mediana y Grande', value: '690'}
    ];

    this.discount = [
      { label: '10%', value: '10' },
      { label: '20%', value: '20' },
      { label: '30%', value: '30' },
      { label: '40%', value: '40' },
      { label: '50%', value: '50' }
    ];

    this.aditionalTD = [
      { label: '5% Adicional', value: '5'},
      { label: '10% Adicional', value: '10'},
      { label: '15% Adicional', value: '15'},
      { label: '20% Adicional', value: '20'},
      { label: '25% Adicional', value: '25'}
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
      // Obtener el valor seleccionado del evento
      this.myprice = this.priceSelected.value;
  }

  handleChangeD(event: any) {
    // Obtener el valor seleccionado del evento
    this.mydiscount = this.discountSelected.value;
}

handleChangeA(event: any) {
  // Obtener el valor seleccionado del evento
  this.adicional = this.myaditional.value;
  console.log(this.adicional)
}

  showDialog() {
        this.visible = true;
        this.quote();
  }

  quote(){

    const diferenciaMilisegundos: number = this.dateS.getTime() - this.dateE.getTime();
    const cantidadNoches: number = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    this.night = cantidadNoches;
    
    this.total = this.myprice * this.night
    this.ftotal = (this.total - (this.total * (this.mydiscount/100))) + (this.total * (this.adicional/100))
      
  }
}

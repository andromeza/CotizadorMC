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
  visible: boolean = false;

  night: any;
  myprice: any;
  total: any;
  ftotal: any;
  mydiscount: any;


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
      // Obtener el valor seleccionado del evento
      this.myprice = this.priceSelected.value;
  }

  handleChangeD(event: any) {
    // Obtener el valor seleccionado del evento
    this.mydiscount = this.discountSelected.value;
}

  showDialog() {
        this.visible = true;
        this.quote();
  }

  quote(){

    

    const diferenciaMilisegundos: number = this.dateS.getTime() - this.dateE.getTime();
    const cantidadNoches: number = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    this.night = cantidadNoches;
    
    if (this.mydiscount !== 0) {
      this.total = this.myprice * this.night
      this.ftotal = this.total - (this.total * (this.mydiscount/100))
      
    }else{
      this.total = this.myprice * this.night
      this.ftotal = this.total
    }


  }
}

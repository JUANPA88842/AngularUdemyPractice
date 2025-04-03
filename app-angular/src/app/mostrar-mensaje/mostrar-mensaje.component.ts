import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {

  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = 'Oprimiste el boton';
  }

  resetearMensaje() {
      this.mensaje = '';
    }
  
    
}

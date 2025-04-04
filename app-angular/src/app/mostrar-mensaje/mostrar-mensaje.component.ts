import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {

  mensaje: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensaje']
  }

  mostrarMensaje() {
    this.mensaje = 'Oprimiste el boton';
  }

  resetearMensaje() {
      this.mensaje = '';
    }
  
    
}

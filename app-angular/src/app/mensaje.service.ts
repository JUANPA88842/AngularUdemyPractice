import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensaje: string = 'Hola desd el servicio de mensajes';

  constructor() { }

  obtenerMeensaje(): string{
    return this.mensaje
  }
}

import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>()
  enviarMensaje(){
    //Emitit el evento con un mensaje (se emite una cadena)
    this.notificarPadre.emit('Mensaje desde el componenete hijo al padre')
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  registros = [];

  registros$ = new EventEmitter<any>();

  constructor( private storage: Storage ) {
    this.traerRegistros();
  }

  guardarRegistro( post ) {

    if ( !this.registros ) {
      this.registros = [];
    }

    this.registros.unshift( post );
    this.storage.set( 'registros', this.registros );

    this.registros$.emit( this.registros );
  }

  private async traerRegistros() {
    this.registros = await this.storage.get('registros');

    this.registros$.emit( this.registros );
  }

  actualizarRegistros() {}

  eliminarRegistros() {}

  eliminarTodos() {}
}

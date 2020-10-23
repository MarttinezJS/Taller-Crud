import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  opciones = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };
  constructor( private _DB: ProviderService ) { }

  ngOnInit() {
  }

  onClick( formulario ) {
    this._DB.guardarRegistro(formulario);
  }

}

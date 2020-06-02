import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

    @Input() jugadores; // Esta propiedad recibirá valores desde su componente padre
    @Input() equipo;
    @Output() canasta: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    setCanasta(puntos, nombre) {
        this.canasta.emit({puntos, nombre}); // ECMA 2015 equivale a puntos: puntos, nombre: nombre
    }

}

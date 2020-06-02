import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

    @Input() jugadores; // Esta propiedad recibirá valores desde su componente padre
    @Input() equipo;

    constructor() { }

    ngOnInit() {
    }

}

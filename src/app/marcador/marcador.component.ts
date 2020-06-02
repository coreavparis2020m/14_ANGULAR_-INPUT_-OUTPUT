import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {

    partido = {
        local: 'lakers',
        visitante: 'celtics'
    }

    locales = [
        {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/img/thomas.png'},
        {nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/img/kuzma.png'},
        {nombre: 'Julius Randle', puntos: 0, imagen: 'assets/img/randle.png'},
        {nombre: 'Brandom Ingram', puntos: 0, imagen: 'assets/img/ingram.png'},
        {nombre: 'Brook López', puntos: 0, imagen: 'assets/img/lopez.png'}
    ]

    visitantes = [
        {nombre: 'Kaadem Allen', puntos: 0, imagen: 'assets/img/allen.png'},
        {nombre: 'Aron Bynes', puntos: 0, imagen: 'assets/img/bynes.png'},
        {nombre: 'Jabari Bird', puntos: 0, imagen: 'assets/img/bird.png'},
        {nombre: 'Jaylen Brown', puntos: 0, imagen: 'assets/img/brown.png'},
        {nombre: 'Jonathan Gibson', puntos: 0, imagen: 'assets/img/gibson.png'}
    ]

    topJugadores = [];

    puntosLocales = 0;
    puntosLocalesFormat = '00';
    puntosVisitantes = 0;
    puntosVisitantesFormat = '00';


    constructor() { }

    ngOnInit() {
        this.topJugadores = this.locales.concat(this.visitantes);
    }

    getCanastaLocal(canasta) {
        this.puntosLocales += canasta.puntos;
        this.formatPuntos();
        this.locales.forEach(elem => {
            if (elem.nombre === canasta.nombre) {
                elem.puntos += canasta.puntos;
            }
        });
        this.updateTopScore();
    }

    getCanastaVisitante(canasta) {
        this.puntosVisitantes += canasta.puntos;
        this.formatPuntos();
        this.visitantes.forEach(elem => {
            if (elem.nombre === canasta.nombre) {
                elem.puntos += canasta.puntos;
            }
        });
        this.updateTopScore();
    }

    updateTopScore() {
        this.topJugadores.sort((a, b) => {
            return (b.puntos - a.puntos);
        });
    }

    formatPuntos() {
        if(this.puntosLocales > 99 || this.puntosVisitantes > 99) {
            this.puntosLocalesFormat = ('0' + this.puntosLocales).slice(-3);
            this.puntosVisitantesFormat = ('0' + this.puntosVisitantes).slice(-3);
        } else {
            this.puntosLocalesFormat = ('0' + this.puntosLocales).slice(-2);
            this.puntosVisitantesFormat = ('0' + this.puntosVisitantes).slice(-2);
        }
    }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.scss']
})
export class TopScoreComponent implements OnInit {

    @Input() jugadores;

    constructor() { }

    ngOnInit() {
    }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../services/heroes.services';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  showHero() {
    this.selectedHero.emit( this.index );
    this.router.navigate( ['/hero', this.index] );
  }
}

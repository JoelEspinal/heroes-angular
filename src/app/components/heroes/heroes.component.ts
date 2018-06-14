import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  showHero( index: number ) {
    this._router.navigate( ['/hero', index] );
  }
}

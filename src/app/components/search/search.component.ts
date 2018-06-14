import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  param: string;
  heroes: Hero[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
      this.activatedRoute.params.subscribe((params) => {
      this.param = params['text'];
    });
  }

  ngOnInit() {
    this.heroes = this._heroesService.findHero( this.param );
    console.log(this.heroes);
  }


}

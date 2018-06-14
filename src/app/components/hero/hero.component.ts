import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe((params) => {
      this.hero = this._heroesService.getHero( params['id'] );
      console.log(this.hero);
    });
   }

  ngOnInit() {
  }

}

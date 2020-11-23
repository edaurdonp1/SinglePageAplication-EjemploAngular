import { Component, OnInit } from '@angular/core';
import { HeroesService, heroesInterface } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:heroesInterface[] = [];

  constructor( private _heroesService:HeroesService ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}

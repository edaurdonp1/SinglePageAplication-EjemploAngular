import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, heroesInterface } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:heroesInterface[] = [];

  constructor( private _heroesService:HeroesService, private _router:Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe (idH:number) {
    this._router.navigate( ['/heroe', idH] );
  }

}

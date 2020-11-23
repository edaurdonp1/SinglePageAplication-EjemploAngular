import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  pathCasa = {
    DC:"https://i.pinimg.com/originals/b1/4f/4d/b14f4dfabf459f8e9f2e7c7fd4c4e67b.png", 
    Marvel:"https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png"
  }

  constructor( private _activatedRouter:ActivatedRoute, private _heroesService: HeroesService) { 
    this._activatedRouter.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
  }

  getPathCasa (casa:string) {
    if (casa=='DC') {
      return this.pathCasa.DC;
    } else if (casa=='Marvel') {
      return this.pathCasa.Marvel;
    }
  }

  ngOnInit(): void {
  }

}

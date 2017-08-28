import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';
import { HeroService } from './../hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  title = 'Tours of Heroes';
  heroes;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

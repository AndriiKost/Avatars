import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

  // onRemoveHero(): void {
  //   const newHeroes = this.heroes.filter((el) => {
  //     return el.name !== this.selectedHero.name;
  //   });
  //   this.heroes = newHeroes;
  //   console.log(this.heroes);
  //   this.toggleDetails = false;
  // }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';//on importe la class hero
import { HeroService } from '../hero.service';//on importe le service qui correspond a la class importée juste au dessus

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 heroes: Hero[] = [];//je definis ce qu'est Hero

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes =>this.heroes= heroes.slice(1,5));
  }

}
//getHeroes est un observable, subscribe recupere les données et met a jour l'observable
//slice ne recupere qu'un sous-groupe, c-a-d qu'ici il recupere les 5 premiers elements de la liste
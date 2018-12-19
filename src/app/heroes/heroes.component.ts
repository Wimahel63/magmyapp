import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';//on a importe le service. Il faut desormais l'injecter.pour cela, on le precise dans constructor constructor(private heroService: HeroService) { }


@Component({//ce decorateur est genere automatiquement lorsque l'on genere le composant en invite. Il definit les metadonnees dont on va avoir besoin
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];

  hero: Hero = {
    id: 1,
    name:'T-rex',
    age:35,
    poste:'synthé'
  };

  selectedHero:Hero;

  onSelect(hero:Hero):void{//fonction: lorsque je clique sur qqun, je veux que cette fonction s'execute
    this.selectedHero=hero;
  }

  constructor(private heroService: HeroService) { }// =injection de service, c'est ce qui donne la capacité d'utiliser le service

  getHeroes(): void{
   this.heroService.getHeroes().subscribe(heroes => this.heroes= heroes);//va me chercher les infos et stocke-les dans heroes dès que le composant est créé. Ici c'est une fonction synchrone
  }//on ne peut pas afficher tel quel un observable(ici, this.heroService.getHeroes()). On fait alors appel a une fonction subscribe

  //mon observable va piocher les infos qui arrivent: .subscribe( => this.  =  );


  ngOnInit() {//genere la liste lors de la creation du composant correspondant,c-a-d Heroes
     this.getHeroes();
  }

}

import { Injectable } from '@angular/core';//on a recupere injectable qui etait dans la biblio angular/core
import { Hero } from './hero';
import { HEROES } from './mock_heroes';
import { Observable, of } from 'rxjs';//rxjs est une bibliotheque js asynchrone
//observable est un objet asynchrone qui centralise les données, of est une fonction qui existe dans rxjs qui simule l'obtention des données a partir d'un serveur lointain
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'//issu de la racine
})
export class HeroService {//service injectable dans la racine

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{//get : va chercher les infos de : hero.On utilise ici une methode synchrone
    this.messageService.add('HeroService: super j\'ai trouvé les employés');//message retourné si la condition est trouvée, c-a-d si les noms des employés ont ete trouvés
    return of(HEROES);//en situation de travail, la fonction of ne se fait pas, car on ne veut pas simuler mais obtenir réellement un resultat
  }

  getHero(id: number):Observable<Hero>{
    this.messageService.add('HeroService: super!!');
    return of(HEROES.find(hero =>hero.id===id));
  }
}
//ici, l'id est bien un number grace au + ajouté dans hero-detail.component.ts: getHero():void{
    // const id= +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id).subscribe(hero => this.hero = hero);//le + convertit la chaine de caracteres this.route.snapshot.paramMap.get('id'); en nombres

//composant message: son seul role est d'afficher
//affichage :uniquement en component     /      recuperation des données: services
//message.service: recuperation des messages   /  //hero.service: recuperation des données des employés
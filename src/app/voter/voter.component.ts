import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
  <h4>{{name}}</h4>
  <button (click)="vote(true)" [disabled]="didVote">Oui</button>
  <button (click)="vote(false)" [disabled]="didVote">Non</button>
  `//cette methode s'appelle inligne, c'est la meme chose  qu'avec url mais en html
  //des qu'il y a un clic, vas dans les parametres et affiche moi qu'il y a eu un evenement, donc ici, un vote
})
export class VoterComponent  {
@Input() name:string;//le pere votetaker envoie cette info
@Output() voted =new EventEmitter<boolean>();//voted est un event transmetteur envoyé au père
didVote = false;//dans ce composant il y a les boutons oui-non sur lesquels se fait l'evenement. Au debut, personne n'a voté, donc false

vote(agreed: boolean){
  this.voted.emit(agreed);
  this.didVote = true;//mets a jour les conditions lorsque les gens ont voté
}
  constructor() { }

  ngOnInit() {
  }

}

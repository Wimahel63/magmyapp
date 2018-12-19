//votetaker est le composant -pere, le composant-coquille : on doit donc ne pas oublier de le rajouter dans app.component.html  <app-votetaker></app-votetaker>

import { Component } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  template:`
  <h2>Doit-on mettre en place des cours de quiddich en entreprise?</h2>
  <h3>Oui : {{agreed}}, Non: {{disagreed}}</h3>
  <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)"></app-voter>
  `//interpolation: on retrouve ces variables dans voter.On met a jour les données que l'on a avec *ngFor 

  //<app-voter> il y a plusieurs voteurs, donc pour eviter de reecrire plusieurs fois ce code je fais appel a une boucle *ngFor
})

export class VotetakerComponent  {

  agreed= 0;
  disagreed= 0;
  voters= ['Anas', 'Julie', 'Houda', 'Mohamed', 'Bernard', 'Josette', 'Assa'];

  onVoted(agreed : boolean) {//event qui prend en compte les perso qui ont voté. On a indique booleen car la seule possibilite de vote est oui ou non. Si on avait eu , par ex, plusieurs choix de nombres, on aurait mit: number, etc
    agreed ? this.agreed++ : this.disagreed++;//le ? revient a un if... else, mais sur une seule ligne
  }

}

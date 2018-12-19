import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }//pas de private ici sinon on ne peut pas l'afficher, or ici on veut qu'il affiche le message reçu

  ngOnInit() {
  }

}
//scenario service in service: un service dans un service
//on ne peut jamais avoir acces a des proprietes sans getter et setter.Si la proprioete n'est pas publique les liaisons en informatique ne se font pas
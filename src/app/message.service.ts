import { Injectable } from '@angular/core';

@Injectable({//ce decorateur me dit que ce service est injectable
  providedIn: 'root'//accessible partout dans le projet car il s'agit du dossier racine
})
export class MessageService {

  messages: string[] = [];//on a type message comme etant un tableau de caracteres

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages= [];
  }
  constructor() { }
}

//fonction add et clear: ajouter et supprimer
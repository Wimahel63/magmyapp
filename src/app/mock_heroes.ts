import { Hero } from './hero';

export const HEROES: Hero[] = [
    { id: 11, name: 'Anas Yousfi', age:20, poste:"guitare"},
    { id: 12, name: 'Assa Traore', age:20, poste:"batterie"},
    { id: 13, name: 'Hakim Belfkih', age:20, poste:"trompette"},
    { id: 14, name: 'Julie Buisson', age:20, poste:"clavecin"},
    { id: 15, name: 'Mag Piszczyglowa', age:20, poste:"synthé"},
    { id: 16, name: 'Mathieu Berrah', age:20, poste:"trombone"},
    { id: 17, name: 'Mehdi Troare', age:20, poste:"saxo"},
    { id: 18, name: 'Mohamed Ba', age:20, poste:"piano"}, 
    { id: 19, name: 'Mohamed Aarous', age:20, poste:"clavier"},
    { id: 20, name: 'Yvette Toukam', age:20, poste:"flute"}, 
    { id: 21, name: 'Sonia Bougamha', age:20, poste:"triangle"},

];
//je dois preciser tous les champs qui ont ete remplis  dans hero.ts, c-a-d que si j'avais uniquement preciser id et name dans hero.ts, ici j'aurai du specifier uniquement id et name. Comme j'ai specifie age et poste egalement dans hero.ts, je dois les preciser ici aussi
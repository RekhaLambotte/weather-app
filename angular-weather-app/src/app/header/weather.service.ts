import { Injectable } from '@angular/core';
import { CurrentWeather } from '../current-weather';



// Le service est une vaste catégorie englobant toute valeur, fonction ou fonctionnalité dont une application a besoin. Un service est généralement une classe avec un objectif étroit et bien défini. Il doit faire quelque chose de spécifique et bien le faire.


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('New York', '80', 'sunny', '96', '72') // new CurrentWeather = appel du composant qui est dans current-weather.ts      + ('argument2','argument2','...') = il faut autant d'argument ici qu'il n'y en a dans le current-weather.ts
  
  constructor() { }

  weatherNow(){
    return this.current;
  }

}

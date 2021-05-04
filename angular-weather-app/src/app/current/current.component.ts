import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../header/weather.service';
//import {Weather} from '../current-weather'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  // myWeather:Weather;

  constructor(private ws:WeatherService) { }

  ngOnInit(): void {
    this.ws.weatherNow();
  }

}

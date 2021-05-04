import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { ContactComponent } from './contact/contact.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeaderComponent } from './header/header.component';
import { weatherRouting } from '../../weather.routing';
import { WeatherService } from './header/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    ContactComponent,
    ForecastComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    weatherRouting
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

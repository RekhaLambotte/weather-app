import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./src/app/contact/contact.component";
import { CurrentComponent } from "./src/app/current/current.component";
import { ForecastComponent } from "./src/app/forecast/forecast.component";

const WEATHER_ROUTER:Routes = [
    {path: "", component: CurrentComponent},
    {path: "forecast", component: ForecastComponent},
    {path: "contact", component: ContactComponent}
]


export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouristComponent } from './tourist/tourist.component';
import { FlightComponent } from './flight/flight.component';
import {TouristFlightComponent} from './tourist-flight/tourist-flight.component'

const routes: Routes = [
  {path: '', component: TouristComponent},
  {path: 'flights', component: FlightComponent},
  {path: 'touristsFlights', component: TouristFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

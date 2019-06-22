import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouristComponent } from './tourist/tourist.component';
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  {path: '', component: TouristComponent},
  {path: 'flights', component: FlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

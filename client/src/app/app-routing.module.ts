import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouristComponent } from './tourist/tourist.component';

const routes: Routes = [
  {path: '', component: TouristComponent},
  {path: 'contact', component: TouristComponent},
  {path: 'about', component: TouristComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

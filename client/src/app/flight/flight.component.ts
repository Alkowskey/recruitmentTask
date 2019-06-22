import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../flights.service';
import {SnackbarsService} from '../snackbars.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Object;
  selectedValue: any = {};

  constructor(private Flights: FlightsService, private _snackbar: SnackbarsService) { }

  ngOnInit() {
      this.loadFlights();
  }

  loadFlights(){
    this.Flights.getFlights().subscribe(data=>{
      this.flights = data;
      console.log(this.flights);
    })
  }

  saveToDatabase(){

    console.log("Update");

    this.Flights.updateFlight(this.selectedValue).subscribe(data=>{
      console.log(data);
      this._snackbar.openSnackBar(data, "close");

      this.loadFlights();
    });
  }

  Send(){
    if(this.selectedValue.Id===undefined||this.selectedValue.Id===null)
      this.createNewFlight();
    else 
      this.saveToDatabase();
  }

  setAll(obj){
      Object.keys(obj).forEach(function(index) {
          obj[index] = '';
      });

  }

  deleteFromDatabase(){
    console.log("Delete");

    this.Flights.deleteFlight(this.selectedValue).subscribe(data=>{
      console.log(data);

      this._snackbar.openSnackBar(data, "close");

      this.loadFlights();
    })

    this.setAll(this.selectedValue);
  }

  createNewFlight(){
    console.log("Create");

    this.Flights.createFlight(this.selectedValue).subscribe(data=>{
      console.log(data);

      this._snackbar.openSnackBar(data, "close");

      this.loadFlights();
    });

    this.setAll(this.selectedValue);

  }

}

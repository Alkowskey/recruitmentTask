import { Component, OnInit } from '@angular/core';
import {TouristsService} from '../tourists.service';
import { FlightsService } from '../flights.service';
import { TouristsFlightsService } from '../tourists-flights.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import {SnackbarsService} from '../snackbars.service';

export interface Tourist_Flight {
  Id: number;
  name: string;
  surname: string;
  sex: string;
  country: string;
  notes: string;
  date_of_birth: string;
  createdAt: Date;
  updatedAt: Date;
  Flights_Id: number;
  Flights_departure_time: Date;
  Flights_arrival_time: Date;
  Flights_number_of_seats: number;
  Flights_ticket_price: number;
}


@Component({
  selector: 'app-tourist',
  templateUrl: './tourist-flight.component.html',
  styleUrls: ['./tourist-flight.component.css']
})

export class TouristFlightComponent implements OnInit {

  tourists: Object;
  flights: Object;

  touristFlight: Tourist_Flight[];
  dataSource;

  displayedColumns: string[] = ['name', 'surname', 'date_of_birth', 'flightId', 'number_of_seats', 'ticket_price', 'delete'];

  selectedTourist: any = {};
  selectedFlight: any = {};

  constructor(private Tourists: TouristsService, private Flights: FlightsService, private touristsFlights: TouristsFlightsService, private _snackbar: SnackbarsService) { }

  ngOnInit() {
      this.loadTourists();
      this.loadFlights();
      this.loadTouristsInFlights();
  }

  loadTouristsInFlights(){
    this.touristsFlights.getTouristsInFlights().subscribe((tourists: Tourist_Flight[])=>{
      this.touristFlight = tourists;
      console.log(this.touristFlight);
      this.dataSource = new MatTableDataSource(this.touristFlight);

      console.log(this.dataSource);
    })
  }

  delete(_touristFlight){
    console.log(_touristFlight);
    this.touristsFlights.deleteTouristFromFlight(_touristFlight).subscribe(data=>{
      console.log(data);

      this._snackbar.openSnackBar(data, "close");

      this.loadTouristsInFlights();
    });
  }

  loadTourists(){
    this.Tourists.getTourists().subscribe(data=>{
      this.tourists = data;
      //console.log(this.tourists);
    })

  }

  loadFlights(){
    this.Flights.getFlights().subscribe(data=>{
      this.flights = data;
      //console.log(this.flights);
    })
  }

  addTourist(){
    this.touristsFlights.addTouristToFlight(this.selectedTourist, this.selectedFlight).subscribe(data=>{
      console.log(data);
      
      this._snackbar.openSnackBar(data, "close");

      this.loadTouristsInFlights();
    });
  }

}

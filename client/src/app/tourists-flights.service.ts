import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TouristsFlightsService {

  constructor(private http: HttpClient) { }

  addTouristToFlight(tourist, flight){
    console.log(JSON.stringify({FlightId: flight.Id, TouristId: tourist.Id}))
    return this.http.post("http://127.0.0.1:8080/api/joined/addTourist", {FlightId: flight.Id, TouristId: tourist.Id}, {responseType: 'text'});
  }

  getTouristsInFlights(){
    return this.http.get("http://127.0.0.1:8080/api/joined/Tourists");
  }

  deleteTouristFromFlight(touristFlight){
    console.log({FlightId: touristFlight['Flights.Id'], TouristId: touristFlight['Id']})
    return this.http.post("http://127.0.0.1:8080/api/joined/deleteTouristFlight", {FlightId: touristFlight['Flights.Id'], TouristId: touristFlight['Id']},
    {responseType: 'text'});
  }
  
}

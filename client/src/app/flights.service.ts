import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getFlights(){
    return this.http.get('http://127.0.0.1:8080/api/Flights/getFlights');
  }

  updateFlight(flight){
    console.log(JSON.stringify(flight));
    return this.http.post('http://127.0.0.1:8080/api/Flights/updateFlight', flight);
  }

  createFlight(flight){
    console.log(JSON.stringify(flight));
    return this.http.post('http://127.0.0.1:8080/api/Flights/createFlight', flight);
  }

  deleteFlight(flight){
    console.log(JSON.stringify(flight));
    return this.http.post('http://127.0.0.1:8080/api/Flights/deleteFlight', flight);
  }
}

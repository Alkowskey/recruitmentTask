import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TouristsService {

  constructor(private http: HttpClient) { }

  getTourists(){
    return this.http.get('http://127.0.0.1:8080/api/Tourists/getTourists');
  }

  updateTourist(tourist){
    console.log(JSON.stringify(tourist));
    return this.http.post('http://127.0.0.1:8080/api/Tourists/updateTourist', tourist);
  }

  createTourist(tourist){
    console.log(JSON.stringify(tourist));
    return this.http.post('http://127.0.0.1:8080/api/Tourists/createTourist', tourist);
  }

  deleteTourist(tourist){
    console.log(JSON.stringify(tourist));
    return this.http.post('http://127.0.0.1:8080/api/Tourists/deleteTourist', tourist);
  }
}

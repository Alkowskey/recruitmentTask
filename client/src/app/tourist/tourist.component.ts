import { Component, OnInit } from '@angular/core';
import {TouristsService} from '../tourists.service';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {

  tourists: Object;
  selectedValue: any = {};

  constructor(private Tourists: TouristsService) { }

  ngOnInit() {
      this.loadTourists();
  }

  loadTourists(){
    this.Tourists.getTourists().subscribe(data=>{
      this.tourists = data;
      console.log(this.tourists);
    })
  }

  saveToDatabase(){

    console.log("Update");

    this.Tourists.updateTourist(this.selectedValue).subscribe(data=>{
      console.log(data);

      this.loadTourists();
    });

    this.loadTourists();
  }

  Send(){
    if(this.selectedValue.Id===undefined||this.selectedValue.Id===null)
      this.createNewTourist();
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

    this.Tourists.deleteTourist(this.selectedValue).subscribe(data=>{
      console.log(data);

      this.loadTourists();
    })
  }

  createNewTourist(){
    console.log("Create");

    this.Tourists.createTourist(this.selectedValue).subscribe(data=>{
      console.log(data);

      this.loadTourists();
    });

    this.setAll(this.selectedValue);

  }

}

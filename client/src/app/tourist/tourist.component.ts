import { Component, OnInit } from '@angular/core';
import {TouristsService} from '../tourists.service';
import {SnackbarsService} from '../snackbars.service';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {

  tourists: Object;
  selectedValue: any = {};

  constructor(private Tourists: TouristsService, private _snackbar: SnackbarsService) { }

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

    this.Tourists.updateTourist(this.selectedValue).subscribe((data: string)=>{
      console.log(data);

      this._snackbar.openSnackBar(data, "close");
      
      this.loadTourists();
    });

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

    this.Tourists.deleteTourist(this.selectedValue).subscribe(data=>{
      this._snackbar.openSnackBar(data, "close");

      this.loadTourists();
    })

    this.setAll(this.selectedValue);
  }

  createNewTourist(){

    this.Tourists.createTourist(this.selectedValue).subscribe(data=>{

      this._snackbar.openSnackBar(data, "close");

      this.loadTourists();
    });

    this.setAll(this.selectedValue);

  }

}

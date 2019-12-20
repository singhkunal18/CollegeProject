import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  innerheight;
  innerwidth;

  selectedDate:any;
  selectedTime:any;
  selectedName:any;
  selectedAddress:any;
  selectedCity:any;
  selectedState:any;
  selectedPinCode:any;

  constructor() {
    this.innerheight = window.innerHeight;
    this.innerwidth = window.innerWidth;
  }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}

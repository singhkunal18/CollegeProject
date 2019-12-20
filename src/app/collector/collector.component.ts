import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent implements OnInit {

  @ViewChild('bdGroup',{static:false}) bioDegradableButtonGroup:any;
  @ViewChild('nbdGroup',{static:false}) nonBioDegradableButtonGroup:any;


  isCalenderVisible: Boolean = false;
  isAddAddressVisible: Boolean = false;

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

  panelOpenState = false;

  showCalender() {
    // console.log(this.bioDegradableButtonGroup.value);
    // console.log(this.nonBioDegradableButtonGroup.value);
    if (!this.isCalenderVisible) {
      this.isCalenderVisible = true;
    } else {
      this.isCalenderVisible = false;
    }
  }

  addAddress(){
    this.showCalender();
    if (!this.isAddAddressVisible) {
      this.isAddAddressVisible = true;
    } else {
      this.isAddAddressVisible = false;
    }
  }

  onSubmit(){
    console.log(this.selectedDate);
    console.log(this.selectedTime);
    console.log(this.selectedName);
    console.log(this.selectedAddress);
    console.log(this.selectedCity);
    console.log(this.selectedState);
    console.log(this.selectedPinCode);
  }

}

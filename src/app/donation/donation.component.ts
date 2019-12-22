import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  isCalenderVisible: Boolean = false;
  isAddAddressVisible: Boolean = false;
  isCheckoutVisible:Boolean = false;
  isPaymentVisible:Boolean=false;
  isOrderPlaced:Boolean=false;

  innerheight;
  innerwidth;

  selectedClothes:any;
  selectedBooks:any;
  selectedUtensils:any;
  selectedShoes:any;
  selectedDate:any;
  selectedTime:any;
  selectedName:any;
  selectedAddress:any;
  selectedCity:any;
  selectedState:any;
  selectedPinCode:any;

  minFinalDate:any;
  maxFinalDate:any;

  constructor() {
    this.innerheight = window.innerHeight;
    this.innerwidth = window.innerWidth;
  }

  ngOnInit() {
    var currentDate = new Date();
    var minDate = new Date();
    currentDate.setDate(currentDate.getDate()+10);
    var maxDate = new Date(currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDate());
    this.minFinalDate = minDate.getFullYear()+"-"+(minDate.getMonth()+1)+"-"+minDate.getDate();
    this.maxFinalDate = maxDate.getFullYear()+"-"+(maxDate.getMonth()+1)+"-"+maxDate.getDate();
  }

  showCalender() {
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
  goBackToAddresses(){
    this.isAddAddressVisible=true;
    this.isCheckoutVisible=false;
  }

  gotoCheckout(){
    this.isCheckoutVisible=true;
    this.isAddAddressVisible=false;
    this.isCalenderVisible=false;

    console.log(this.selectedDate);
    console.log(this.selectedTime);
    console.log(this.selectedName);
    console.log(this.selectedAddress);
    console.log(this.selectedCity);
    console.log(this.selectedState);
    console.log(this.selectedPinCode);
  }
  goBackToCheckout(){
    this.isCheckoutVisible=true;
    this.isPaymentVisible=false;
  }
  showPlacedOrderMessage(){
    this.isCheckoutVisible=false;
    this.isOrderPlaced=true;
  }

}

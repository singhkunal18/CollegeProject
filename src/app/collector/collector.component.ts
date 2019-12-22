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
  isCheckoutVisible:Boolean = false;
  isPaymentVisible:Boolean=false;
  isOrderPlaced:Boolean=false;

  innerheight;
  innerwidth;

  selectedDate:any;
  selectedTime:any;
  selectedName:any;
  selectedAddress:any;
  selectedCity:any;
  selectedState:any;
  selectedPinCode:any;
  selectedBioDegQuantity:Number=0;
  selectedNonBioDegQuantity:Number=0;
  totalCost:Number=0;

  constructor() {
    this.innerheight = window.innerHeight;
    this.innerwidth = window.innerWidth;
  }

  ngOnInit() {
  }

  panelOpenState = false;

  showCalender() {
    if(this.bioDegradableButtonGroup)
    this.selectedBioDegQuantity = this.bioDegradableButtonGroup.value;
    if(this.nonBioDegradableButtonGroup)
    this.selectedNonBioDegQuantity = this.nonBioDegradableButtonGroup.value;
    
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

    this.totalCost = (+this.selectedBioDegQuantity)+(+this.selectedNonBioDegQuantity);
    
    console.log(this.selectedBioDegQuantity);
    console.log(this.selectedNonBioDegQuantity);
    console.log(this.selectedDate);
    console.log(this.selectedTime);
    console.log(this.selectedName);
    console.log(this.selectedAddress);
    console.log(this.selectedCity);
    console.log(this.selectedState);
    console.log(this.selectedPinCode);
  }
  goToPayment(){
    this.isPaymentVisible=true;
    this.isCheckoutVisible=false;
  }
  goBackToCheckout(){
    this.isCheckoutVisible=true;
    this.isPaymentVisible=false;
  }
  showPlacedOrderMessage(){
    this.isPaymentVisible=false;
    this.isOrderPlaced=true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent implements OnInit {

  isCalenderVisible:Boolean=false;

  innerheight;
  innerwidth;

  constructor() { 
    this.innerheight = window.innerHeight;
    this.innerwidth = window.innerWidth;
  }

  ngOnInit() {
  }

  panelOpenState = false;

  showCalender(){
    if(!this.isCalenderVisible){
    this.isCalenderVisible=true;
  } else {
    this.isCalenderVisible=false;
  }
}

}

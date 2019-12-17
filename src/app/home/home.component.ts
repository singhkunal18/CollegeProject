import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerheight;
  innerwidth;

  constructor(private router:Router) { 
      this.innerheight = window.innerHeight;
      this.innerwidth = window.innerWidth;
   }

  ngOnInit() {
  }

  gotoComponent(componentName:String){
    if(componentName === 'WC'){
      console.log('WC');
      this.router.navigate['/gcollection'];
    } else if (componentName === 'ID'){
      console.log('ID');
      this.router.navigate['/idonation'];
    }
  }

}

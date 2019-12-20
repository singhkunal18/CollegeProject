import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'icons'
})
export class IconsPipe implements PipeTransform{
    iconPath = 'assets/icons/';
    iconDict = [];

    constructor(){
        this.iconDict['wastecollection_logo'] = this.iconPath + 'wastecollection-logo.svg';
        this.iconDict['itemdonation_logo'] = this.iconPath + 'itemdonation-logo.svg';
        this.iconDict['home_logo'] = this.iconPath + 'home-logo.svg';
        this.iconDict['recycle_logo'] = this.iconPath + 'recycle-icon.svg';

    }

    transform(value: any, args?: any): any {
        if (value.toLowerCase() in this.iconDict) {
           return this.iconDict[value.toLowerCase()];
       }
     return null;
   }
}
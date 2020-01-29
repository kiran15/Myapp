import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public minvalue =1;
  constructor() {}
  tryagain(){
    this.minvalue =1;
   }
   firstdetails(){
    this.minvalue =1;
   }
   seconddetails(){
    this.minvalue =2;
  }
  thirddetails(){
    this.minvalue =3;
  }
}

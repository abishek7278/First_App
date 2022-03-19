import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title ="Hello World!";

  getMin(a:any,b:any){
    if(a<b){
      return a;
    }
    return b;
  }
  text=false;
  toggleText(event:any):void{
    this.text=!this.text;
    console.log(event);
  }
  Datenow=new Date();
}

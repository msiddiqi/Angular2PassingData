import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = "Incrementer App";

  incrementInputNum : number;
  incrementedNum : number;

  increment($event) : void {

    console.log('event received');

    this.incrementedNum = $event;

    console.log($event)
  }

}

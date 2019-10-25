import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
drunkquotes: string[];
constructor(){
  this.drunkquotes = ['heath ledger','Steve Fergosi','Frank Sinatra','Compton Mackenzie']
}
}
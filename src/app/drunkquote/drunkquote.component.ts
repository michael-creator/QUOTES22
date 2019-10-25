import { Component, OnInit } from '@angular/core';
import { Drunkquote } from '../drunkquote';


@Component({
  selector: 'app-drunkquote',
  templateUrl: './drunkquote.component.html',
  styleUrls: ['./drunkquote.component.css']
})
export class DrunkquoteComponent implements OnInit {

  drunkquotes: Drunkquote[] = [
    new Drunkquote(1,'F. Scott Fitzgerald','First you take a drink, then the drink takes a drink, then the drink takes you'),
    new Drunkquote(2,'Steve Fergosi','A drunk man’s words are a sober man’s thoughts.'),
    new Drunkquote(3,' Frank Sinatra','I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.'),
    new Drunkquote(4,'Benjamin Franklin','In wine there is wisdom, in beer there is Freedom, in water there is bacteria.'),
    new Drunkquote(5,'Winston S. Churchill','A lady came up to me one day and said ‘Sir! You are drunk’, to which I replied ‘I am drunk today madam, and tomorrow I shall be sober, but you will still be ugly.'),
  ];
  toggleDetails(index){
    this.drunkquotes[index].showDescription = !this.drunkquotes[index].showDescription;
  }
  completeDrunkquote(isComplete, index){
    if (isComplete) {
      this.drunkquotes.splice(index,1);
    }
  }
  
  constructor() { }
 
  ngOnInit() {
  }

}

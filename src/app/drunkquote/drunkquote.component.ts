import { Component, OnInit } from '@angular/core';
import { Drunkquote } from '../drunkquote';


@Component({
  selector: 'app-drunkquote',
  templateUrl: './drunkquote.component.html',
  styleUrls: ['./drunkquote.component.css']
})
export class DrunkquoteComponent implements OnInit {

  drunkquotes: Drunkquote[] = [
    {id:1, name:'F. Scott Fitzgerald',description:'First you take a drink, then the drink takes a drink, then the drink takes you'},
    {id:2,name:'Steve Fergosi',description:'A drunk man’s words are a sober man’s thoughts.'},
    {id:3,name:' Frank Sinatra',description:'I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.'},
    {id:4,name:'Benjamin Franklin',description:'In wine there is wisdom, in beer there is Freedom, in water there is bacteria.'},
    {id:5,name:'Winston S. Churchill',description:'A lady came up to me one day and said ‘Sir! You are drunk’, to which I replied ‘I am drunk today madam, and tomorrow I shall be sober, but you will still be ugly.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

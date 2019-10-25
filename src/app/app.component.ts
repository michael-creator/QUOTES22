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
  this.drunkquotes = ['Smile, because it confuses people. Smile, because its easier than explaining what is killing you inside','I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.','A drunk man’s words are a sober man’s thoughts.']
}
}
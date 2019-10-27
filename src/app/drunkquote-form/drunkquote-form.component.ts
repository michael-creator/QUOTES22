import { Drunkquote } from './../drunkquote';
import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-drunkquote-form',
  templateUrl: './drunkquote-form.component.html',
  styleUrls: ['./drunkquote-form.component.css']
})
export class DrunkquoteFormComponent implements OnInit {
  newDrunkquote = new Drunkquote(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}

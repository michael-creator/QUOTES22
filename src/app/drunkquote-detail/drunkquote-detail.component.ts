import { Component, OnInit,Input } from '@angular/core';
import { Drunkquote } from '../drunkquote';
@Component({
  selector: 'app-drunkquote-detail',
  templateUrl: './drunkquote-detail.component.html',
  styleUrls: ['./drunkquote-detail.component.css']
})
export class DrunkquoteDetailComponent implements OnInit {
@Input() drunkquote: Drunkquote
  constructor() { }

  ngOnInit() {
  }

}

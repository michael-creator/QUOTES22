import { Drunkquote } from './../drunkquote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-drunkquote-form',
  templateUrl: './drunkquote-form.component.html',
  styleUrls: ['./drunkquote-form.component.css']
})
export class DrunkquoteFormComponent implements OnInit {
  newDrunkquote = new Drunkquote(0,"","",new Date());
  @Output() addDrunkquote = new EventEmitter<Drunkquote>();
  submitDrunkquote(){
  this.addDrunkquote.emit(this.newDrunkquote)
}

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Drunkquote } from '../drunkquote';
@Component({
  selector: 'app-drunkquote-detail',
  templateUrl: './drunkquote-detail.component.html',
  styleUrls: ['./drunkquote-detail.component.css']
})
export class DrunkquoteDetailComponent implements OnInit {
@Input() drunkquote: Drunkquote
@Output() isComplete = new EventEmitter<boolean>();
@Output() upvotes = new EventEmitter<boolean>();
@Output() downvotes = new EventEmitter<boolean>();

drunkquoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
upVotes(){
  this.upvotes.emit(true);
}
downVotes(){
  this.downvotes.emit(true);
}
  constructor() { }

  ngOnInit() {
  }

}

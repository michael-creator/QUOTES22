import { Component, OnInit,  ElementRef} from '@angular/core';
import { Drunkquote } from '../drunkquote';


@Component({
  selector: 'app-drunkquote',
  templateUrl: './drunkquote.component.html',
  styleUrls: ['./drunkquote.component.css']
})
export class DrunkquoteComponent implements OnInit {

  drunkquotes: Drunkquote[] = [
    new Drunkquote(1,'F. Scott Fitzgerald','First you take a drink, then the drink takes a drink, then the drink takes you',new Date(2019,10,9)),
    new Drunkquote(2,'Steve Fergosi','A drunk man’s words are a sober man’s thoughts.',new Date(2019,10,9)),
    new Drunkquote(3,' Frank Sinatra','I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.',new Date(2019,10,9)),
    new Drunkquote(4,'Benjamin Franklin','In wine there is wisdom, in beer there is Freedom, in water there is bacteria.',new Date(2019,10,9)),
    new Drunkquote(5,'Winston S. Churchill','A lady came up to me one day and said ‘Sir! You are drunk’, to which I replied ‘I am drunk today madam, and tomorrow I shall be sober, but you will still be ugly.',new Date(2019,10,9)),
  ];
  upvotes: any;
  downvotes: any;

//   ngAfterViewInit(){
//     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1bbfa7';
//  }

  addNewDrunkquote(drunkquote){
    let drunkquoteLength = this.drunkquotes.length;
    drunkquote.id = drunkquoteLength+1;
    drunkquote.completeDate = new Date(drunkquote.completeDate)
    this.drunkquotes.push(drunkquote)
  }
  
  toggleDetails(index){
    this.drunkquotes[index].showDescription = !this.drunkquotes[index].showDescription;
  }
  deleteDrunkquote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.drunkquotes[index].name}?`)

      if (toDelete){
        this.drunkquotes.splice(index,1) // m = m+1
      }
    }
  }
  upVotes(upvotes,index){
      this.drunkquotes[index].upvotes += 1;
  };
  downVotes(downvotes,index){
    this.drunkquotes[index].downvotes += 1;
};
  

  constructor(private elementRef: ElementRef) { }
 
  ngOnInit() {
  }

}

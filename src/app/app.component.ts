import { Component, ElementRef, HostListener, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { PopoverContainerDirective } from '@progress/kendo-angular-tooltip';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent{ 
  @ViewChild('container', { static: false })
  private container!: PopoverContainerDirective;

  public onShow(anchor: Element): void {    
    this.container.hide(); 
    navigator.clipboard.readText().then(res=>{
      //console.log("selected:",res);
      this.selected=res ;
      this.container.show(anchor);     
    });    
   
  }
  title = 'First_Project';
  public checked = false;
  selected:string='';
  data:string[];

  
 
  constructor(){    
    this.data=this.firstTileContent.split(/[.,!,?]/)
    //console.log("data:",this.data);
    


    }
 

  public firstTileContent = `Sachin Tendulkar was born in a middle-class family and he was very interested in cricket. 
  Sachin took up cricket at the age of eleven and was very popular due to the school tournaments.
  He came into the limelight with a performance at his school tournament where he played an innings which is considered 
  to change his life. He held a record partnership of 664 runs with Vinod Kambli playing in a school tournament. 
  That inning allowed the selectors to see the talent and it is considered to be the inning that changed Sachin’s life 
  as he became famous in a fortnight. Because of that inning, people all around the country got to know about a 16 years
   old kid that bats till the bowlers collapse. The Indian cricket team selectors did not waste time in selecting him 
   and before anyone could have imagined Sachin Tendulkar was selected for the series against Pakistan only at the age
    of 16.

  On 15 November 1989, Sachin Tendulkar made his international debut against Pakistan in Karachi. Pakistan’s cricket 
  team was known for its bowling during those days where the combo of Wasim Akram and Waqar Younis were considered 
  to be the most dangerous bowling duo. But Sachin faced them gracefully and even made a few runs. A 16 years old
   boy was able to face the most feared bowlers of that time which opened the doors for him to be selected for future
    cricket matches and a chance to represent the Indian National team. Sachin Tendulkar in his autobiography has
     mentioned that the series against Pakistan was memorable to him as he got a chance to meet and learn to form 
     his idols such as Kapil dev and Sunil Gavaskar.`;

 
   onClick(){
    //debugger;
    navigator.clipboard.readText().then(res=>{
      //console.log("selected:",res);
      this.selected=res      
    });    
  }  
 
  onSelect(){
    navigator.clipboard.readText().then(res=>{
      //console.log("selected:",res);
      this.selected=res      
    });    
  }
  // @HostListener('document:mouseup', ["$event"])
  // public onMouseUp(event: MouseEvent): void {  
  //   //debugger;
    
  //    console.log("selected text:",this.selected);
  //   // this.show=true;

  //  }


  
  }

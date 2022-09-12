import { Component, ElementRef, HostListener, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { PopoverContainerDirective } from '@progress/kendo-angular-tooltip';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent  implements OnChanges{ 
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
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log("changes:",changes);
    
  }

  public firstTileContent = `Avery Brundage (1887–1975) was the fifth president of the International Olympic Committee (IOC),
   the only American to hold that office. In 1912, he competed in the Summer Olympics, contesting the pentathlon and 
   decathlon; both events were won by Jim Thorpe. Brundage became a sports administrator, rising rapidly through the 
   ranks in U.S. sports groups. He fought zealously against a boycott of the 1936 Summer Olympics in Berlin, Nazi
    Germany. Although Brundage was successful, the U.S. participation was controversial, and has remained so. Brundage 
    was elected to the IOC that year, and quickly became a major figure in the Olympic movement. Elected IOC president
     in 1952, Brundage fought strongly for amateurism. On September 6, 1972, at the Munich Olympics, his final as 
     president, when addressing the memorial service following the murder of eleven Israelis by terrorists, Brundage 
     refused to cancel the remainder of the Olympics, declaring that "the Games must go on".`;

 
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

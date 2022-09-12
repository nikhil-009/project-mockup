import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[copyClipboard]'
})
export class CopyClipboardDirective {
  @Input("copyClipboard")
  public payload: string = "";

  @HostListener("click", ["$event"])
  public OnClick(event: MouseEvent): void {  
    //debugger;
    event.preventDefault();
    if (!this.payload)
      return;  
      navigator.clipboard.writeText(this.payload.toString());   
      
  
     //console.log("selected",this.payload);

   }
  //  @HostListener("mouseout", ["$event"])
  // public mouseOut(event: MouseEvent): void {  
  //   //debugger;
  //   event.preventDefault();
  //   if(window.getSelection()){
  //     this.payload=window.getSelection()!.toString();
  //   }
  //   if (!this.payload)
  //     return;  
  //     navigator.clipboard.writeText(this.payload.toString());   
      
  
  //    console.log("payload-custom",this.payload);

  // }
  

}

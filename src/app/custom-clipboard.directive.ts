import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CustomClipboard]'
})
export class CustomClipboardDirective {
  @Input("CustomClipboard")
payload:string=''
  constructor() { }
  @HostListener("mouseout", ["$event"])
  public mouseOut(event: MouseEvent): void {  
   // debugger;
    event.preventDefault();
    if(window.getSelection()){
      this.payload=window.getSelection()!.toString();
    }
    if (!this.payload)
      return;  
      navigator.clipboard.writeText(this.payload.toString());   
      
  
     //console.log("payload-custom",this.payload);

  }

}

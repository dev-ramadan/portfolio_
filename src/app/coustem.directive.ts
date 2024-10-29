import { Directive,ElementRef } from '@angular/core';
@Directive({
  selector: '[appCoustem]',
  standalone: true
})
export class CoustemDirective {

  constructor(e:ElementRef) { 
     
      e.nativeElement.onclick=()=>{
        document.body.classList.toggle('mode')
        const d = document.querySelector(".m");
        d?.classList.add('h')
      }
    }
    }



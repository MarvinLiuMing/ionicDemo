import { Directive,ElementRef,Renderer } from '@angular/core'

@Directive({
    selector:'[indexcontrol]',
})
export class indexcontrolDirective{
    constructor(el:ElementRef,render:Renderer){
        render.setElementStyle(el.nativeElement,'selectedIndex','2');
    }
}

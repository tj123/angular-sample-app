import { Directive, ElementRef, Renderer, Output, Input, EventEmitter, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[fmGrid]'
})
export class FmGridDirective implements OnInit {
  ngOnInit(): void {

    /**
     * 现在可以获取
     */
    console.log(this.fmGrid);
    console.log(this.option);
    console.log(this.color2);
  }


  // private el: ElementRef;

  @Input()
  fmGrid: string;

  @Input()
  option: string;

  @Input('color')
  color2: string;

  constructor(private el: ElementRef, renderer: Renderer) {

    console.log(el);

    console.log('呵呵呵');

    console.log(renderer);

    // this.el = el;

    //获取不到参数
    console.log(this.fmGrid);
    console.log(this.option);
  }



  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }


  dir() {

    alert('eeee');


  }

}

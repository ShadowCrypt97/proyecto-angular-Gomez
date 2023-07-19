import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective implements OnChanges {

  @Input()
  appTitulos = '20px';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.stablishTitleSize();
  }

  stablishTitleSize(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      '20px'
    );
  }
}

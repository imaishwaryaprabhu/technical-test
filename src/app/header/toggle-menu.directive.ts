import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[toggle-menu]'
})
export class ToggleMenuDirective {
  @Input('toggle-menu') menu: HTMLInputElement;

  @HostListener('click') toggleMenu(event: Event) {
    this.menu.classList.toggle('show');
  }

  constructor(private element: ElementRef) { }

}

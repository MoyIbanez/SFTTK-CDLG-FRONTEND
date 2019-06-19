import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

  @Input() public inputValue: boolean;
  @Input() public value: boolean;
  
  @HostListener('click') move() {

    console.log(this.value);
    this.el.nativeElement.parentNode.parentNode.parentNode.firstChild.value = this.value;
    
    if(this.inputValue === true){
      this.el.nativeElement.parentNode.parentNode.parentNode.firstChild.value = this.value;
      this.el.nativeElement.parentNode.parentNode.parentNode.firstChild.setAttribute('type', 'text');
    }
    else if(this.inputValue === false){
      this.el.nativeElement.parentNode.parentNode.parentNode.firstChild.value = this.value;
      this.el.nativeElement.parentNode.parentNode.parentNode.firstChild.setAttribute('type', 'password');
    }
  }

  constructor(private el:ElementRef) { 
    this.maskPassword();
  }

  public maskPassword() {
  }

}

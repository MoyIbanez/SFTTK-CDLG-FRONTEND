import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public passwordInput = document.getElementById('pfield');
  public passwordShown = true;

  private showPassword(){

    this.passwordShown = !this.passwordShown;

  }

  private savePasswodValue(pswrdField:string) {
    this.password = pswrdField;
    
  }

  public password = "";
}

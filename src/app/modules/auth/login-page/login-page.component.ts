import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({}); //inicializacion de un form group
  errorSession: boolean = false;
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(5)])
    })
  }

  sendLogin() {
    
    const [email, password] = this.formLogin.value;
    this._authService.sendCredential(email,password);
    //console.log(body);
    // this._authService.sendCredential();

  }

}

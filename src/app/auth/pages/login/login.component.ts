import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = 'Todos los campos deben estar llenos';
  hasError: boolean = false;

  constructor(private router: Router) { }

  onLoginClick(): void {
    const isValidForm: boolean = this.username != '' && this.password != '';
    this.hasError = !isValidForm;
    if(isValidForm) this.router.navigateByUrl('/dashboard/home'); //TODO: Llamar a la api para obtener la informacion de usuario y el token
  }

}

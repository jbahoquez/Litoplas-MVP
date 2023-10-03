import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/storage/local-storage.service';
import { encrypt } from 'src/app/utils/encrypt';
import Swal from 'sweetalert2';


interface Login {
  n_ide: string;
  password: string;
}
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

  constructor(private router: Router,
              private loginService: LoginService,
              private localStorageService: LocalStorageService
    ) { }

  onLoginClick(): void {
    const isValidForm: boolean = this.username != '' && this.password != '';

    if (isValidForm) {
      const login: Login = { n_ide: this.username, password: this.password }
      // this.hasError = !isValidForm;
      // if(isValidForm) this.router.navigateByUrl('/dashboard/home'); //TODO: Llamar a la api para obtener la informacion de usuario y el token
      this.loginService.iniciarSesion(login).subscribe((resp: any) => {
        const token = resp['access_token'];
        const user = resp['user']
        this.localStorageService.setItem('token', token);
        const userEncrypted=encrypt(JSON.stringify(user))
        this.localStorageService.setItem('user', userEncrypted);
        this.router.navigateByUrl('/')
      }, err => {
        Swal.fire({
          title: 'Credenciales invalidas',
          text: "Usuario o contraseña incorrectos",
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        })
      })
    }else{
      Swal.fire({
        title: 'Información incompleta',
        text: "Para iniciar sesion debes llenar todos los campos",
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      })
    }


  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faHouse, faClose, faHamburger, faCar, IconDefinition, faMessage, faBars, faHomeAlt, faStar, faFlag, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

interface icons {
  item: IconDefinition
}

const icons: any = {
  faCoffee: faCoffee,
  faHouse: faHouse,
  faBars: faBars,
  faHomeAlt: faHomeAlt,
  faStar: faStar,
  faFlag: faFlag,
  faBell: faBell,
  faMessage: faMessage,
  faGear: faGear
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller = false;

  constructor(private router: Router) { }

  getIcon(menuIcon: string): IconDefinition {
    return icons[menuIcon];
  }

  cerrarSesion() {
    // Swal.fire({
    //   title: "Serás redirigido en 5 segundos",
    //   text: "Haz click en el botón para ir al login ahora.",
    //   icon: "info",
    //   timer: 5000, // Temporizador en milisegundos (5 segundos)
    //   showCancelButton: true,
    //   cancelButtonText: "Cancelar", // Opcional, si quieres un botón de cancelar
    //   confirmButtonText: "Ir al login", // Texto del botón de confirmación
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // Redirecciona al usuario al login cuando se haga clic en "Ir al login"

    //     localStorage.removeItem('token')
    //     localStorage.removeItem('user')
    //     this.router.navigate(['/login']); // Reemplaza con la ruta correcta al login
    //   }
    // });

    let timerInterval
    Swal.fire({
      title: 'Cerrando sesión!',
      html: 'Seras redirigido en <b></b> segundos.',
      icon: "info",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          const secondsLeft = Math.ceil(Swal.getTimerLeft() / 1000);
          b.textContent = secondsLeft.toString()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.router.navigate(['/login']);
      }
    })

  }

  home(){
    this.router.navigate(['/']);
  }

}

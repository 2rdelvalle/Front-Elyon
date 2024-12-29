import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.email && this.password) {
      // Aquí añadirías la lógica de autenticación
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // Redireccionar a la página principal después del login exitoso
      this.router.navigate(['/']);
    }
  }
}
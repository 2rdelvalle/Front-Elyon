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
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.email && this.password) {
      // Lógica de autenticación
      this.authenticate(this.email, this.password).then(success => {
        if (success) {
          // Redireccionar a la página principal después del login exitoso
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Email o contraseña incorrectos.';
        }
      }).catch(error => {
        this.errorMessage = 'Ocurrió un error. Por favor, intenta nuevamente.';
      });
    } else {
      this.errorMessage = 'Por favor, ingresa tu email y contraseña.';
    }
  }

  private authenticate(email: string, password: string): Promise<boolean> {
    // Aquí añadirías la lógica de autenticación real (petición al servidor, etc.)
    return new Promise((resolve, reject) => {
      // Simulación de autenticación
      if (email === 'test@example.com' && password === 'password') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
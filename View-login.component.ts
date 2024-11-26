// src/view/login.component.ts
import { Component } from '@nestjs/common';
import { LoginModel } from '../model/login.model';

@Component({
  selector: 'login',
  template: `
    <div>
      <h2>Login</h2>
      <input [(ngModel)]="username" placeholder="Username" />
      <input [(ngModel)]="password" type="password" placeholder="Password" />
      <button (click)="onLogin()">Login</button>
    </div>
  `,
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginModel: LoginModel) {}

  async onLogin() {
    try {
      const data = await this.loginModel.login(this.username, this.password);
      console.log('Login successful', data);
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}


// src/controller/login.controller.ts
import { Controller, Post, Body } from '@nestjs/common';

@Controller('api')
export class LoginController {
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    // Validação simples de login (isso deve ser substituído por autenticação real)
    if (username === 'admin' && password === 'admin123') {
      return { message: 'Login successful' };
    } else {
      throw new Error('Invalid username or password');
    }
  }
}


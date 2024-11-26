// src/model/login.model.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LoginModel {
  async login(username: string, password: string): Promise<any> {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });
      return response.data; // Resposta do backend
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }
}


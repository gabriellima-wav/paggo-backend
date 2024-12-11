import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Método para criar usuário
  async createUser(email: string, password: string) {
    // Exemplo de uso do bcrypt para hashing da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simulação de salvamento no banco (substitua pelo seu repositório ou serviço)
    const user = {
      id: 1,
      email,
      password: hashedPassword,
    };

    return { message: 'User created successfully', user };
  }

  // Método para login de usuário
  async loginUser(email: string, password: string) {
    // Simulação de busca do usuário no banco (substitua pelo seu repositório ou serviço)
    const user = {
      id: 1,
      email: 'test@example.com',
      password: await bcrypt.hash('12345', 10), // Exemplo de senha hashada
    };

    // Verifica se o email corresponde
    if (user.email !== email) {
      throw new Error('Invalid email or password');
    }

    // Verifica a senha usando bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Gera o token JWT
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { message: 'Login successful', token };
  }
}

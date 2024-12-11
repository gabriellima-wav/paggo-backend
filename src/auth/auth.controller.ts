import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Rota para criar usuário
  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.authService.createUser(body.email, body.password);
  }

  // Rota para login
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.loginUser(body.email, body.password);
  }
}

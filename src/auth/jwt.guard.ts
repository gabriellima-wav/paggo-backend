import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new Error('Authorization header not found');
    }

    const token = authHeader.split(' ')[1]; // Obtém o token do formato "Bearer <token>"

    try {
      const decoded = this.jwtService.verify(token, { secret: 'secretKey' });
      request.user = decoded;
      return true;
    } catch (error) {
      console.error('Token validation error:', error.message); // Loga o erro
      throw new Error('Invalid token'); // Repassa a exceção
    }
  }
}

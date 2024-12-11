import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai o token do cabeçalho Authorization
      secretOrKey: 'secretKey', // Chave secreta para verificar o token (use variáveis de ambiente em produção)
    });
  }

  async validate(payload: any) {
    // Retorna o payload decodificado para ser usado no contexto da requisição
    return { userId: payload.sub };
  }
}

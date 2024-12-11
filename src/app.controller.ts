// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Rota principal (a já existente)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status') // Nova rota para testar a conexão
  getStatus(): { message: string } {
    return { message: 'Back-end is connected' };
  }
}

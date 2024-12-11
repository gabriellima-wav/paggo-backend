import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesModule } from './invoices/invoices.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, InvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

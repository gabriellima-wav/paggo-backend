import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoiceService } from './invoices.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvoicesController],
  providers: [InvoiceService],
})
export class InvoicesModule {}

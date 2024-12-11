import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.invoice.findMany();
  }

  async create(data: any) {
    return this.prisma.invoice.create({ data });
  }
}

import { Controller } from '@nestjs/common';
import { InvoiceService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoiceService: InvoiceService) {}
}

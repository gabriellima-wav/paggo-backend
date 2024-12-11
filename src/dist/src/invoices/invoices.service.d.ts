import { PrismaService } from '../prisma/prisma.service';
export declare class InvoiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        filePath: string;
        createdAt: Date;
        id: number;
    }[]>;
    create(data: any): Promise<{
        name: string;
        filePath: string;
        createdAt: Date;
        id: number;
    }>;
}

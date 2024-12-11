import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const invoice = await prisma.invoice.create({
    data: {
      name: 'Invoice 1',
      filePath: '/path/to/invoice/image',
    },
  });
  console.log('Invoice created:', invoice);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

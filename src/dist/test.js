"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=test.js.map
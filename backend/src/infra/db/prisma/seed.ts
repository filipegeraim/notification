import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Yasmin Rebeca Rezende',
    email: 'yasmin_rebeca_rezende@original-veiculos.com.br',
    phone: '63999580968',
    UserChannel: {
      create: [{ channel: 'sms' }, { channel: 'email' }],
    },
    UserCategory: {
      create: [{ category: 'sports' }, { category: 'finance' }],
    },
  },
  {
    name: 'Manoel Enrico Barbosa',
    email: 'manoel_barbosa@fedato.com.br',
    phone: '67991997437',
    UserChannel: {
      create: [{ channel: 'sms' }],
    },
    UserCategory: {
      create: [{ category: 'movies' }],
    },
  },
  {
    name: 'Carla Melissa Marli Mendes',
    email: 'carla_mendes@focusnetworks.com.br',
    phone: '81994409707',
    UserChannel: {
      create: [{ channel: 'push' }, { channel: 'email' }],
    },
    UserCategory: {
      create: [{ category: 'finance' }],
    },
  },
  {
    name: 'Pedro Henrique Calebe Cardoso',
    email: 'pedrohenriquecardoso@sp.senac.com.br',
    phone: '96997110776',
    UserChannel: {
      create: [{ channel: 'sms' }, { channel: 'email' }, { channel: 'push' }],
    },
    UserCategory: {
      create: [{ category: 'movies' }, { category: 'finance' }],
    },
  },
  {
    name: 'Márcio Marcos Jesus',
    email: 'marciomarcosjesus@cvc.com.br',
    phone: '68997472983',
    UserChannel: {
      create: [{ channel: 'sms' }, { channel: 'push' }],
    },
    UserCategory: {
      create: [{ category: 'sports' }],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

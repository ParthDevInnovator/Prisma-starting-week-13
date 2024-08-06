import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email:"makwanaparth@gmail.com",
        name:"parth"
    }
  })
}

main()
  
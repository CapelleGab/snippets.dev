import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  user: {
    additionalFields: {
      githubLink: { type: 'string', required: false },
      firstName: { type: 'string', required: true },
      lastName: { type: 'string', required: true },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
})

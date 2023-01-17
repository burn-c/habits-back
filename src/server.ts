// Back-end API RESTFul
/**
 * Método HTTP: Get, Post, Put, Patch e Delete
 */

import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/all', async () => {
  const habits = await prisma.habit.findMany()

	return habits
})

app.listen({
	port: 3333
}).then(() => {
	console.log(`🚀 Server OnLine on port 3333 🚀`) 
})

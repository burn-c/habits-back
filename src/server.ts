// Back-end API RESTFul
/**
 * Método HTTP: Get, Post, Put, Patch e Delete
 */
import Fastify from 'fastify'
import cors from '@fastify/cors'

import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)

app.register(appRoutes)

app.listen({
	port: 3333
}).then(() => {
	console.log(`🚀 Server OnLine on port 3333 🚀`) 
})

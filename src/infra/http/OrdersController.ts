import {FastifyReply, FastifyRequest} from "fastify"
import { createOrder } from "@comsposition/container"

export const OrderController = {
    async create(request: FastifyRequest, reply: FastifyReply) {
        const {orderId, customerId} = request.body as any
        const out = await createOrder.execute({orderId, customerId})
        reply.status(201).send(out)
    }
}
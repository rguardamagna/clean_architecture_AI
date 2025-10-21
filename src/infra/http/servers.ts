import Fastify from "fastify"
import {OrderController} from "@infra/http/OrdersController"

export async function buildServer() {
    const app = Fastify() 
    app.post("/orders", OrderController.create)
    app.delete("orders/:id", OrderController.delete)

    return app
}
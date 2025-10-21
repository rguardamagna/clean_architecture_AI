import {InMemoryOrderRepository} from "@infra/persistences/InMemoryOrderRepository"
import {CreateOrder} from "@application/use-cases/CreateOrderUseCase"

const repo = new InMemoryOrderRepository()
export const createOrder = new CreateOrder(repo)
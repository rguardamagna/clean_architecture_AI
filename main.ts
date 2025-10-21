import {buildServer} from "@infra/http/servers"

const port = Number(process.env.PORT ?? 3000)
buildServer().then(app => app.listen({port}))
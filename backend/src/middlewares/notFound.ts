import { Middleware, Status } from 'deps'

const notFoundMiddleware: Middleware = async (context) => {
  await context.throw(Status.NotFound, 'API not found')
}

export default notFoundMiddleware;
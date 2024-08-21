import { Router } from 'express'
import { userController } from './controllers/UserController'

export const routes = Router()

routes.post("/user", userController.create)
routes.get("/user", userController.get)
routes.get("/user/:id", userController.findById)
routes.get("/user/name/:name", userController.findByName)
routes.get("/user/email/:email", userController.findByEmail)
routes.put("/user/:id", userController.update)
routes.delete("/user/:id", userController.delete)
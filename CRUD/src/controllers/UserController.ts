import { Request, Response } from "express"
import { UserService } from "../services/UserService"
import { UserRequestDTO } from "../models/user"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

const userService = new UserService()

export const userController = {

    async create(req: Request, res: Response) {
        const reqUser: UserRequestDTO = req.body

        try {
            const userDTO = await userService.create(reqUser);
            return res.json(userDTO)
        } catch (e: any) {
            if (e instanceof PrismaClientKnownRequestError) {
                return res.status(400).json({
                   message: "Email já cadastrado." 
                })
            } else {
                return res.json(e.message)
            }
        }
    },

    async get(req: Request, res: Response) {
        const usersDTO = await userService.getAll();
        console.log(usersDTO)
        return res.json(usersDTO)
    },

    async findById(req: Request, res: Response) {
        const id = req.params.id

        try {
            const userDTO = await userService.findById(Number(id));
            return res.json(userDTO)
        } catch (e) {
            console.log(e)
            return res.json(e)
        }

    },

    async findByName(req: Request, res: Response) {
        const name:string = req.params.name

        try {
            const usersDTO = await userService.findByName(name);

            return res.json(usersDTO)
        } catch (e) {
            console.log(e)
            return res.json(e)
        }
    },

    async findByEmail(req: Request, res: Response) {
        const email = req.params.email

        console.log(email)

        try {
            const userDTO = await userService.findByEmail(email);
            return res.json(userDTO)
        } catch (e) {
            console.log(e)
            return res.json(e)
        }
    },

    async update(req: Request, res: Response) {
        const id = req.params.id;
        const reqUser: UserRequestDTO = req.body

        try {
            const userDTO = await userService.update(reqUser, Number(id));
            return res.json(userDTO)
        } catch (e: any) {
            if (e instanceof PrismaClientKnownRequestError) {
                return res.status(400).json({
                   message: `Usuário com id: ${id} não encontrado.` 
                })
            } else {
                return res.json(e.message)
            }
        }
    },

    async delete(req: Request, res: Response) {
        const id = req.params.id

        try {
            const userDTO = await userService.delete(Number(id))
            return res.json(userDTO)
        } catch (e: any) {
            if (e instanceof PrismaClientKnownRequestError) {
                return res.status(400).json({
                   message: `Usuário com id: ${id} não encontrado.` 
                })
            } else {
                return res.json(e.message)
            }
        }
    }
    
}
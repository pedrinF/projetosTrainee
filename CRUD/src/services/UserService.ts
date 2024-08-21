import { User } from "@prisma/client";
import { prisma } from "../config/prisma"
import { UserRequestDTO, UserResponseDTO } from "../models/user";

export class UserService {

    async create(user: UserRequestDTO) {
        const createdUser: User = await prisma.user.create({
            data: user
        })

        const userDTO = new UserResponseDTO(createdUser);

        return userDTO;
    }

    async getAll() {
        const users: User[] = await prisma.user.findMany({});
        let usersDTO: UserResponseDTO[] = [];

        for (let user of users) {
            usersDTO.push(new UserResponseDTO(user));
        }

        return usersDTO;
    }

    async findById(id: number) {
        const user: User | null = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (user == null) {
            throw new Error(`Usuário com id: ${id} não encontrado.`)
        } 

        const userDTO = new UserResponseDTO(user);
        return userDTO;
    
    }

    async findByEmail(email: string) {
        const user: User | null = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user == null) {
            throw new Error(`Usuário com email: ${email}  não encontrado.`)
        } 

        const userDTO = new UserResponseDTO(user);
        return userDTO;
    }

    async findByName(name: string) {
        const users: User[] = await prisma.user.findMany({
            where: {
                name: name
            }
        })

        let usersDTO: UserResponseDTO[] = [];

        for (let user of users) {
            usersDTO.push(new UserResponseDTO(user));
        }

        return usersDTO;
    }


    async update(user: UserRequestDTO, id: number) {
        const updatedUser: User = await prisma.user.update({
            where: {
                id: id
            },
            data: user
        });

        return updatedUser;
    }

    async delete(id: number) {
        const deletedUser: User = await prisma.user.delete({
            where: {
                id: id
            }
        })


        return deletedUser;
    }
}
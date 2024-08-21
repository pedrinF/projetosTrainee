import { User } from "@prisma/client"

export type UserRequestDTO = {
    name: string,
    email: string,
    age: number,
    state: string,
    city: string
}

export class UserResponseDTO {
    id: number
    name: string
    email: string
    age: number
    state: string
    city: string

    constructor(user: User) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.age = user.age
        this.state = user.state
        this.city = user.city
    }
}
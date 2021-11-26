import { Role, User } from "../schema/user.schema";

export interface RegisterDto{
    name:string
    email:string
    password:string
    image?:string
    friends?:User[]
    followers?:User[]
    following?:User[]
    role:Role,
    oAuthUser?:boolean
}

export interface CreatedUserDto{
    _id?:string
    name:string
    email:string
    image?:string
    friends?:User[]
    followers?:User[]
    following?:User[]
    role:Role,
}

export interface UserDataDto{
    id:string
    name?:string
    email:string
    password:string,
    accessToken?:string,
    firstName?:string,
    googleId?:string,
    oAuthUser?:boolean,
    picture?:string
}
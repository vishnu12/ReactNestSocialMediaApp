import { Role, User } from "../schema/user.schema";

export interface RegisterDto{
    name:string
    email:string
    password:string
    friends?:User[]
    followers?:User[]
    following?:User[]
    role:Role
    oAuthUser?:boolean
    phone?:string
    location?:string
    profilepic?:string
    coverpic?:string
}

export interface CreatedUserDto{
    _id?:string
    name:string
    email:string
    profilepic?:string
    coverpic?:string
    friends?:User[]
    followers?:User[]
    following?:User[]
    role:Role,
    phone?:string,
    location?:string,
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
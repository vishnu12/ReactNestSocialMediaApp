

export interface UserLoginState{
    name?:string,
    email?:string,
    id:string
}

export interface UserData{
    name?:string
    email?:string
    _id?:string
    coverpic?:string
    profilepic?:string
    role?:string
    followers?:string[]
    following?:string[]
    friends?:string[]
    location?:string
    phone?:string
}


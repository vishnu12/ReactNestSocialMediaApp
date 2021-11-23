import { Request } from "express";
import { CreatedUserDto, UserDataDto } from "src/user/dto/user.dto";


export interface IRequest extends Request{
    user:UserDataDto
}

export interface ResData{
    token:{access_token:string}| string
       id:string
}
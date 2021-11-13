import { Request } from "express";
import { UserDataDto } from "src/user/dto/user.dto";


export interface IRequest extends Request{
    user:UserDataDto
}
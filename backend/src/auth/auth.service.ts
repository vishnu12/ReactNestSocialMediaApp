import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreatedUserDto, RegisterDto, UserDataDto } from 'src/user/dto/user.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';
import { IRequest } from './types/types';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly userService:UserService,
        private readonly jwtService:JwtService
        ){}

    async register(body:RegisterDto):Promise<CreatedUserDto>{
        try {
          const {email}=body
          const userExists=await this.userModel.findOne({email})
            if(userExists && !userExists.oAuthUser){
               throw new HttpException('User already exists',400)
            }else if(userExists && userExists.oAuthUser){
                return
            }else{
              const newUser=new this.userModel(body)
              const createdUser= await newUser.save()
              createdUser.password=undefined
              return createdUser
          }
            
        } catch (error) {
            throw new HttpException(`${error}`,400)
        }
   }

   async validateUser(email:string,password:string){
      try {
        const userExists=await this.userService.findOne(email)
        if(userExists && userExists.comparePassword(password)){
          userExists.password=undefined
          return userExists
        }
        return null
      } catch (error) {
          throw new HttpException(`${error}`,400)
      }
   }

   async login(user:UserDataDto){
      const payload={email:user.email}
      return {
          access_token:this.jwtService.sign(payload)
      }
   }

   googleLogin(req:IRequest) {
    if (!req.user) {
      return 'No user from google'
    }
    const payload={email:req.user.email}
    return {access_token:this.jwtService.sign(payload)}
  }

}

import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument,User } from './schema/user.schema';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async findOne(email:string){
      try {
          const user=await this.userModel.findOne({email})
          if(user) return user
      } catch (error) {
          throw new HttpException(`${error}`,400)
      }
    }

    async findById(id:string){
      try {
          const user=await this.userModel.findById(id)
          if(user) return user
      } catch (error) {
          throw new HttpException(`${error}`,400)
      }
    }

   async findAndUpdate(id:string,data:RegisterDto):Promise<RegisterDto>{
       try {
           const user=await this.userModel.findById(id)
           if(user){
            user.name=data.name||user.name
            user.email=data.email||user.email
            user.password=data.password||user.password
            user.phone=data.phone||user.phone
            user.location=data.location||user.location
            user.profilepic=data.profilepic||user.profilepic
            user.coverpic=data.coverpic||user.coverpic
            const upadtedUser=await user.save()
            return upadtedUser
           }
       } catch (error) {
           
       }
   } 
}

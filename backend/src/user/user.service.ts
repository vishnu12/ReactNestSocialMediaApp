import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument,User } from './schema/user.schema';
import { CreatedUserDto, RegisterDto } from './dto/user.dto';

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
}

import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './schema/user.schema';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findOne(email: string) {
        try {
            const user = await this.userModel.findOne({ email })
            if (user) return user
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async findById(id: string) {
        try {
            const user = await this.userModel.findById(id)                                        
            if (user) return user
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async findAndUpdate(id: string, data: any): Promise<RegisterDto> {
        try {
            const user = await this.userModel.findById(id)
            if (user) {
                if (user && data.friends) {
                    const targetUser=await this.userModel.findById(data.friends)
                    const alreadyAdded = user.friends.some(itm => itm.toString() === data.friends)
                    if (alreadyAdded){
                        user.friends=user.friends.filter(itm => itm.toString() !== data.friends)
                        targetUser.friends=targetUser.friends.filter(itm => itm.toString() !== id)
                        await targetUser.save()
                    }else{
                        user.friends = [...user.friends, data.friends]
                        targetUser.friends = [...targetUser.friends, id as any]
                        await targetUser.save()
                    }
                    const upadtedUser = await user.save()
                    return upadtedUser
                } else if (user && data.following) {
                    const targetUser=await this.userModel.findById(data.following)
                    const alreadyAdded = user.following.some(itm => itm.toString() === data.following)
                    if (alreadyAdded){
                        user.following=user.following.filter(itm => itm.toString() !== data.following)
                        targetUser.followers=targetUser.followers.filter(itm => itm.toString() !== id)
                        await targetUser.save()
                    }else{
                        user.following = [...user.following, data.following]
                        targetUser.followers = [...targetUser.followers, id as any]
                        await targetUser.save()
                    }
                    const upadtedUser = await user.save()
                    return upadtedUser
                }
                else {
                    user.name = data.name || user.name
                    user.email = data.email || user.email
                    user.password = data.password || user.password
                    user.phone = data.phone || user.phone
                    user.location = data.location || user.location
                    user.profilepic = data.profilepic || user.profilepic
                    user.coverpic = data.coverpic || user.coverpic
                    const upadtedUser = await user.save()
                    return upadtedUser
                }
            }
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }
}

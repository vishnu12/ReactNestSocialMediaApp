import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/post.dto';
import { Post, PostDocument } from './schema/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

    async createPost(input:CreatePostDto):Promise<CreatePostDto>{
        try {
            const newPost=new this.postModel(input)
            const createdPost=await newPost.save()
            return createdPost
        } catch (error) {
            throw new HttpException(`${error}`,400)
        }
    }

    async getPost(id:string):Promise<CreatePostDto>{
        try {
            return await this.postModel.findById(id)
        } catch (error) {
            throw new HttpException(`${error}`,400)
        }
    }

    async deletePost(id:string){
       try {
           const post=await this.postModel.findById(id)
           await post.remove()
       } catch (error) {
         throw new HttpException(`${error}`,400)
       }
    }
}

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/post.dto';
import { Post, PostDocument } from './schema/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async createPost(input: CreatePostDto): Promise<CreatePostDto> {
        try {
            const newPost = new this.postModel(input)
            const createdPost = await newPost.save()
            return createdPost
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async getAllPosts(): Promise<CreatePostDto[]> {
        try {
            return await this.postModel.find().populate('postedBy', '_id name').sort({ createdAt: -1 })
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async getPost(id: string): Promise<CreatePostDto> {
        try {
            return await this.postModel.findById(id).populate('postedBy', '_id name').sort({ createdAt: -1 })
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async deletePost(id: string) {
        try {
            const post = await this.postModel.findById(id)
            await post.remove()
        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }

    async updatePost(id: string, data: any): Promise<CreatePostDto> {
        try {
            const post = await this.postModel.findById(id)
            if (post) {
                if (data.likes) {
                    const alreadyLiked = post.likes.some(itm => itm.toString() === data.likes)
                    const alreadyDisLiked = post.dislikes.some(itm => itm.toString() === data.likes)
                    if (alreadyLiked) {
                        post.likes = post.likes.filter(itm => itm.toString() !== data.likes)
                    }else if(alreadyDisLiked){
                        post.dislikes = post.dislikes.filter(itm => itm.toString() !== data.likes)
                        post.likes = [...post.likes, data.likes]
                    }
                    else {
                        post.likes = [...post.likes, data.likes]
                    }
                    const updatedPost = await post.save()
                    return updatedPost

                } else if (data.dislikes) {
                    const alreadyLiked = post.likes.some(itm => itm.toString() === data.dislikes)
                    const alreadyDisLiked = post.dislikes.some(itm => itm.toString() === data.dislikes)
                    if (alreadyLiked) {
                        post.likes = post.likes.filter(itm => itm.toString() !== data.dislikes)
                        post.dislikes = [...post.dislikes, data.dislikes]
                    } else if (alreadyDisLiked) {
                        post.dislikes = post.dislikes.filter(itm => itm.toString() !== data.dislikes)
                    }else{
                        post.dislikes = [...post.dislikes, data.dislikes]
                    }
                    const updatedPost = await post.save()
                    return updatedPost
                }

            } else {
                throw new HttpException(`post not found`, 400)
            }

        } catch (error) {
            throw new HttpException(`${error}`, 400)
        }
    }
}

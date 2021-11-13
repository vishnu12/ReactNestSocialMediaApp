import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';


export type PostDocument =Post & mongoose.Document


@Schema()
export class Post{
    @Prop({required:true})
    title:string

    @Prop()
    description:string

    @Prop({type:mongoose.Types.ObjectId,ref:'User'})
    postedBy:User

    @Prop({type:[{comment:{type:String},commentedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}}]})
    comments:{comment:string,commentedBy:User}[]

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    likes:User[]

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    dislikes:User[]

    @Prop()
    image:string


}

export const PostSchema = SchemaFactory.createForClass(Post);
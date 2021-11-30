import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';


export type UserDocument =User & mongoose.Document

export enum Role{
    USER='USER',
    ADMIN='ADMIN'
}

@Schema()
export class User{
    @Prop({required:true})
    name:string

    @Prop({required:true})
    email:string

    @Prop({required:true})
    password:string

    @Prop({default:''})
    profilepic:string

    @Prop({default:''})
    coverpic:string

    @Prop({default:Role.USER})
    role:Role
    
    @Prop({default:false})
    oAuthUser:boolean

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    friends:User[]

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    followers:User[]

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    following:User[]

    @Prop()
    phone:string

    @Prop()
    location:string

    comparePassword:Function

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save',async function(next:any){
    let user=this as UserDocument
    if(!user.isModified('password')){
        next()
    }
    
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)
})

UserSchema.methods.comparePassword = async function (
    candidatePassword: string,
  ) {
    const user = this as UserDocument;
    return await bcrypt.compare(candidatePassword, user.password);
    
  };
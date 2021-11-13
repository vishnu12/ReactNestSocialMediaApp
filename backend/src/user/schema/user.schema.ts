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

    @Prop({default:'https://www.google.com/search?q=user+icon+image&rlz=1C1CHBF_enIN801IN801&sxsrf=AOaemvKt80xuGDs5tNxunfKuCytBILJhzA:1632393760074&tbm=isch&source=iu&ictx=1&fir=DS4EgFyc5oiyuM%252C1m1tN_-LMeN0MM%252C_&vet=1&usg=AI4_-kTWzZFDlHzg6J4hOrkMQdsvqwnI4w&sa=X&ved=2ahUKEwix8c7R9JTzAhXG7XMBHeybBcwQ9QF6BAgSEAE#imgrc=DS4EgFyc5oiyuM'})
    image:string

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
  
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
  };
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from 'src/auth/auth.module';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/socialmediaapplication'),
  UserModule,
  PostModule,
  AuthModule
],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from 'src/auth/auth.module';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/socialmediaapplication'),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'frontend'),
  }),
  UserModule,
  PostModule,
  AuthModule
],
  
})
export class AppModule {}

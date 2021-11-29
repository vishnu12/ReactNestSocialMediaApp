import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


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
controllers: [AppController],
providers: [AppService],
  
})
export class AppModule {}

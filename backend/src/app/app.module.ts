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
  MongooseModule.forRoot(`${process.env.ATLAS_URI}`,{useNewUrlParser:true}),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..','..', 'build'),

  }),
  UserModule,
  PostModule,
  AuthModule
],
controllers: [AppController],
providers: [AppService],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { UserModule } from 'src/user/user.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MulterModule.register({}),
    UserModule
  ],
  controllers: [PostController],
  providers:[PostService]
})
export class PostModule {}

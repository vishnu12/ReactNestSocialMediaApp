import { Body, Controller, Delete, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { IRequest } from 'src/auth/types/types';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { fileFilter, filename } from 'src/utils/fileUpload';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService:PostService){}

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    createPost(
        @Body() body:CreatePostDto
    ){
      return this.postService.createPost(body)
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getAllPosts(){
      return this.postService.getAllPosts()
    }

    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
    getPosts(
      @Param('id') id:string
    ){
      return this.postService.getPost(id)
    }

    @Put('/:id')
    @UseGuards(AuthGuard('jwt'))
    updatePost(
      @Param('id') id:string,
      @Body() data:UpdatePostDto
    ){
       return this.postService.updatePost(id,data)
    }
    

    @Post('/upload')
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(FileInterceptor('post',{
      storage:diskStorage({
        destination:'./uploads/posts',
        filename:filename
      }),
      fileFilter:fileFilter
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File,@Req() req:IRequest) {
     return {
       file,
       email:req.user.email
     }
}  
}

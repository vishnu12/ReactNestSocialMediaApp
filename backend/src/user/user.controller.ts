import { Body, Controller, Get, Param, Post, Put, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { IRequest } from 'src/auth/types/types';
import { fileFilter, filename } from 'src/utils/fileUpload';
import { CreatedUserDto, RegisterDto,UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get('/:id')
    findById(@Param('id') id:string):Promise<CreatedUserDto>{
        return this.userService.findById(id);
    }

    @Put('/:id')
    update(@Param('id') id:string, @Body() data:UpdateUserDto):Promise<RegisterDto>{
       return this.userService.findAndUpdate(id, data);
    }

    @Post('/upload/cover')
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(FileInterceptor('cover',{
      storage:diskStorage({
        destination:'./uploads/cover',
        filename:filename
      }),
      fileFilter:fileFilter
    }))
    uploadCover(@UploadedFile() file: Express.Multer.File,@Req() req:IRequest) {
     return {
       file,
       email:req.user.email
     }
}  

@Post('/upload/profile')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(FileInterceptor('profile',{
  storage:diskStorage({
    destination:'./uploads/profile',
    filename:filename
  }),
  fileFilter:fileFilter
}))
uploadProfile(@UploadedFile() file: Express.Multer.File,@Req() req:IRequest) {
 return {
   file,
   email:req.user.email
 }
}  

}

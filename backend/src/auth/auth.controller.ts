import { Body, Controller, Get, Post,Req,Res,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { CreatedUserDto, RegisterDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { IRequest, ResData } from './types/types';

@Controller()
export class AuthController {

    constructor(
      private readonly authService:AuthService,
      private readonly userService:UserService,
      ){}

    @Post('auth/register')
    async register(
        @Body() body:RegisterDto
    ):Promise<CreatedUserDto>{
      return this.authService.register(body)
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Req() req:IRequest,@Res({ passthrough: true }) res:Response){
        const token=await this.authService.login(req.user)
        const authData:ResData={
            token,
            id:req.user.id
        }
        res.cookie('token',authData)
          
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('auth/profile')
    getProfile(@Req() req:IRequest){
        return req.user
    }

    @Get('auth/logout')
    logout(@Res({ passthrough: true }) res:Response){
      res.clearCookie('token')
    }


    @UseGuards(AuthGuard('google'))
    @Get('/google')
    async googleAuth(@Req() req:IRequest) {}
  

    @UseGuards(AuthGuard('google'))
    @Get('/google/redirect')
    async googleAuthRedirect(@Req() req:IRequest,@Res({ passthrough: true }) res:Response) {
      const token=await this.authService.googleLogin(req)
      const body={
        name:req.user.firstName,
        email:req.user.email,
        password:req.user.googleId,
        oAuthUser:true,
        profilepic:req.user.picture
      } as RegisterDto
      const userExixts=await this.userService.findOne(req.user.email)
      if(userExixts){
       const authData:ResData={
        token,
        id:userExixts._id
       }
       return res.cookie('token',authData).redirect(302,'/')
      }
      const user=await this.authService.register(body)
      const authData:ResData={
        token,
        id:user?._id
      }
      res.cookie('token',authData).redirect(302,'/')
      // res.redirect(302,'http://localhost:3000')

    }
  
  
}

import { Body, Controller, Get, Post,Req,Res,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { CreatedUserDto, RegisterDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { IRequest } from './types/types';

@Controller()
export class AuthController {

    constructor(private readonly authService:AuthService){}

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
        res.cookie('token',token)
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
        image:req.user.picture
      } as RegisterDto
      await this.authService.register(body)
      res.cookie('token',token)
    }
}

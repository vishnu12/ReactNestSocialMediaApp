import { Body, Controller, Post } from '@nestjs/common';
import { CreatedUserDto, RegisterDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

}

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { IRequest } from 'src/auth/types/types';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly userService:UserService
    ) {}

    async canActivate(context: ExecutionContext):Promise<boolean> {
    const req:IRequest = context.switchToHttp().getRequest();
    const user=await this.userService.findOne(req.user.email)
    if(user.role==='ADMIN') return true
    return false
  }
}
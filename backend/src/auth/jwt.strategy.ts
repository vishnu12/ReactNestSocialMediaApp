
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IRequest } from './types/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req:IRequest)=>{
          let data=req?.cookies['token']
          if(!data){
            return null;
        }
        return data.token.access_token
        }
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  // async validate(payload: {email:string,id:string}) {
  //   return { email: payload.email, id: payload.id };
  // }

  async validate(payload:any){
    if(payload === null){
        throw new UnauthorizedException();
    }
    return payload;
}
}
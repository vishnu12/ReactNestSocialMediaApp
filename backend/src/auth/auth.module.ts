import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User,UserSchema } from 'src/user/schema/user.schema';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        PassportModule,
        UserModule,
        JwtModule.register({
            secret:process.env.SECRET,
            signOptions:{expiresIn:'1d'}
        })
    ],
    controllers:[AuthController],
    providers:[AuthService,LocalStrategy,JwtStrategy,GoogleStrategy]
})
export class AuthModule {}

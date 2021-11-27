require('dotenv').config();
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {join} from 'path'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {credentials: true, origin: 'http://localhost:3000'}
  );
  app.use('uploads',express.static(join(__dirname,'uploads')))
  app.use(cookieParser());
  await app.listen(5000);
}
bootstrap();

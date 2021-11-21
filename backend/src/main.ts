require('dotenv').config();
import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {credentials: true, origin: 'http://localhost:3000'}
  );
  app.use(cookieParser());
  await app.listen(5000);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.setGlobalPrefix(APIPrefix.Version);
  const port = parseInt(process.env.SERVER_PORT) || 3000;
  await app.listen(port);
}
bootstrap();

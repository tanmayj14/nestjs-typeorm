import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const fs = require('fs');
const path = require('path');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setVersion('v1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/apis/demo/swagger', app, document);

  await app.listen(4001);
  console.log(`Application is running on: ${await app.getUrl()}`);
  
}
bootstrap();

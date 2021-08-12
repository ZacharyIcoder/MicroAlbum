import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const config = new DocumentBuilder()
      .setTitle('MicroAlbum-后台管理API')
      .setDescription('The MicroAlbum API description-供后台管理界面调用的服务端API')
      .setVersion('1.0')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000/api-docs');
}
bootstrap();

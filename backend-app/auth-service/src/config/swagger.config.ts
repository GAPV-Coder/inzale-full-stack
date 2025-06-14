/* eslint-disable prettier/prettier */
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Auth Service API')
    .setDescription('API for user authentication and authorization')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
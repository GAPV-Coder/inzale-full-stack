/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';

export const databaseConfig = (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
});
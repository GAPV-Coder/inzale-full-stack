/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';

export const jwtConfig = (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET', 'secretKey'),
    signOptions: { expiresIn: 'JWT_EXPIRES' },
});
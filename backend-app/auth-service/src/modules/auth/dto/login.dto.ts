/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import * as yup from 'yup';

export class LoginDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});
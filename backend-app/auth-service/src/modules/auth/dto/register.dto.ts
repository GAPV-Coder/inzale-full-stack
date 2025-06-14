/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import * as yup from 'yup';
import { Role } from '../entities/user.entity';

export class RegisterDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty({ enum: Role })
    role: Role;
}

export const registerSchema = yup.object().shape({
    email: yup.string().email().required({ message: 'Email is required and must be a valid email address' }),
    password: yup.string().min(6).required({ message: 'Password is required and must be at least 6 characters long' }),
    role: yup.string().oneOf(Object.values(Role)).required({ message: 'Role is required and must be one of the predefined roles' }),
});
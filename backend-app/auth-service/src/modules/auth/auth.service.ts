/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto): Promise<{ message: string; token: string; email: string; role: string }> {
        const { email, password, role } = registerDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({ email, password: hashedPassword, role });
        await user.save();
        const payload = { sub: user._id, email: user.email, role: user.role };
        return {
            message: 'User registered successfully',
            token: this.jwtService.sign(payload),
            email: user.email,
            role: user.role,
        };
    }

    async login(loginDto: LoginDto): Promise<{ message: string; token: string; email: string }> {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: user._id, email: user.email, role: user.role };
        return { message: 'User logged in successfully', email: user.email, token: this.jwtService.sign(payload) };
    }
}
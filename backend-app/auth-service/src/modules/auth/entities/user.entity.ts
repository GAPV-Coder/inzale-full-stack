/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum Role {
    ADMIN = 'admin',
    MEMBER = 'member',
}

@Schema()
export class User extends Document {
    @ApiProperty()
    @Prop({ required: true, unique: true })
    email: string;

    @ApiProperty()
    @Prop({ required: true })
    password: string;

    @ApiProperty({ enum: Role })
    @Prop({ enum: Role, default: Role.MEMBER })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
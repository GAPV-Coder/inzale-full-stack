/* eslint-disable prettier/prettier */
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as yup from 'yup';

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private schema: yup.ObjectSchema<any>) { }

    async transform(value: any, metadata: ArgumentMetadata) {
        try {
            await this.schema.validate(value, { abortEarly: false });
            return value;
        } catch (error) {
            const errors = error.inner.reduce((acc: Record<string, string>, err: yup.ValidationError) => {
                acc[err.path ?? 'unknown'] = err.message;
                return acc;
            }, {});
            throw new BadRequestException({ message: 'Validation failed', errors });
        }
    }
}
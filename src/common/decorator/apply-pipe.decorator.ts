import {applyDecorators, PipeTransform, UsePipes} from '@nestjs/common';

export const ApplyPipe = (pipe: PipeTransform) => applyDecorators(UsePipes(pipe));

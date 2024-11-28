import {Transform, TransformFnParams} from "class-transformer";

export const ApplyTransform = (transformFn: (params: TransformFnParams) => any) => Transform(transformFn);

import {TransformFnParams} from "class-transformer";

export const toUpperCase = ({ value }: TransformFnParams) => value.toUpperCase();
export const toLowerCase = ({ value }: TransformFnParams) => value.toLowerCase();


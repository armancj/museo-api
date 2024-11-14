import { IsNotEmpty, IsString } from "class-validator";

/**
 * DTO for creating access and use conditions.
 * Defines the necessary fields required for creating an access and use condition entry.
 */
export class CreateAccessAndUseConditionDto {

    /**
     * Conditions related to access permissions.
     * Each string in the array should specify a distinct access condition.
     */
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    accessConditions: string[];

    /**
     * Conditions related to reproduction permissions.
     * Ensure each entry in the array specifies a clear reproduction condition.
     */
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    reproductionConditions: string[];

    /**
     * Technical requirements necessary for fulfilling access conditions.
     * A singular string that specifies the technical prerequisites.
     */
    @IsString()
    @IsNotEmpty()
    technicalRequirements: string;
}
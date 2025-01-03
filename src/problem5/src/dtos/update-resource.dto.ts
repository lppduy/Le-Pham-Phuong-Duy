import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class UpdateResourceDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name?: string;

    @IsOptional()
    @IsString()
    @MinLength(10)
    @MaxLength(500)
    description?: string;

    @IsOptional()
    @IsString()
    category?: string;
}
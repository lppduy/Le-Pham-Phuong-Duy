import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateResourceDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    name?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(500)
    description?: string;

    @IsString()
    @IsNotEmpty()
    category?: string;
}
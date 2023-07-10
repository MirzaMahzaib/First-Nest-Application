import { IsString, IsEmail } from "class-validator";

export class updateUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
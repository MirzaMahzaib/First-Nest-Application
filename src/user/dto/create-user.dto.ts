import { IsString, IsEmail } from "class-validator";

export class createUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
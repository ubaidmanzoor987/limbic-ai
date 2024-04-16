import { IsString, IsNotEmpty } from "class-validator";

// users.dto.ts
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

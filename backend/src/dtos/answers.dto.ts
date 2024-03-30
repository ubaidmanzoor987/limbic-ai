import { IsString, IsNotEmpty } from "class-validator";

// create-answer.dto.ts
export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  questionId: string;
}

// update-answer.dto.ts
export class UpdateAnswerDto extends CreateAnswerDto {}

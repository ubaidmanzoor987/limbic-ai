import { IsString, IsNotEmpty } from "class-validator";

// create-question.dto.ts
export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}

// update-question.dto.ts
export class UpdateQuestionDto extends CreateQuestionDto {}

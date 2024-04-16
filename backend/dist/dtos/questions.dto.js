"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionDto = exports.CreateQuestionDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
// create-question.dto.ts
class CreateQuestionDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateQuestionDto.prototype, "text", void 0);
exports.CreateQuestionDto = CreateQuestionDto;
// update-question.dto.ts
class UpdateQuestionDto extends CreateQuestionDto {
}
exports.UpdateQuestionDto = UpdateQuestionDto;
//# sourceMappingURL=questions.dto.js.map
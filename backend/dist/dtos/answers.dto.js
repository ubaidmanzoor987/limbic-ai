"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnswerDto = exports.CreateAnswerDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
// create-answer.dto.ts
class CreateAnswerDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateAnswerDto.prototype, "text", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateAnswerDto.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateAnswerDto.prototype, "questionId", void 0);
exports.CreateAnswerDto = CreateAnswerDto;
// update-answer.dto.ts
class UpdateAnswerDto extends CreateAnswerDto {
}
exports.UpdateAnswerDto = UpdateAnswerDto;
//# sourceMappingURL=answers.dto.js.map
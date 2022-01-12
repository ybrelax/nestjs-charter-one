"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePostDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '文章标题' }),
    (0, class_validator_1.IsNotEmpty)({ message: '文章标题不能为空' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '缺少作者信息' }),
    (0, swagger_1.ApiProperty)({ description: '作者' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '内容' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '文章封面' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "cover_url", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ description: '文章类型' }),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "type", void 0);
exports.CreatePostDto = CreatePostDto;
//# sourceMappingURL=create-post.dto.js.map
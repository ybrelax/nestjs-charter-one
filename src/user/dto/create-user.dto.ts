import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "用户名" })
  @IsNotEmpty({ message: "用户名不能为空" })
  readonly username: string;
}

import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Query,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "src/dto/create-post.dto";
import { PostsService } from "./posts.service";

@ApiTags('文章')
@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * 创建文章
   */
  @ApiOperation({summary: '创建文章'})
  @Post("save")
  async create(@Body() post: CreatePostDto) {
    return await this.postsService.create(post);
  }

  @ApiOperation({summary: '获取文章列表'})
  @Get("find")
  async findAll(@Query() query) {
    return this.postsService.findAll(query);
  }

  /**
   * 根据id查询到具体文章
   * @param id
   * @returns
   */
  @Get("find/:id")
  async find(@Param("id") id) {
    return this.postsService.findById(id);
  }

  @Put("update/:id")
  async update(@Param("id") id, @Body() post) {
    return this.postsService.updateById(id, post);
  }

  /**
   * 删除文章
   * @param id
   */
  @Delete("delete/:id")
  async delete(@Param("id") id) {
    return this.postsService.remove(id);
  }
}

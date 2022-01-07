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
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * 创建文章
   */
  @Post("save")
  async create(@Body() post) {
    return await this.postsService.create(post);
  }

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

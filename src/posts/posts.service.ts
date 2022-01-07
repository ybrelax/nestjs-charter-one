import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { PostsEntity } from "./posts.entity";

export interface PostRo {
  list: PostsEntity[];
  count: number;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private postsRepository: Repository<PostsEntity>
  ) {}

  // 创建
  async create(post: Partial<PostsEntity>): Promise<PostsEntity> {
    const { title } = post;
    if (!title) {
      throw new HttpException("缺少文字标题", 401);
    }
    const doc = await this.postsRepository.findOne({ where: { title } });
    if (doc) {
      throw new HttpException("文章已经存在", 401);
    }
    return this.postsRepository.save(post);
  }

  // 查询所有
  async findAll(query): Promise<PostRo> {
    const qb = await getRepository(PostsEntity).createQueryBuilder("post");
    qb.where("1 = 1");
    qb.orderBy("post.create_time", "DESC");

    const count = await qb.getCount();
    const { pageNo = 1, pageSize = 10 } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNo - 1));
    const posts = await qb.getMany();
    return { list: posts, count: count };
  }

  // 找到指定文章
  async findById(id): Promise<PostsEntity> {
    return await this.postsRepository.findOne({ id });
  }

  async updateById(id, post): Promise<PostsEntity> {
    const doc = await this.postsRepository.findOne({ where: { id } });
    if (!doc) {
      throw new HttpException(`缺少id为${id}的文章`, 401);
    }
    const updatePost = this.postsRepository.merge(doc, post);
    return await this.postsRepository.save(updatePost);
  }

  // 删除文章
  async remove(id) {
    const doc = await this.postsRepository.findOne({ where: { id } });
    if (!doc) {
      throw new HttpException(`文章id为${id}的文章不存在`, 401);
    }
    return await this.postsRepository.remove(doc);
  }
}

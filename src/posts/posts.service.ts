import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PostsEntity } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private postsRepository: Repository<PostsEntity>,
  ) {}

  // 创建
  async create(post: Partial<PostsEntity>): Promise<PostsEntity> {
    const { title } = post;
    if (!title) {
      throw new HttpException('缺少文字标题', 401);
    }
    const doc = await this.postsRepository.find({ where: { title } });
    if (doc) {
        
    }
    return;
  }
}

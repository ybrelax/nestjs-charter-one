import { Repository } from "typeorm";
import { PostsEntity } from "./posts.entity";
export interface PostRo {
    list: PostsEntity[];
    count: number;
}
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<PostsEntity>);
    create(post: Partial<PostsEntity>): Promise<PostsEntity>;
    findAll(query: any): Promise<PostRo>;
    findById(id: any): Promise<PostsEntity>;
    updateById(id: any, post: any): Promise<PostsEntity>;
    remove(id: any): Promise<PostsEntity>;
}

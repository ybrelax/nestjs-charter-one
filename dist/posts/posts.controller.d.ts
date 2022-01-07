import { PostsService } from "./posts.service";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(post: any): Promise<import("./posts.entity").PostsEntity>;
    findAll(query: any): Promise<import("./posts.service").PostRo>;
    find(id: any): Promise<import("./posts.entity").PostsEntity>;
    update(id: any, post: any): Promise<import("./posts.entity").PostsEntity>;
    delete(id: any): Promise<import("./posts.entity").PostsEntity>;
}

export declare class User {
    id: number;
    username: string;
    nickname: string;
    password: string;
    email: string;
    avatar: string;
    role: string;
    createTime: Date;
    updateTime: Date;
    encryptPwd(): Promise<void>;
}

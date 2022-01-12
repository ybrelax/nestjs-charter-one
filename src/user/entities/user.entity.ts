import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcryptjs";

@Entity("nestjs-test-user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 100 })
  username: string; // 用户名

  @Column({ length: 100 })
  nickname: string; // 昵称

  @Column()
  password: string; // 密码

  @Column()
  email: string; // 邮箱

  @Column()
  avatar: string; // 头像

  @Column("simple-enum", { enum: ["root", "author", "visitor"] })
  role: string; // 用户角色

  @Column({
    name: "create_name",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date; // 创建日期

  @Column({
    name: "update_time",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date; // 修改日期

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hasSync(this.password);
  }
}

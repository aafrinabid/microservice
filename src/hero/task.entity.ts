import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    status:string

    @ManyToOne(()=>User,(user)=>user.tasks)
    user:User
}
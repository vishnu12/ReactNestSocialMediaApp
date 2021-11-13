import { User } from "src/user/schema/user.schema";

export interface CreatePostDto{
    title:string
    description:string
    postedBy:User | string
    comments?:{comment:string,commentedBy:User}[]
    likes?:User[]
    dislikes?:User[]
    image?:string

}
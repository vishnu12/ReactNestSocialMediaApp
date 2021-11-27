export interface Post{
    description?: string;
    image?:string;
    postedBy?:string
    comments?:{comment:string,commentedby:string}[]
    likes?:string[]
    dislikes?:string[]
}
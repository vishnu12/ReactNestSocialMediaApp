export interface Post{
    _id?:string;
    description?: string;
    image?:string;
    postedBy?:{_id:string,name:string,profilepic?:string};
    comments?:{comment:string,commentedBy:{_id:string,name:string,profilepic?:string}}[]
    likes?:string[]
    dislikes?:string[]
    
}


export interface PostUpdate{
    _id?:string;
    comments?:{comment:string,commentedBy:string}
    likes?:string
    dislikes?:string
}
export interface Post{
    _id?:string;
    description?: string;
    image?:string;
    postedBy?:{_id:string,name:string}
    comments?:{comment:string,commentedby:string}[]
    likes?:string[]
    dislikes?:string[]
}


export interface PostUpdate{
    comments?:{comment:string,commentedby:string}
    likes?:string
    dislikes?:string
}
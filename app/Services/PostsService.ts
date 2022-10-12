import Post from 'App/Models/Post'

interface PostsUpdateStore {
    title: string
    description: string
}

export class PostsService  {
    public async index(): Promise<Post[]>
    {
        return await Post.all()
    }
    public async store(data: PostsUpdateStore): Promise<any>
    {
        if(data.title && data.description)
            return Post.create(data)
        
        return {message: 'some field is empty, please check!'}
    }
    public async show(id: string): Promise<Post>
    {
        return Post.findOrFail(id)
    }
    public async update(id: string, data: PostsUpdateStore): Promise<any>
    {
        const post = await Post.findOrFail(id)
        return await post.merge(data).save()
    }
    public async destroy(id: string)
    {
        const post = await Post.findOrFail(id)
        return await post.delete()
    }
}

export default new PostsService
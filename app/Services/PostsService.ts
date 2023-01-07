import Post from 'App/Models/Post'

interface PostsUpdateStore {
    user_id: string,
    title: string
    description: string
}

export class PostsService  {
    public async index(user_id: string): Promise<Post[]>
    {
        return await Post.query().where('user_id', user_id)
    }
    public async store(data: PostsUpdateStore): Promise<Post>
    {
        return await Post.create({ ...data })
    }
    public async show(id: string): Promise<Post>
    {
        return await Post.findOrFail(id)
    }
    public async update(id: string, data: PostsUpdateStore): Promise<Post>
    {
        const post = await Post.findOrFail(id)
        return await post.merge(data).save()
    }
    public async destroy(id: string): Promise<void>
    {
        const post = await Post.findOrFail(id)
        return await post.delete()
    }
}

export default new PostsService
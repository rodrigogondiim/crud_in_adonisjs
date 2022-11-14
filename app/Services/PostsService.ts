import Post from 'App/Models/Post'
import { uuid } from 'uuidv4';

interface PostsUpdateStore {
    title: string
    description: string
}

export class PostsService  {
    public async index(): Promise<Post[]>
    {
        return await Post.all()
    }
    public async store(data: PostsUpdateStore): Promise<Post>
    {
        return await Post.create({
            id: uuid(),
            ...data
        })
    }
    public async show(id: string): Promise<Post>
    {
        return await Post.findOrFail(id)
    }
    public async update(id: string, data: PostsUpdateStore): Promise<any>
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
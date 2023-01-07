import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostsService from 'App/Services/PostsService'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
    public async index({user, response}: HttpContextContract){
        const data = await PostsService.index(user.id)
        return response.ok(data)
    }
    public async store({user, request, response}: HttpContextContract){
        const dataCreate = await request.validate(PostValidator)
        const post = await PostsService.store(Object.assign(dataCreate, {user_id: user.id}))
        return response.created(post)
    }
    public async show({params, response}: HttpContextContract){
        const data = await PostsService.show(params.id)
        return response.ok(data)
    }
    public async update({params, request, response}: HttpContextContract){
        const postValidator = await request.validate(PostValidator)
        const dataUpdate = Object.assign(postValidator)
        const data = await PostsService.update(params.id, dataUpdate)
        return response.ok(data)
    }
    public async destroy({params, response}: HttpContextContract){
        await PostsService.destroy(params.id)
        return response.noContent()
    }
}

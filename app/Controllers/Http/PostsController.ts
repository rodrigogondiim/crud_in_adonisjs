import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostsService from 'App/Services/PostsService'

export default class PostsController {
    public async index({response}: HttpContextContract){
        const data = await PostsService.index()
        return response.ok(data)
    }
    public async store({request, response}: HttpContextContract)
    {
        const data = await PostsService.store(request.only(['title', 'description']))
        return response.created(data)
    }
    public async show({params, response}: HttpContextContract)
    {
        const data = await PostsService.show(params.id)
        return response.ok(data)
    }
    public async update({params, request, response}: HttpContextContract)
    {
        const data = await PostsService.update(params.id, request.only(['title', 'description']))
        return response.ok(data)
    }
    public async destroy({params, response}: HttpContextContract)
    {
        await PostsService.destroy(params.id)
        return response.noContent()
    }
}

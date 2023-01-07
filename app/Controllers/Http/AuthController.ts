import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
    public async login({auth, response, request}: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            return response.ok(token)
        } catch (error) {
            return response.unauthorized({message: 'Invalid credentials'})
        }
    }

    public async register({request, response}: HttpContextContract){
        const name = request.input('name')
        const email = request.input('email')
        const password = request.input('password')

        if(!name || !email || !password)
            throw new Exception('please, check the fields!', 422)
        
        const user = await User.create({name, email, password})
        return response.created(user)
    }
}

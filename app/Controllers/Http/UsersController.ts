import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async me({user, response}: HttpContextContract){
        return response.ok(user)
    }

    public async posts({auth, response}: HttpContextContract){
        return response.ok(auth.user)
    }
    
}

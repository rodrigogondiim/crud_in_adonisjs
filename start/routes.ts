import Route from '@ioc:Adonis/Core/Route'
import Post from 'App/Models/Post'

Route.get('/', ()=> {
})

Route.group(() => {
    Route.get('/', 'PostsController.index')
    Route.post('/', 'PostsController.store')
    Route.get(':id', 'PostsController.show')
    Route.put(':id', 'PostsController.update')
    Route.delete(':id', 'PostsController.destroy')
}).prefix('/api/posts')
    .middleware('auth')
    .middleware(async (ctx, next) => {
        if(ctx.params?.id)
            await Post.query().withScopes(
                (scopes) => scopes.userLogger(ctx.user.id, ctx.params.id))
            .firstOrFail()
        await next()
    })

Route.group(() => {
    Route.post('/', 'AuthController.login')
    Route.post('/register', 'AuthController.register')

}).prefix('/api/auth')

Route.group(() => {
    Route.get('/me', 'UsersController.me')
}).prefix('/api/user')
    .middleware('auth')






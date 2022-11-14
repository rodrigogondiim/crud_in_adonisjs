import { test } from '@japa/runner'

test('INDEX returned 200', async ({ client }) => {
  const response = await client.get('/api/posts')

  response.assertStatus(200)
})

test('STORE returned 422', async ({ client }) => {
  const response = await client.post('/api/posts')

  response.assertStatus(422)
})
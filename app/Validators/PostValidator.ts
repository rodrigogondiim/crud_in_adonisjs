import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string([
      rules.maxLength(50)
    ]),
    description: schema.string()
  })

  public messages: CustomMessages = {
    'title.maxLength': 'title exceeded max size',
    'title.required': 'title is required',
    'description.required': 'description is required'
  }
}

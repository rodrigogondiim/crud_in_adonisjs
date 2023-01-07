import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, scope } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public user_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  public static userLogger = scope((query, user_id: string, post_id: string) => {
    query.where('id', post_id).where('user_id', user_id)
  })
}

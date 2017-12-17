import { Query } from 'ouyo'
import { Transform, Sprite } from '../components'
import { ctx } from '../canvas'

export const renderSprite = {
  query: new Query(Transform, Sprite),
  processEntity (entity) {
    const transform = entity.get(Transform)
    const sprite = entity.get(Sprite)

    ctx.drawImage(
      sprite.image,
      Math.round(transform.x - sprite.width / 2),
      Math.round(transform.y - sprite.height / 2)
    )
  }
}

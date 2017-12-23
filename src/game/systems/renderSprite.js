import { Query } from 'ouyo'
import { Transform, Sprite, Rotation } from '../components'
import { ctx } from '../canvas'

export const renderSprite = {
  query: new Query(Transform, Sprite),
  processEntity (entity) {
    const transform = entity.get(Transform)
    const sprite = entity.get(Sprite)

    if (entity.has(Rotation)) {
      const { angle } = entity.get(Rotation)
      drawRotated(ctx, transform, sprite, angle + Math.PI / 2)
    } else {
      ctx.drawImage(
        sprite.image,
        Math.round(transform.x - sprite.width / 2),
        Math.round(transform.y - sprite.height / 2)
      )
    }
  }
}

function drawRotated (ctx, transform, sprite, angle) {
  ctx.translate(transform.x, transform.y)
  ctx.rotate(angle)

  ctx.drawImage(
    sprite.image,
    -sprite.width / 2,
    -sprite.height / 2
  )

  ctx.rotate(-angle)
  ctx.translate(-transform.x, -transform.y)
}

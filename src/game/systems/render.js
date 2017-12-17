import { Query } from 'ouyo'
import { Transform } from '../components'
import { ctx } from '../canvas'

export const RenderSystem = {
  query: new Query(Transform),
  processEntity (entity, timeDelta) {
    const transform = entity.get(Transform)

    ctx.fillStyle = 'white'
    ctx.fillRect(transform.x - 10, transform.y - 10, 20, 20)
  }
}

import { Query } from 'ouyo'
import { Transform, Color } from '../components'
import { ctx } from '../canvas'

export const render = {
  query: new Query(Transform, Color),
  processEntity (entity) {
    const transform = entity.get(Transform)
    const color = entity.get(Color)

    ctx.fillStyle = color.value
    drawSquare(transform.x, transform.y, transform.size)
  }
}

function drawSquare (x, y, size) {
  ctx.fillRect(x - size / 2, y - size / 2, size, size)
}

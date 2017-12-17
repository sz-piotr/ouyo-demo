import { Query } from 'ouyo'
import { Transform } from '../components'
import { ctx } from '../canvas'

export const render = {
  query: new Query(Transform),
  processEntity (entity) {
    const transform = entity.get(Transform)

    ctx.fillStyle = 'white'
    drawSquare(transform.x, transform.y, transform.size)
  }
}

function drawSquare (x, y, size) {
  ctx.fillRect(x - size / 2, y - size / 2, size, size)
}

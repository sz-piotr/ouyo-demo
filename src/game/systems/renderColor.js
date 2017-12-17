import { Query } from 'ouyo'
import { Transform, Color } from '../components'
import { ctx } from '../canvas'

export const renderColor = {
  query: new Query(Transform, Color),
  processEntity (entity) {
    const transform = entity.get(Transform)
    const color = entity.get(Color)

    ctx.fillStyle = color.value
    fillCircle(transform.x, transform.y, transform.size)
  }
}

function fillCircle (x, y, size) {
  ctx.beginPath()
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI)
  ctx.fill()
}

import { Query } from 'ouyo'
import { Transform } from '../components'
import { WIDTH, HEIGHT } from '../canvas'

export const removeOOB = {
  query: new Query(Transform),
  processEntity (entity, event, game) {
    const transform = entity.get(Transform)
    if (!isInBounds(transform)) {
      game.removeEntity(entity)
    }
  }
}

function isInBounds (transform) {
  return (
    transform.x + transform.size > 0 &&
    transform.x - transform.size < WIDTH &&
    transform.y + transform.size > 0 &&
    transform.y - transform.size < HEIGHT
  )
}

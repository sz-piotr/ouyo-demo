import { Query } from 'ouyo'
import { Transform } from '../components'
import { WIDTH, HEIGHT } from '../canvas'

const TOLERATION = 200

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
    transform.x + transform.size > -TOLERATION &&
    transform.x - transform.size < WIDTH + TOLERATION &&
    transform.y + transform.size > -TOLERATION &&
    transform.y - transform.size < HEIGHT + TOLERATION
  )
}

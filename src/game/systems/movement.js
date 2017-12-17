import { Query } from 'ouyo'
import { Transform, Velocity } from '../components'

export const MovementSystem = {
  query: new Query(Transform, Velocity),
  processEntity (entity, timeDelta) {
    const transform = entity.get(Transform)
    const velocity = entity.get(Velocity)

    transform.x += velocity.x * timeDelta
    transform.y += velocity.y * timeDelta
  }
}

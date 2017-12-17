import { Query } from 'ouyo'
import { Transform, Velocity } from '../components'

export const applyVelocity = {
  query: new Query(Transform, Velocity),
  processEntity (entity, event) {
    const transform = entity.get(Transform)
    const velocity = entity.get(Velocity)

    transform.x += velocity.x * event.timeDelta
    transform.y += velocity.y * event.timeDelta
  }
}

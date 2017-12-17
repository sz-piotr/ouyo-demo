import { Query } from 'ouyo'
import {
  Transform,
  Bullet
} from '../components'

export const removeBullets = {
  query: new Query(Bullet, Transform),
  processEntity (entity, event, game) {
    const transform = entity.get(Transform)

    if (transform.y <= -100) {
      game.removeEntity(entity)
    }
  }
}

import { Query } from 'ouyo'
import {
  Cannon,
  Transform,
  Velocity,
  Bullet
} from '../components'

export const shootBullets = {
  query: new Query(Cannon, Transform),
  processEntity (entity, event, game) {
    const cannon = entity.get(Cannon)
    const transform = entity.get(Transform)

    cannon.timeLeft -= event.timeDelta
    if (cannon.timeLeft <= 0) {
      cannon.timeLeft = cannon.interval + cannon.timeLeft
      game.createEntity()
        .add(new Transform(transform.x, transform.y - transform.size, 10))
        .add(new Velocity(0, -cannon.bulletSpeed))
        .add(new Bullet())
    }
  }
}

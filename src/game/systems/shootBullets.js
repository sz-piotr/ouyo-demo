import { Query } from 'ouyo'
import {
  Cannon,
  Transform
} from '../components'
import { bullet } from '../assemblages/bullet'

export const shootBullets = {
  query: new Query(Cannon, Transform),
  processEntity (entity, event, game) {
    const cannon = entity.get(Cannon)
    const transform = entity.get(Transform)

    cannon.timeLeft -= event.timeDelta
    if (cannon.timeLeft <= 0) {
      cannon.timeLeft = cannon.interval + cannon.timeLeft
      bullet(game, transform, cannon.bulletSpeed)
    }
  }
}

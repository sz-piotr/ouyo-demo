import { Query } from 'ouyo'
import {
  Cannon,
  Transform,
  DoubleDamage,
  ThreeWay
} from '../components'
import { bullet } from '../assemblages/bullet'

export const shootBullets = {
  query: new Query(Cannon, Transform),
  processEntity (entity, event, game) {
    const cannon = entity.get(Cannon)
    const transform = entity.get(Transform)

    const hasDD = entity.has(DoubleDamage)
    const hasTW = entity.has(ThreeWay)

    cannon.timeLeft -= event.timeDelta
    if (cannon.timeLeft <= 0) {
      cannon.timeLeft = cannon.interval + cannon.timeLeft
      const dir = new Vector2(0, -cannon.bulletSpeed)

      game.createEntity(bullet(transform, dir, hasDD))

      if (hasTW) {
        game.createEntity(bullet(transform, dir.rotate(-15), hasDD))
        game.createEntity(bullet(transform, dir.rotate(+15), hasDD))
      }
    }
  }
}

class Vector2 {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  get angle () {
    return Math.atan2(this.y, this.x)
  }

  rotate (deg) {
    const sin = Math.sin(deg * Math.PI / 180)
    const cos = Math.cos(deg * Math.PI / 180)

    return new Vector2(
      (cos * this.x) - (sin * this.y),
      (sin * this.x) + (cos * this.y)
    )
  }
}

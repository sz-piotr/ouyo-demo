import {
  Transform,
  Velocity
} from '../components'
import { getSprite } from '../loader'

export function powerup (x, y) {
  return function (entity) {
    entity
      .add(new Transform(x, y, 40))
      .add(new Velocity(0, 200))

    if (Math.random() < 0.5) {
      entity
        .add(getSprite('powerup-dd.png'))
    } else {
      entity
        .add(getSprite('powerup-tw.png'))
    }
  }
}

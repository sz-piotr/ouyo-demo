import {
  Transform,
  Velocity,
  DamagesEnemies
} from '../components'
import { getSprite } from '../loader'

export function bullet (transform, speed, hasDoubleDamage) {
  return entity => entity
    .add(new Transform(transform.x, transform.y - transform.size + 10, 10))
    .add(new Velocity(0, -speed))
    .add(new DamagesEnemies(hasDoubleDamage ? 2 : 1))
    .add(getSprite(hasDoubleDamage ? 'bullet-dd.png' : 'bullet.png'))
}

import {
  Transform,
  Velocity,
  DamagesEnemies,
  Rotation,
  Sprite
} from '../components'

export function bullet (transform, velocity, hasDoubleDamage) {
  return entity => entity
    .add(new Transform(transform.x, transform.y - transform.size + 10, 10))
    .add(new Velocity(velocity.x, velocity.y))
    .add(new DamagesEnemies(hasDoubleDamage ? 2 : 1))
    .add(new Sprite(hasDoubleDamage ? 'bullet-dd.png' : 'bullet.png'))
    .add(new Rotation(velocity.angle))
}

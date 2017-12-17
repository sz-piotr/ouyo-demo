import {
  Transform,
  Velocity,
  Bullet,
  Color
} from '../components'

export function bullet (transform, speed) {
  return entity => entity
    .add(new Transform(transform.x, transform.y - transform.size + 10, 10))
    .add(new Velocity(0, -speed))
    .add(new Bullet())
    .add(new Color('red'))
}

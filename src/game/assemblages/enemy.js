import { Transform, Velocity, Enemy, Color } from '../components'
import { WIDTH } from '../canvas'

export const enemy = entity => entity
  .add(new Transform(randomX(), -20, 30))
  .add(new Velocity(0, 50))
  .add(new Enemy(1))
  .add(new Color('blue'))

function randomX () {
  return (Math.random() * 0.8 + 0.1) * WIDTH
}

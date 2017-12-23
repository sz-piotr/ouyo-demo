import { Transform, Velocity, Enemy } from '../components'
import { getSprite } from '../loader'
import { WIDTH } from '../canvas'

export const enemy = entity => entity
  .add(new Transform(randomX(), -20, 45))
  .add(new Velocity(0, 50))
  .add(new Enemy(8))
  .add(getSprite(`enemy-${Math.floor(Math.random() * 2 + 1)}.png`))

function randomX () {
  return (Math.random() * 0.8 + 0.1) * WIDTH
}

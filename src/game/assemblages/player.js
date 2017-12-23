import {
  Transform,
  Velocity,
  Player,
  Cannon
} from '../components'
import { getSprite } from '../loader'
import { WIDTH, HEIGHT } from '../canvas'

export const player = entity => entity
  .add(new Transform(WIDTH / 2, HEIGHT - 50, 45))
  .add(new Velocity(0, 0))
  .add(new Player(1))
  .add(getSprite('player.png'))
  .add(new Cannon(0.2, 0, 450))

import {
  Transform,
  Velocity,
  Player,
  Cannon
} from './components'
import { getSprite } from './loader'
import { WIDTH, HEIGHT } from './canvas'

export function init (game) {
  game.createEntity()
    .add(new Transform(WIDTH / 2, HEIGHT - 50, 30))
    .add(new Velocity(0, 0))
    .add(new Player())
    .add(getSprite('player.png'))
    .add(new Cannon(0.1, 0, 450))
}

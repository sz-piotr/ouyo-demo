import { Transform, Velocity, Player } from './components'
import { WIDTH, HEIGHT } from './canvas'

export function init (game) {
  game.createEntity()
    .add(new Transform(WIDTH / 2, HEIGHT - 50))
    .add(new Velocity(0, 0))
    .add(new Player())
}

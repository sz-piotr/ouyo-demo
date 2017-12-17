import { Transform, Velocity } from './components'

export function init (game) {
  game.createEntity()
    .add(new Transform(50, 50))
    .add(new Velocity(100, 40))
}

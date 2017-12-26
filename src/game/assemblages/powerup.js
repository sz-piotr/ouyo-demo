import {
  Transform,
  Velocity,
  DoubleDamagePowerup,
  ThreeWayPowerup,
  Sprite
} from '../components'

export function powerup (x, y) {
  return function (entity) {
    entity
      .add(new Transform(x, y, 40))
      .add(new Velocity(0, 200))

    if (Math.random() < 0.5) {
      entity
        .add(new Sprite('powerup-dd.png'))
        .add(new DoubleDamagePowerup())
    } else {
      entity
        .add(new Sprite('powerup-tw.png'))
        .add(new ThreeWayPowerup())
    }
  }
}

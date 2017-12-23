import { Query } from 'ouyo'
import {
  Transform,
  Player,
  DoubleDamage,
  DoubleDamagePowerup,
  ThreeWay,
  ThreeWayPowerup
} from '../components'
import { collide } from '../collision'

const DURATION = 5

export const consumePowerups = {
  query: [
    new Query(Transform, Player).one(),
    new Query(Transform, DoubleDamagePowerup),
    new Query(Transform, ThreeWayPowerup)
  ],
  process ([ player, ddPowerups, twPowerups ], event, game) {
    if (!player) {
      return
    }
    processPowerups(player, ddPowerups, DoubleDamage, game)
    processPowerups(player, twPowerups, ThreeWay, game)
  }
}

function processPowerups (player, powerups, Powerup, game) {
  const playerTransform = player.get(Transform)
  for (const powerup of powerups) {
    const powerupTransform = powerup.get(Transform)
    if (collide(playerTransform, powerupTransform)) {
      game.removeEntity(powerup)
      apply(player, Powerup)
    }
  }
}

function apply (player, Powerup) {
  if (player.has(Powerup)) {
    const powerup = player.get(Powerup)
    powerup.timeLeft = DURATION
  } else {
    player.add(new Powerup(DURATION))
  }
}

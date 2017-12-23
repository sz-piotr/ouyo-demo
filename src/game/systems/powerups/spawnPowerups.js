import { powerup } from '../../assemblages/powerup'

const POWERUP_CHANCE = 0.3

export const spawnPowerups = {
  on: 'enemykilled',
  process (entities, event, game) {
    if (Math.random() < POWERUP_CHANCE) {
      game.createEntity(powerup(event.x, event.y))
    }
  }
}

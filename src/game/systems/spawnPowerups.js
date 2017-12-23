import { powerup } from '../assemblages/powerup'

let INTERVAL = 1
let timeToPowerup = INTERVAL

export const spawnPowerups = {
  on: 'enemykilled',
  process (entities, event, game) {
    timeToPowerup -= event.timeDelta
    if (timeToPowerup <= 0) {
      timeToPowerup += INTERVAL
      game.createEntity(powerup(event.x, event.y))
    }
  }
}

import { enemy } from '../../assemblages/enemy'

let interval = 1
let remainingTime = 1

export const spawnEnemies = {
  process (entity, event, game) {
    remainingTime -= event.timeDelta
    if (remainingTime < 0) {
      remainingTime += interval
      game.createEntity(enemy)
    }
  }
}

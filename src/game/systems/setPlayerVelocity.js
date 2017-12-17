import { Query } from 'ouyo'
import { Velocity, Player } from '../components'

const PLAYER_SPEED = 300

export const setPlayerVelocity = {
  query: new Query(Player, Velocity),
  processEntity (entity, event, game) {
    const velocity = entity.get(Velocity)
    if (game.events.includes('moveleft')) {
      velocity.x = -PLAYER_SPEED
    } else if (game.events.includes('moveright')) {
      velocity.x = PLAYER_SPEED
    } else {
      velocity.x = 0
    }
  }
}

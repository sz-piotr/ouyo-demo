import { Query } from 'ouyo'
import { Velocity, Player } from '../components'

const PLAYER_SPEED = 300

export const setPlayerVelocity = {
  query: new Query(Player, Velocity),
  on: 'move',
  processEntity (entity, event, game) {
    const velocity = entity.get(Velocity)
    velocity.x = PLAYER_SPEED * event.direction
  }
}

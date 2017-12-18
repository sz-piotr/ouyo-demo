import { Query } from 'ouyo'
import { Velocity, Player } from '../components'
import { getInputXAxis } from '../input'

const PLAYER_SPEED = 300

export const handleInput = {
  query: new Query(Player, Velocity),
  processEntity (entity) {
    const velocity = entity.get(Velocity)
    velocity.x = PLAYER_SPEED * getInputXAxis()
  }
}

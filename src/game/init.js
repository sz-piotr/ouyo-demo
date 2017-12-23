import { player } from './assemblages/player'
import { Score } from './components'

export function init (game) {
  game.createEntity(player)
  game.createEntity()
    .add(new Score(0))
}

import { Query } from 'ouyo'
import { Transform, Player } from '../components'
import { WIDTH } from '../canvas'

export const limitPlayerPosition = {
  query: new Query(Player, Transform),
  processEntity (entity, timeDelta, game) {
    const transform = entity.get(Transform)
    if (transform.x < 50) {
      transform.x = 50
    } else if (transform.x > WIDTH - 50) {
      transform.x = WIDTH - 50
    }
  }
}

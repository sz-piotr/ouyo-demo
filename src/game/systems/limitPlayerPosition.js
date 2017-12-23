import { Query } from 'ouyo'
import { Transform, Player } from '../components'
import { WIDTH } from '../canvas'

export const limitPlayerPosition = {
  query: new Query(Player, Transform),
  processEntity (entity, event, game) {
    const transform = entity.get(Transform)
    const radius = transform.size / 2
    if (transform.x < radius) {
      transform.x = radius
    } else if (transform.x > WIDTH - radius) {
      transform.x = WIDTH - radius
    }
  }
}

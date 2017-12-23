import { Query } from 'ouyo'
import { Score } from '../../components'
import { ctx, WIDTH } from '../../canvas'

export const drawScore = {
  query: new Query(Score),
  processEntity (entity) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, WIDTH, 50)
    ctx.fillStyle = 'white'
    ctx.font = 'bold 32px monospace'
    ctx.textAlign = 'left'
    ctx.fillText(entity.get(Score).points, 20, 40)
  }
}

import { Query } from 'ouyo'
import { Player } from '../../components'
import { ctx, WIDTH, HEIGHT } from '../../canvas'

export const drawGameOver = {
  query: new Query(Player).one(),
  process (player) {
    if (!player) {
      ctx.fillStyle = 'red'
      ctx.font = 'bold 50px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', WIDTH / 2, HEIGHT / 2)
    }
  }
}

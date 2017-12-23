import { Query } from 'ouyo'
import { Player } from '../../components'
import { ctx, WIDTH } from '../../canvas'

export const drawHearts = {
  query: new Query(Player),
  processEntity (entity) {
    const { health } = entity.get(Player)
    ctx.fillStyle = 'red'
    ctx.font = 'bold 32px monospace'
    ctx.textAlign = 'right'
    ctx.fillText(hearts(health), WIDTH - 20, 40)
  }
}

function hearts (n) {
  let text = ''
  for (let i = 0; i < n; i++) {
    text += '❤'
  }
  return text
}

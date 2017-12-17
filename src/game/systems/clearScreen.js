import { ctx, WIDTH, HEIGHT } from '../canvas'

export const clearScreen = {
  process () {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
  }
}

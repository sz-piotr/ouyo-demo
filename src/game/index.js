import { handleRawInput } from './systems/handleRawInput'
import { setPlayerVelocity } from './systems/setPlayerVelocity'
import { applyVelocity } from './systems/applyVelocity'
import { limitPlayerPosition } from './systems/limitPlayerPosition'
import { shootBullets } from './systems/shootBullets'
import { removeBullets } from './systems/removeBullets'
import { clearScreen } from './systems/clearScreen'
import { render } from './systems/render'

import { game } from './game'
import { init } from './init'

game.registerSystems([
  handleRawInput,
  setPlayerVelocity,
  applyVelocity,
  limitPlayerPosition,
  shootBullets,
  removeBullets,
  clearScreen,
  render
])

game.start(init)

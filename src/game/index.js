import { handleRawInput } from './systems/handleRawInput'
import { setPlayerVelocity } from './systems/setPlayerVelocity'
import { applyVelocity } from './systems/applyVelocity'
import { limitPlayerPosition } from './systems/limitPlayerPosition'
import { clearScreen } from './systems/clearScreen'
import { render } from './systems/render'

import { game } from './game'
import { init } from './init'

game.registerSystems([
  handleRawInput,
  setPlayerVelocity,
  applyVelocity,
  limitPlayerPosition,
  clearScreen,
  render
])

game.start(init)

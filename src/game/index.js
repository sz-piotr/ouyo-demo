import { handleInput } from './systems/handleInput'
import { applyVelocity } from './systems/applyVelocity'
import { limitPlayerPosition } from './systems/limitPlayerPosition'
import { shootBullets } from './systems/shootBullets'
import { removeOOB } from './systems/removeOOB'
import enemies from './systems/enemies'
import powerups from './systems/powerups'
import rendering from './systems/rendering'

import { game } from './game'
import { load } from './loader'
import { init } from './init'

import assets from './assets'

game.registerSystems([
  handleInput,
  applyVelocity,
  limitPlayerPosition,
  shootBullets,
  removeOOB,
  ...enemies,
  ...powerups,
  ...rendering
])

load(assets).then(() =>
  game.start(init)
)

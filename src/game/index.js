import { handleInput } from './systems/handleInput'
import { applyVelocity } from './systems/applyVelocity'
import { limitPlayerPosition } from './systems/limitPlayerPosition'
import { shootBullets } from './systems/shootBullets'
import { removeOOB } from './systems/removeOOB'
import { spawnEnemies } from './systems/spawnEnemies'
import { damageEnemies } from './systems/damageEnemies'
import { damagePlayer } from './systems/damagePlayer'
import { spawnPowerups } from './systems/spawnPowerups'
import { drainPowerups } from './systems/drainPowerups'
import { consumePowerups } from './systems/consumePowerups'
import { clearScreen } from './systems/clearScreen'
import { renderColor } from './systems/renderColor'
import { renderSprite } from './systems/renderSprite'

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
  spawnEnemies,
  damageEnemies,
  damagePlayer,
  spawnPowerups,
  drainPowerups,
  consumePowerups,
  clearScreen,
  renderColor,
  renderSprite
])

load(assets).then(() =>
  game.start(init)
)

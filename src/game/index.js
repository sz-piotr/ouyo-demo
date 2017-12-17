import { MovementSystem } from './systems/movement'
import { ClearScreenSystem } from './systems/clearscreen'
import { RenderSystem } from './systems/render'

import { game } from './game'
import { init } from './init'

game.registerSystems([
  MovementSystem,
  ClearScreenSystem,
  RenderSystem
])

game.start(init)

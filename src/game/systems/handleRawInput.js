const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_A = 65
const KEY_D = 68

const inputMap = {
  keys: {
    [KEY_LEFT]: false,
    [KEY_RIGHT]: false,
    [KEY_A]: false,
    [KEY_D]: false
  },
  tilt: 0,
  get left () {
    return this.keys[KEY_LEFT] || this.keys[KEY_A] || this.tilt < -1
  },
  get right () {
    return this.keys[KEY_RIGHT] || this.keys[KEY_D] || this.tilt > 1
  }
}

window.addEventListener('keydown', function (e) {
  inputMap.keys[e.keyCode] = true
})

window.addEventListener('keyup', function (e) {
  inputMap.keys[e.keyCode] = false
})

export const handleRawInput = {
  process (entities, timeDelta, game) {
    const left = inputMap.left
    const right = inputMap.right

    if (left && !right) {
      game.emit('moveleft')
    } else if (!left && right) {
      game.emit('moveright')
    }
  }
}

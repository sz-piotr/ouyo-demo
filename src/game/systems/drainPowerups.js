import { Query } from 'ouyo'
import { DoubleDamage, ThreeWay, Invincible } from '../components'

export const drainPowerups = {
  query: [
    new Query(DoubleDamage),
    new Query(ThreeWay),
    new Query(Invincible)
  ],
  process ([dd, tw, inv], event, game) {
    drain(dd, DoubleDamage, event.timeDelta)
    drain(tw, ThreeWay, event.timeDelta)
    drain(inv, Invincible, event.timeDelta)
  }
}

function drain (entities, Powerup, timeDelta) {
  for (const entity of entities) {
    const powerup = entity.get(Powerup)
    powerup.timeLeft -= timeDelta
    if (powerup.timeLeft <= 0) {
      entity.remove(Powerup)
    }
  }
}

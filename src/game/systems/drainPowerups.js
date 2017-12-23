import { Query } from 'ouyo'
import { DoubleDamage, ThreeWay } from '../components'

export const drainPowerups = {
  query: [
    new Query(DoubleDamage),
    new Query(ThreeWay)
  ],
  process ([dd, tw], event, game) {
    drain(dd, DoubleDamage, event.timeDelta)
    drain(tw, ThreeWay, event.timeDelta)
  }
}

function drain (entities, Powerup, timeDelta) {
  for (const entity of entities) {
    const powerup = entity.get(Powerup)
    console.log(powerup)
    powerup.timeLeft -= timeDelta
    if (powerup.timeLeft <= 0) {
      entity.remove(Powerup)
    }
  }
}

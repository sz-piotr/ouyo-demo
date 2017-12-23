import { Query } from 'ouyo'
import { Score } from '../../components'

export const scoreDamagePoints = {
  query: new Query(Score),
  on: 'enemydamaged',
  processEntity (entity, event) {
    const score = entity.get(Score)
    score.points += event.damage * 100
  }
}

export const scoreKillPoints = {
  query: new Query(Score),
  on: 'enemykilled',
  processEntity (entity, event) {
    const score = entity.get(Score)
    score.points += 1000
  }
}

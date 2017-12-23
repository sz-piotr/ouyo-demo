import { Query } from 'ouyo'
import { Transform, Enemy, DamagesEnemies } from '../components'

export const damageEnemies = {
  query: [
    new Query(Transform, DamagesEnemies),
    new Query(Transform, Enemy)
  ],
  process ([ bullets, enemies ], event, game) {
    for (const enemy of enemies) {
      const enemyTransform = enemy.get(Transform)
      const enemyHealth = enemy.get(Enemy)

      for (const bullet of bullets) {
        const bulletTransform = bullet.get(Transform)

        if (collide(enemyTransform, bulletTransform)) {
          const { damage } = bullet.get(DamagesEnemies)
          game.removeEntity(bullet)

          enemyHealth.health -= damage
          if (enemyHealth.health <= 0) {
            game.removeEntity(enemy)
            game.emit({
              type: 'enemykilled',
              x: enemyTransform.x,
              y: enemyTransform.y
            })
          }

          break
        }
      }
    }
  }
}

const pow2 = a => a * a

function collide (a, b) {
  const minDistance = pow2((a.size + b.size) / 2)
  const distance = pow2(a.x - b.x) + pow2(a.y - b.y)
  return distance < minDistance
}

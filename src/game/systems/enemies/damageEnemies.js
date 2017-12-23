import { Query } from 'ouyo'
import { Transform, Enemy, DamagesEnemies } from '../../components'
import { collide } from '../../collision'

export const damageEnemies = {
  query: [
    new Query(Transform, DamagesEnemies),
    new Query(Transform, Enemy)
  ],
  process ([ bullets, enemies ], event, game) {
    for (const enemy of enemies) {
      const enemyTransform = enemy.get(Transform)

      for (const bullet of bullets) {
        const bulletTransform = bullet.get(Transform)

        if (collide(enemyTransform, bulletTransform)) {
          onCollide(enemy, enemyTransform, bullet, game)
          break
        }
      }
    }
  }
}

function onCollide (enemy, transform, bullet, game) {
  const health = enemy.get(Enemy)
  const { damage } = bullet.get(DamagesEnemies)

  game.removeEntity(bullet)
  game.emit({ type: 'enemydamaged', damage })

  health.health -= damage
  if (health.health <= 0) {
    game.removeEntity(enemy)
    game.emit({
      type: 'enemykilled',
      x: transform.x,
      y: transform.y
    })
  }
}

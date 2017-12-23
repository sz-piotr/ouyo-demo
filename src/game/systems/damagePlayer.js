import { Query } from 'ouyo'
import { Transform, Enemy, Player, Invincible } from '../components'
import { collide } from '../collision'

export const damagePlayer = {
  query: [
    new Query(Transform, Player).one(),
    new Query(Transform, Enemy)
  ],
  process ([ player, enemies ], event, game) {
    if (!player || player.has(Invincible)) {
      return
    }

    const playerTransform = player.get(Transform)
    for (const enemy of enemies) {
      const enemyTransform = enemy.get(Transform)

      if (collide(enemyTransform, playerTransform)) {
        const playerComponent = player.get(Player)
        player.add(new Invincible(2, null))
        playerComponent.health -= 1
        if (playerComponent.health <= 0) {
          // game.removeEntity(player)
        }
      }
    }
  }
}

import { game } from './game'

export const Transform = game.createComponent('x', 'y', 'size')
export const Velocity = game.createComponent('x', 'y')
export const Player = game.createComponent('health')
export const Cannon = game.createComponent('interval', 'timeLeft', 'bulletSpeed')
export const DamagesEnemies = game.createComponent('damage')
export const Enemy = game.createComponent('health')
export const Score = game.createComponent('points')

// powerups

export const DoubleDamagePowerup = game.createComponent()
export const ThreeWayPowerup = game.createComponent()

export const DoubleDamage = game.createComponent('timeLeft')
export const ThreeWay = game.createComponent('timeLeft')
export const Invincible = game.createComponent('timeLeft')

// rendering

export const Color = game.createComponent('value')
export const Sprite = game.createComponent('image', 'width', 'height')
export const Rotation = game.createComponent('angle')

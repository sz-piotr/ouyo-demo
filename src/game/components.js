import { game } from './game'

export const Transform = game.createComponent('x', 'y', 'size')
export const Velocity = game.createComponent('x', 'y')
export const Player = game.createComponent()
export const Cannon = game.createComponent('interval', 'timeLeft', 'bulletSpeed')
export const Bullet = game.createComponent()
export const Color = game.createComponent('value')
export const Sprite = game.createComponent('image', 'width', 'height')

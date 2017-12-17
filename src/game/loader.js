import { Sprite } from './components'

const sprites = {}

export async function load (assets) {
  const resolved = await Promise.all(assets.map(getAsset))
  resolved.forEach(sprite => {
    sprites[sprite.url] = () => new Sprite(sprite.image, sprite.width, sprite.height)
  })
}

function getAsset (url) {
  const image = new window.Image()
  return new Promise((resolve, reject) => {
    image.onload = () => resolve({
      url,
      image,
      width: image.naturalWidth,
      height: image.naturalHeight
    })
    image.onerror = () => reject(url)
    image.src = url
  })
}

export function getSprite (url) {
  return sprites[url]()
}

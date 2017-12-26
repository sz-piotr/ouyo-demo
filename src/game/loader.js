export const sprites = {}

export async function load (assets) {
  const resolved = await Promise.all(assets.map(getAsset))
  resolved.forEach(sprite => {
    sprites[sprite.url] = sprite
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

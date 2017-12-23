const pow2 = a => a * a

export function collide (a, b) {
  const minDistance = pow2((a.size + b.size) / 2)
  const distance = pow2(a.x - b.x) + pow2(a.y - b.y)
  return distance < minDistance
}

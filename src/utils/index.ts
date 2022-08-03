export * from './canvas'

export const shuffle = (items: any[]) => {
  const n = items.length
  for (let i = n - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * n)
    const tmp = items[i]
    items[i] = items[rand]
    items[rand] = tmp
  }
  return items
}

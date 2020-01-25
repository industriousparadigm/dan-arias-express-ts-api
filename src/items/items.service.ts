// Data Model Interfaces
import { Item } from './item.interface'
import { Items } from './items.interface'

// In-Memory Store
const items: Items = {
  1: {
    id: 1,
    name: 'Burger',
    price: 5.99,
    description: 'Tasty',
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png'
  },
  2: {
    id: 2,
    name: 'Pizza',
    price: 2.99,
    description: 'Cheesy',
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png'
  },
  3: {
    id: 3,
    name: 'Tea',
    price: 1.99,
    description: 'Informative',
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png'
  },
  4: {
    id: 4,
    name: 'Peach',
    price: 3.99,
    description: 'Juicy',
    image:
      'https://www.thespruceeats.com/thmb/0GVHWd0vSz0bBAxAAr3AJi9qYMo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Yellow-Peaches-576cd8bc5f9b585875fdb6e9.jpg'
  }
}

// Service Methods
export const findAll = async (): Promise<Items> => {
  return items
}

export const find = async (id: number): Promise<Item> => {
  const record: Item = items[id]

  if (record) return record

  throw new Error('No record found')
}

export const create = async (newItem: Item): Promise<void> => {
  const id = new Date().valueOf()
  items[id] = {
    ...newItem,
    id
  }
}

export const update = async (updatedItem: Item): Promise<void> => {
  if (items[updatedItem.id]) {
    items[updatedItem.id] = updatedItem
    return
  }

  throw new Error('No record found to update')
}

export const remove = async (id: number): Promise<void> => {
  const record: Item = items[id]

  if (record) {
    delete items[id]
    return
  }

  throw new Error('No record found to delete')
}

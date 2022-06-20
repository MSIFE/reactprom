import React from 'react'
import Item from './Item'

export default function ItemList({data = []}) {
  return (
    data.map(test => <Item key={test.id} info={test} />)
  )
}

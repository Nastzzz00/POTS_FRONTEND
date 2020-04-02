/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
import MenuList from '../components/MenuItem'

const menu = [
  {
    id: 1,
    menuOption: 'Dashboard',
  },
  {
    id: 2,
    menuOption: 'Orders',
  },
  {
    id: 3,
    menuOption: 'Supplier',
  },
]

describe('Menu Item', () => {
  test('renders correctly', () => {
    expect(shallow(<MenuList menuItem={menu} />)).toMatchSnapshot()
  })
})

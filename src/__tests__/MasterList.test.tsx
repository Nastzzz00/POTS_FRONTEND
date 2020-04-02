/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'

import MasterList from '../components/MasterList'

const props = {
  title: 'MasterList',
}

describe('MasterList', () => {
  test('renders correctly', () => {
    expect(shallow(<MasterList {...props} />)).toMatchSnapshot()
  })
})

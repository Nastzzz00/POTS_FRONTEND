/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import MasterList from '../components/MasterList'

const props = {
  title: 'MasterList',
}

describe('MasterList', () => {
  test('renders correctly', () => {
    expect(shallow(<MasterList {...props} />)).toMatchSnapshot()
  })
})

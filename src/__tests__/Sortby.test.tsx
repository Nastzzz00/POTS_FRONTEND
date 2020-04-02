/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import SortBy from '../components/SortBy'

const props = {
  title: 'SortBy',
}

describe('SortBy', () => {
  test('renders correctly', () => {
    expect(shallow(<SortBy {...props} />)).toMatchSnapshot()
  })
})

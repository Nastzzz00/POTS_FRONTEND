/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import SortBy from '../components/SortBy'

const sorts = [{ value: 'Something', desc: 'Something again' }]
const state = { sortby: 'Some value' }
const props = {
  title: 'SortBy',
  sorts: sorts,
}

describe('SortBy', () => {
  test('renders correctly', () => {
    expect(
      shallow(
        <SortBy
          {...props}
          state={state}
          sorts={sorts}
          setState={{ ...state, sortby: 'value' }}
        />,
      ),
    ).toMatchSnapshot()
  })
})

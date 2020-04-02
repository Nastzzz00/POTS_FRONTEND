/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import DashboardContent from '../components/DashboardContent'

const list = [{ documentdDate: '03/20/2020' }]
const statelogout = [{ username: 'some value' }]
const props = {
  title: 'Dashboard Content',
  list: list,
  statelogout: statelogout,
}

describe('Dashboard Content', () => {
  test('renders correctly', () => {
    expect(
      shallow(
        <DashboardContent {...props} list={list} statelogout={statelogout} />,
      ),
    ).toMatchSnapshot()
  })
})

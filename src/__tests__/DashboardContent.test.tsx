/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import DashboardContent from '../components/DashboardContent'

const props = {
  title: 'Dashboard Content',
}

describe('Dashboard Content', () => {
  test('renders correctly', () => {
    expect(shallow(<DashboardContent {...props} />)).toMatchSnapshot()
  })
})

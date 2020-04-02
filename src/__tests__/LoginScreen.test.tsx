/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import LoginScreen from '../components/LoginScreen'

const props = {
  title: 'Login Screen',
}

describe('Login Screen', () => {
  test('renders correctly', () => {
    expect(shallow(<LoginScreen {...props} />)).toMatchSnapshot()
  })
})

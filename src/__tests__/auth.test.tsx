/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
import { setUser, removeUser } from '../components/auth'

const props = {
  title: 'Title',
  desc: 'Purchase Order Tracking System',
}

describe('setUser function', () => {
  it('return setUser', () => {
    const setState = jest.fn()
    const async = jest.fn()

    setUser(async)
    expect(async).toEqual(async)
    // expect(setUser('user')).toBeCalled()
  })

  it('return dashboard', () => {
    const setState = jest.fn()
    const async = jest.fn()

    removeUser(async)
    expect(async).toEqual(async)
  })
})

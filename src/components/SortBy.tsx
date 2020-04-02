import React, { Fragment } from 'react'
import { Typography, Select } from 'antd'

const { Text } = Typography
const { Option } = Select

export interface ISortyBy {
  state?: any
  setState?: any
  sorts?: any
  title?: any
  sortby?: any
}

const SortBy = (props: ISortyBy) => {
  const { state, setState, sorts, sortby } = props
  const handleChange = (value: any, state: any, setState: any) => {
    setState({
      ...state,
      sortby: value,
    })
  }
  return (
    <Fragment>
      <div style={{ marginRight: '10px' }}>
        <Text>Sort By: </Text>
      </div>
      <div>
        <Select
          defaultValue={'status'}
          value={state.sortby}
          style={{ width: 200 }}
          onChange={(value: any) => {
            handleChange(value, state, setState)
          }}>
          {sorts.map((items: any) => (
            <Option value={items.value}>{items.desc}</Option>
          ))}
        </Select>
      </div>
    </Fragment>
  )
}

export default SortBy

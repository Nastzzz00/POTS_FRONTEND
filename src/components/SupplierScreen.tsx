import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import SupplierList from '../components/SupplierList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
const { Search } = Input

export interface ISupplierScreenProps {
  po?: any
}

const OrderScreen = (props: ISupplierScreenProps) => {
  const [state, setState] = useState({
    sortby: 'name',
    POdata: props.po,
  })

  const sorts = [
    {
      value: 'name',
      desc: 'Name',
    },

    {
      value: 'status',
      desc: 'Status',
    },
  ]
  return (
    <div className="content1orders">
      <div>
        <Divider orientation="left" dashed={true}>
          Supplier Master List
        </Divider>
      </div>
      <div className="searchandsort">
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
        <div className="sort">
          <SortBy state={state} setState={setState} sorts={sorts}></SortBy>
        </div>
      </div>
      <div className="masterlist">
        <SupplierList state={state} setState={setState}></SupplierList>
      </div>
    </div>
  )
}

export default OrderScreen

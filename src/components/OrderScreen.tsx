import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import MasterList from '../components/MasterList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
import { observer } from 'mobx-react'
const { Search } = Input

export interface IOrderScreenProps {
  po?: any
}

const OrderScreen = (props: IOrderScreenProps) => {
  const [state, setState] = useState({
    sortby: 'date',
    POdata: props.po,
  })

  console.log('Props', props.po)
  const sorts = [
    {
      value: 'date',
      desc: 'Date',
    },
    {
      value: 'supp',
      desc: 'Supplier',
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
          Masterlist
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
        <MasterList state={state} setState={setState}></MasterList>
      </div>
    </div>
  )
}

export default observer(OrderScreen)

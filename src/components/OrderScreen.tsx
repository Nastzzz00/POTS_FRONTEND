import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import MasterList from '../components/MasterList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
import { observer } from 'mobx-react'
import { sorts, SearchFilterOrder } from '../components/helper_functions'

const { Search } = Input
export interface IOrderScreenProps {
  po?: any
  state?: any
  setState?: any
  store?: any
  setQuery?: any
  userInfo?: any
  title?: any
  userLevel?: any
}

const OrderScreen = (props: IOrderScreenProps) => {
  const {
    store,
    setQuery,
    po,
    state: mainState,
    setState: mainSetState,
    userInfo,
    title,
    userLevel,
  } = props
  const [state, setState] = useState({
    sortby: 'date',
    POdata: po,
    status: 'Ready to Ship',
    datasource: [],
    search: '',
  })

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
            onSearch={value => {
              SearchFilterOrder(value, state.POdata, setState, state)
            }}
            enterButton
          />
        </div>
        <div className="sort">
          <SortBy state={state} setState={setState} sorts={sorts}></SortBy>
        </div>
      </div>
      <div className="masterlist">
        <MasterList
          userLevel={userLevel}
          userInfo={userInfo}
          store={store}
          setQuery={setQuery}
          filterPO={state.datasource}
          tabState={mainState}
          tabSetState={mainSetState}
          state={state}
          setState={setState}></MasterList>
      </div>
    </div>
  )
}

export default observer(OrderScreen)

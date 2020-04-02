import React, { Fragment, useState } from 'react'
import {
  Calendar,
  List,
  Typography,
  Card,
  Divider,
  Button,
  Drawer,
  Icon,
  Input,
} from 'antd'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroller'
import StatusItem from './StatusItem'
import { statusReport, poList } from '../data/mockData'
import { Segment } from 'semantic-ui-react'
import Avatar from '../components/Avatar'
export interface IDashboardContentProps {
  status?: any
  list?: any
  setStatelogout?: any
  statelogout?: any
  userLevel?: any
  title?: any
}

const DashboardContent = (props: IDashboardContentProps) => {
  const { setStatelogout, statelogout, userLevel, title } = props

  const format = 'YYYY-MM-DD'
  const { status, list } = props
  const [state, setState] = useState({
    visible: false,
    selectedDate: moment().format(format),
  })
  const { Title, Text } = Typography

  const filterbydate = list.filter(
    (x: any) =>
      moment(x.documentDate).format('MMMM D, YYYY') ==
      moment(state.selectedDate).format('MMMM D, YYYY'),
  )

  const onChange = (value: any) => {
    setState({
      ...state,
      selectedDate: value.format(format),
    })
  }

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    })
  }

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    })
  }

  return (
    <Fragment>
      <div className="content1">
        <div className="status">
          <div className="avatar">
            <div className="rows">
              <div>
                <Avatar />
              </div>
            </div>
          </div>
          <div className="banner">
            <div style={{ marginLeft: 20 }}>
              <Title
                level={4}
                style={{ margin: 0, paddingTop: '5px', color: '#3182CE' }}>
                Welcome Back, {statelogout.username}!
              </Title>
              <Text>Your last log-in was:</Text>
              <br></br>
              <Text>January 12, 2020 14:33 GST</Text>
              <br /> <br />
              <Text>Today is {moment().format()}</Text>
            </div>

            <Card
              style={{
                width: 300,
                borderColor: 'white',
                marginRight: 100,
              }}>
              <text style={{ marginLeft: 20 }}>
                Here are updates on our goodies
              </text>
              <div className="statusItem">
                <StatusItem status={statusReport} />
              </div>
            </Card>
          </div>
        </div>
        <div>
          <Divider orientation="left" dashed={true}>
            Order Calendar Summary
          </Divider>
        </div>

        <div className="calendar">
          <div className="calendar1">
            <Calendar
              fullscreen={false}
              onChange={onChange}
              // onPanelChange={value => console.log(value?._i, "VALUE")}
            />
          </div>
          <div className="list">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={() => console.log('LOAD MORE')}
              // hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}>
              <List
                itemLayout="horizontal"
                dataSource={filterbydate}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a> PO# {item.purchaseOrderNo}</a>}
                      description={
                        <div>
                          <Text>
                            Document Date:
                            {moment(item.documentDate).format('MMMM D, YYYY')}
                          </Text>
                        </div>
                      }
                    />

                    <List.Item>
                      <Button type="primary" onClick={showDrawer}>
                        View Order
                      </Button>
                    </List.Item>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
      {/* <div className="truck"></div> */}
      <div>
        <div className="content2">
          <h5>To-Do List</h5>
          <Text>
            {'\u25A0'} Remind supplier to update <br />
            delivery status via phone call
          </Text>
          <br />
          <Text>
            {'\u25A0'} Create a presentation of <br />
            weekly delivery status
          </Text>
          <br />
          <Text delete>
            {'\u25A0'} Send email to partners <br />
          </Text>
          <br />
        </div>
        <div className="content3">
          <h5>Reminders</h5>
          <Text>
            {'\u25A0'} Meeting with OPs 10am,
            <br />
            March 3, 2020
          </Text>
          <br />
          <Text>
            {'\u25A0'} Innaguration of new ware- <br />
            house facility, March 10, 2020
          </Text>
        </div>
        <div className="content4">
          <Button type="link" icon="plus">
            <Text> Add widget</Text>
          </Button>
        </div>
      </div>

      <Drawer
        title="Purchase Order Details"
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}>
        <p>Some Purchase Order Details...</p>
        <p>Some Purchase Order Details...</p>
        <p>Some Purchase Order Details...</p>
      </Drawer>
    </Fragment>
  )
}

export default DashboardContent

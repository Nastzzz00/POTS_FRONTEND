import React, { Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import DatePicker from './Calendar'
import PoStatus from './PoStatus'
import StatusReportList from './Status'
import { Calendar, List, Avatar, Typography, Card, Divider, Button } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import StatusItem from './StatusItem'
import { statusReport, poList } from '../data/mockData'

export interface IDashboardContentProps {
  status?: any
  list?: any
}

const DashboardContent = (props: IDashboardContentProps) => {
  const { status, list } = props
  const { Title, Text } = Typography
  const data = [
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
    {
      title: 'Order # 321223353',
    },
  ]

  const load = () => {
    return console.log('LOAD')
  }
  return (
    <Fragment>
      <div className="content1">
        <div className="status">
          <div className="avatar">
            <div className="rows">
              <div>
                <Avatar
                  size={100}
                  icon="user"
                  style={{
                    backgroundColor: '#3182CE',
                    color: '#63B3ED',
                    marginRight: '10px',
                  }}
                />
              </div>
              <div>
                <Title
                  level={2}
                  style={{ margin: 0, paddingTop: '5px', color: '#3182CE' }}>
                  Welcome Back, Admin!
                </Title>
                <Text>Tour last log-in was:</Text>
                <br></br>
                <Text>January 12, 2020 14:33 GST</Text>
              </div>
            </div>
            <div>
              <Text style={{ float: 'right' }}>
                Today is 02/30/2020 0839 +GST
              </Text>
            </div>
          </div>
          <div>
            <Divider orientation="left" dashed={true}>
              Recent Updates
            </Divider>
          </div>

          <div className="banner">
            <Card
              style={{
                width: 300,
                borderColor: 'white',
                marginRight: 100,
              }}>
              <div style={{}}>
                <text style={{ marginLeft: 0 }}>
                  Here are updates on our goodies
                </text>
                <div className="statusItem">
                  <StatusItem status={statusReport} />
                </div>
              </div>
            </Card>
          </div>
          {/* <div className="statuslist">
            <Card
              style={{
                width: 300,
                borderColor: "white",
                marginRight: 100
              }}
            >
              <div style={{}}>
                <text style={{ marginLeft: 0 }}>
                  Here are updates on our goodies
                </text>
                <div className="statusItem">
                  <StatusItem status={statusReport} />
                </div>
              </div>
            </Card>
          </div> */}
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
              onPanelChange={value => console.log(value, 'MODE')}
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
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Status: Some status"
                    />

                    <List.Item>
                      <Button type="primary">View Order</Button>
                    </List.Item>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>

      {/* <div className="truck"></div> */}
      <div className="content2">WIDGETS HERE</div>
    </Fragment>
  )
}

export default DashboardContent

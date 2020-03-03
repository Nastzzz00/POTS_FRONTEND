import React, { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import {
  Table,
  Collapse,
  List,
  Card,
  Tag,
  Typography,
  Descriptions,
  Button,
} from 'antd'
const { Panel } = Collapse
const { Text, Title } = Typography

export interface ISortyBy {
  state: any
  setState: any
  po?: any
}

const SupplierList = (props: ISortyBy) => {
  const { state, setState } = props

  const data2 = [
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

  return (
    <Fragment>
      <Collapse
        defaultActiveKey={['0']}
        // onChange={callback}
        // expandIconPosition={expandIconPosition}
      >
        {state.POdata.map((data: any, index: any) => {
          return (
            <Panel
              header={`${data.supplier.name}`}
              key={index}
              //   extra={<Tag color={data.color}>{data.status}</Tag>}
            >
              <div className="panel">
                <div className="orderitemtable">
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={() => console.log('LOAD MORE')}
                    // hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}>
                    <Descriptions
                      title="General Details"
                      bordered
                      style={{ width: 700 }}>
                      <Descriptions.Item label="Supplier" span={3}>
                        {data.supplier.name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Contact Person" span={2}>
                        Chester Bennington
                      </Descriptions.Item>
                      <Descriptions.Item label="Contact Number" span={2}>
                        Tel: 728-85-23/ Fax: 12334-232-1
                      </Descriptions.Item>
                      <Descriptions.Item label="TIN" span={3}>
                        000-123-123-0000
                      </Descriptions.Item>

                      <Descriptions.Item label="Address">
                        {data.supplier.address.building_name}{' '}
                        {data.supplier.address.street}{' '}
                        {data.supplier.address.city}{' '}
                        {data.supplier.address.zip_code} <br />
                        {data.supplier.address.city}{' '}
                        {data.supplier.address.state}{' '}
                      </Descriptions.Item>
                    </Descriptions>
                  </InfiniteScroll>

                  <Button style={{ margin: '10px' }} type="primary">
                    Modify Supplier Details
                  </Button>
                </div>
                <div className="history">
                  <Card
                    title="Transaction History"
                    bordered={true}
                    bodyStyle={{ width: 300, height: 270, overflow: 'auto' }}>
                    <InfiniteScroll
                      initialLoad={false}
                      pageStart={0}
                      loadMore={() => console.log('LOAD MORE')}
                      // hasMore={!this.state.loading && this.state.hasMore}
                      useWindow={false}>
                      <List
                        itemLayout="horizontal"
                        dataSource={data2}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description="Status: Some status"
                            />

                            <List.Item>
                              <Button type="primary">View Order</Button>
                            </List.Item>
                          </List.Item>
                        )}
                      />
                    </InfiniteScroll>
                  </Card>
                </div>
              </div>
            </Panel>
          )
        })}
      </Collapse>
    </Fragment>
  )
}

export default SupplierList

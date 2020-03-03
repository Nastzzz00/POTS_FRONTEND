import React, { useState } from 'react'

import { Layout, Menu, Icon } from 'antd'
import { handleClick, showContent } from '../components/helper_functions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Input, Card, Alert, Button } from 'antd'
import Login from '../components/LoginScreen'

const { Header, Content, Footer, Sider } = Layout
export interface ILayout {
  DBcontent?: any
  POcontent?: any
  SUPcontent?: any
  HeaderContent?: any
}

const App = (props: ILayout) => {
  const { DBcontent, POcontent, SUPcontent, HeaderContent } = props
  const [state, setState] = useState({
    currentKey: 'order',
    path: '/',
  })

  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Login state={state} setState={setState}></Login>,
    },
    {
      path: '/Dash',
      exact: true,
      main: () => DBcontent,
    },
    {
      path: '/Orders',
      exact: true,
      main: () => POcontent,
    },
    {
      path: '/Suppliers',
      exact: true,
      main: () => SUPcontent,
    },
  ]

  return (
    <Router>
      <Layout>
        {state.path != '/' && (
          <Sider
            style={{ backgroundColor: 'white' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type)
            }}>
            <div className="logo" />

            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              onClick={e => handleClick(e.key, state, setState)}>
              <Menu.Item key="dashboard">
                <Icon type="dashboard" />
                <span className="nav-text">My Dashboard</span>
              </Menu.Item>
              <Menu.Item key="order">
                <Icon type="shopping-cart" />
                <span className="nav-text">My Orders</span>
              </Menu.Item>
              <Menu.Item key="supplier">
                <Icon type="car" />
                <span className="nav-text">My Suppliers</span>
              </Menu.Item>
            </Menu>
          </Sider>
        )}
        <Layout>
          {/* <Header style={{ background: "#fff", padding: 0, marginBottom: 20 }}>
          {HeaderContent}
        </Header> */}
          <Content
            style={{
              display: 'flex',
              backgroundColor: 'white',
              padding: '30px',
              flexFlow: 'row wrap',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Redirect push to={state.path}></Redirect>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}></Route>
            ))}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Purchase Order Tracking System ©2020 Created by Fast Track
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App

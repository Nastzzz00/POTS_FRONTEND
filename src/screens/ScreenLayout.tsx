import React, { useState } from "react";

import { Layout, Menu, Icon } from "antd";
import { handleClick, showContent } from "../components/helper_functions";

const { Header, Content, Footer, Sider } = Layout;
export interface ILayout {
  DBcontent?: any;
  POcontent?: any;
  SUPcontent?: any;
  HeaderContent?: any;
}
const App = (props: ILayout) => {
  const { DBcontent, POcontent, SUPcontent, HeaderContent } = props;
  const [state, setState] = useState({
    currentKey: "dashboard"
  });

  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "white" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          onClick={e => handleClick(e.key, state, setState)}
        >
          <Menu.Item key="dashboard">
            <Icon type="user" />
            <span className="nav-text">My Dashboard</span>
          </Menu.Item>
          <Menu.Item key="order">
            <Icon type="video-camera" />
            <span className="nav-text">My Orders</span>
          </Menu.Item>
          <Menu.Item key="supplier">
            <Icon type="upload" />
            <span className="nav-text">My Suppliers</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header style={{ background: "#fff", padding: 0, marginBottom: 20 }}>
          {HeaderContent}
        </Header> */}
        <Content
          style={{
            display: "flex",
            backgroundColor: "#E2E8F0",
            padding: "30px",
            flexFlow: "row wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          {showContent(state.currentKey, DBcontent, POcontent, SUPcontent)}
          {/* <div className="content1">
            <div className="status"> STATUS</div>
            <div className="calendar">CALENDAR</div>
          </div>
          <div className="content2">CONTENT2</div> */}

          {/* <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {showContent(state.currentKey, DBcontent, POcontent, SUPcontent)}
          </div> */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Purchase Order Tracking System ©2020 Created by Fast Track
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

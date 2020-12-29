import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  BankOutlined,
  StockOutlined,
  FileOutlined,
  TeamOutlined,
  BarChartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import CurrencyConverter from "./CurrencyConverter";
import Ert from "./Ert";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [value, onChange] = useState(new Date());

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed((prev) => !prev)}
      >
        <div className="logo">
          <p className="ert">
            <BarChartOutlined style={{ fontSize: "60px" }} />
            <span>ert</span>
          </p>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<StockOutlined />}>
            Kursy walut
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<BankOutlined style={{ fontSize: "20px" }} />}
          >
            Kalkulator walutowy
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<DollarOutlined style={{ fontSize: "20px" }} />}
            title="Waluty"
          >
            <Menu.Item key="3">EUR</Menu.Item>
            <Menu.Item key="4">USD</Menu.Item>
            <Menu.Item key="5">GBP</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Calendar
              onChange={onChange}
              value={value}
              onClickDay={(value, event) => console.log("Clicked day: ", value)}
            />
            <CurrencyConverter />
            <Ert />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ERT - Exchange Rate Table / Ant Design ©2020
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;

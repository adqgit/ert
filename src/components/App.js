import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
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
// import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import CurrencyConverter from "./CurrencyConverter";
import Ert from "./Ert";
import EUR from "./EUR";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [ert, setErt] = useState("", []);

  // const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log("uruchomienie useEffect");
    if (ert === "") {
      console.log("ert - uruchomienie if");
      const url = `https://api.nbp.pl/api/exchangerates/tables/a/last/5/`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          setErt(data);
        })
        .catch((error) => console.log(error, "Ooops coś poszło nie tak..."));

      // fetch(url)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setErt(data);
      //   })
      //   .catch((e) => console.log("Connection error", e));
    }
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {console.log("render App")}
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={!collapsed}
          onCollapse={() => setCollapsed((prev) => !prev)}
          // collapsedWidth={0}
          zeroWidthTriggerStyle={{
            height: "50px",
            "border-top-right-radius": "10px",
            "border-bottom-right-radius": "10px",
            top: "90vh",
            "background-color": "#001529",
            position: "-webkit-sticky",
          }}
          // style={{ position: "absolute", height: "100vh", "z-index": "200" }}
        >
          <div className="logo">
            <NavLink to="/">
              <p className="ert">
                <BarChartOutlined style={{ fontSize: "60px" }} />
                <span>ert</span>
              </p>
            </NavLink>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<StockOutlined />}>
              <NavLink exact to="/">
                Kursy walut
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<BankOutlined style={{ fontSize: "20px" }} />}
            >
              <NavLink to="/CurrencyConverter">Kalkulator walutowy</NavLink>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<DollarOutlined style={{ fontSize: "20px" }} />}
              title="Waluty"
            >
              <Menu.Item key="3">
                <NavLink to="/EUR"> EUR </NavLink>
              </Menu.Item>
              <Menu.Item key="4">USD</Menu.Item>
              <Menu.Item key="5">GBP</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item
              key="9"
              icon={<FileOutlined />}
              onClick={() => console.log(ert)}
            >
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
              {ert === "" ? (
                <LoadingOutlined style={{ fontSize: 24 }} spin />
              ) : (
                <Route exact path="/" render={() => <Ert ert={ert} />} />
              )}
              <Route
                path="/CurrencyConverter"
                render={() => <CurrencyConverter ert={ert} />}
              />
              <Route path="/EUR" component={EUR} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ERT - Exchange Rate Table / Ant Design ©2020
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Signin from './Components/Signin';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);  
  };

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <BrowserRouter>
            <Switch>
              <PublicRoute component={Home} path="/" exact restricted={false} />
              <PrivateRoute component={Dashboard} path="/dashboard" exact />
              <PublicRoute exact component={Signin} path="/signin" restricted />
            </Switch>
          </BrowserRouter>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

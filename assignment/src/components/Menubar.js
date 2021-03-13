import React, {useState} from 'react'
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

// const { SubMenu } = Menu;

  const MenuBar = () =>{
  

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };

    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            To Do
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
           In Progress
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
           Done
          </Menu.Item>
        </Menu>
      </div>
    );
}

export default MenuBar;
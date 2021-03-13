import { Layout, Menu, Button, Modal } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import TaskForm from "./TaskForm";
import CardComponent from "./cardComponent";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const LayoutComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[taskNow,createTaskNow]=useState({})

  const showTask = (task) => {
    console.log(task);
    createTaskNow(task)
    console.log(taskNow)
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
          <h1>Welcome User</h1>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Main">
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">To Do</Menu.Item>
                <Menu.Item key="3">In Progress</Menu.Item>
                <Menu.Item key="4">Done</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Button onClick={showModal}>Add Task</Button>
            <Modal
              title="Create Task"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <TaskForm showTask={showTask}></TaskForm>
            </Modal>
            <CardComponent taskNow={taskNow}></CardComponent>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Assignment Attempt By @Raktim C Bhowmick
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;

import { Layout, Typography } from "antd";
import { Routes, Route } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import FormComponent from "./FormComponent";
import ModalComponent from "./ModalComponent";
import SideNavMenu from "./SideNavMenu";
import TableComponent from "./TableComponent";
import TabComponent from "./TabsComponent";
import TreeComponent from "./TreeComponent";

const { Header, Sider, Content } = Layout;

function AppLayout() {
  return (
    <>
      <Layout>
        <Sider>
            <Typography.Title level={4} className="white-text logo">
                 Ant Components
            </Typography.Title>
            <SideNavMenu />
        </Sider>
        <Layout>
          <Header>
          </Header>
          <Content className="content">
              <Routes>
                  <Route path="/table" element={<TableComponent />}/>
                  <Route path="/tree" element={<TreeComponent />}/>
                  <Route path="/tab" element={<TabComponent />}/>
                  <Route path="/drawer" element={<DrawerComponent />}/>
                  <Route path="/modal" element={<ModalComponent />}/>
                  <Route path="/" element={<FormComponent />} />
              </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default AppLayout;

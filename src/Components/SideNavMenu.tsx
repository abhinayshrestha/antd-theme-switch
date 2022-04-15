import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function SideNavMenu() {
  return (
    <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
      <Menu.Item key="1">
        <Link to="/">Form</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/table">Table</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/tree">Tree</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/tab">Tab</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/drawer">Drawer</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/modal">Modal</Link>
      </Menu.Item>
    </Menu>
  );
}

export default SideNavMenu;

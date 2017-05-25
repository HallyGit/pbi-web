import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { get } from 'lodash';
import { Menu,Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import './sidebar.css'

@connect(
  state => ({
    router: get(state, 'routing.locationBeforeTransitions'),
  })
)
export default class Sidebar extends Component {

  render() {
    const {
      router
    } = this.props;

    return (
      <div className="sidebar">
        <div className="padding-md text-center selectness border-normal">
          <h1 className="sidebar-title">PBI</h1>
        </div>

        <Menu
          theme="light"
          selectedKeys={[`${get(router, 'pathname')}`]}
          mode="inline"
          className="padding-top-lg"
        >
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>My Applaction</span></span>}>
            {/*<Menu.Item key="/">
              <Link to="/">开始</Link>
            </Menu.Item>
            <Menu.Item key="/webpack">
              <Link to="/webpack">关于 Webpack</Link>
            </Menu.Item>
            <Menu.Item key="/component">
              <Link to="/component">关于 Component</Link>
            </Menu.Item>
            <Menu.Item key="/router">
              <Link to="/router">关于 Router</Link>
            </Menu.Item>
            <Menu.Item key="/antd">
              <Link to="/antd">关于 Antd</Link>
            </Menu.Item>*/}
             <Menu.Item key="/dupdutree">
              <Link to="/dupdutree">Tree</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>;
      </div>
    );
  }
}

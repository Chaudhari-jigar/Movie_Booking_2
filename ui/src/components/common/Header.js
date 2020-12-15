import React,{useState} from 'react';
// import {Navbar,Nav, Card,Tab} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Logo from '../../Movie_logo/logo1.png'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined
} from '@ant-design/icons';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

    const SiderDemo = (props) => {
        const[collapsed,setCollapsed] = useState(false);
        const toggle = () => {
          setCollapsed(!collapsed);
        };
    
    return (
      <Layout style={{minHeight:"100vh"}}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo"><img src={Logo} style={{height: "60px",width: "60px",marginLeft:"05px"}}/></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="State">
              <Menu.Item key="/state"><Link to="/state">State</Link></Menu.Item>
              <Menu.Item key="/state/stateAdd"><Link to="/state/stateAdd">Add State</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="City">
              <Menu.Item key="/city"><Link to="/city">City</Link></Menu.Item>
              <Menu.Item key="/city/cityAdd"><Link to="/city/cityAdd">Add City</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="movie">
              <Menu.Item key="/movie"><Link to="/movie">movie</Link></Menu.Item>
              <Menu.Item key="/movie/movieAdd"><Link to="/movie/movieAdd">Add movie</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
       
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,color: "white" }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,color:"red"
            })}
          </Header>
            {props.content}
        </Layout>
      </Layout>
    );
}

export default SiderDemo;
import React from 'react';
import { Switch, Route } from 'react-router'
import Dashboard from './components/TheaterPanel/dashboard';
import AddScreen from './components/TheaterPanel/addScreen';
import ScreenList from './components/TheaterPanel/screenList';
import HeaderTheater from './components/common/HeaderTheater';
import { Layout } from 'antd';

const TheaterTask = () => {
    const { Content } = Layout;

    let content = <Content
        className="site-layout-background"
        style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        }}
        >
        <Switch>
            <Route path="/theater/dashboard" exact component={Dashboard} />
            
            <Route path="/theater/addScreen" exact component={AddScreen} />
            <Route path="/theater/screenList" exact component={ScreenList} />
        </Switch>
    </Content>

    return <>
        <HeaderTheater content={content}/>
    </>
}

export default TheaterTask;
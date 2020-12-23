import React from 'react';
import { Switch, Route } from 'react-router'
import Temp1 from './components/All Registration form/Temp1';
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
            <Route path="/theater/dashboard" exact component={Temp1} />
        </Switch>
    </Content>

    return <>
        <HeaderTheater content={content}/>
    </>
}

export default TheaterTask;
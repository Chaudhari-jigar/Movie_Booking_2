import React from 'react';
import { Switch, Route } from 'react-router'
import StateList from './components/State_All_Form/stateList';
import StateAddForm from './components/State_All_Form/addForm';
import CityAddForm from './components/City_All_Form/addForm';
import Header from './components/common/Header';
import cityList from './components/City_All_Form/cityList';
const StateTask = (props) => {
    return <>
        <Header />
        <div>
            <Switch>
                <Route path="/state" exact component={StateList}/>
                <Route path="/state/stateAdd" exact component={StateAddForm}/>
                <Route path="/city/cityAdd" exact component={CityAddForm}/>
                <Route path="/city" exact component={cityList}/>
            </Switch>
        </div>
    </>
}

export default StateTask
import React,{Component} from 'react';
import {HashRouter as Router,Route,NavLink} from 'react-router-dom';
import './index.less';

import Home from "../Home/home";
import Market from "../Market/index";
import Mine from "../Mine/index";
import Tab from "../../components/Tab/index";
import Member from "../Member/index";
export default class App extends Component{

    render(){
        return (
            <Router>
                <div className="">
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/member" component={Member}/>
                    <Route path="/market" component={Market}/>
                    <Route path="/mine" component={Mine}/>
                    <Tab/>
                </div>

                </div>
            </Router>

        )
    }
}
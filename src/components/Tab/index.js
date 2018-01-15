import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
export default class Tab extends Component{
    render(){
        return (
            <div>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/member">会员</NavLink>
                <NavLink to="/market">购物车</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </div>
        )
    }
}
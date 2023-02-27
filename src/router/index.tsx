import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { pageUrl } from '../config/name';
import Home from '../pages/home'
import List from '../pages/list'
import Login from '../pages/login';

const Routers = () => {
    return (<Routes>
            <Route path={pageUrl.login} element={<Login/>} ></Route>
            <Route path={pageUrl.list} element={<List/>} ></Route>
            <Route path={pageUrl.home} element={<Home/>} ></Route>
        </Routes>)
};

export default Routers
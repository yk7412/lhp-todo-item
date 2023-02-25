import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { pageUrl } from '../config/name';
import Home from '../pages/home'
import List from '../pages/list'

const Routers = () => {
    return (<Routes>
            <Route path={pageUrl.list} element={<List/>} ></Route>
            <Route path={pageUrl.home} element={<Home/>} ></Route>
        </Routes>)
};

export default Routers
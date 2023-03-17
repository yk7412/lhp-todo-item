import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { pageUrl } from '../config/name';
import Home from '../pages/home'
import List from '../pages/list'
import ListCreate from '../pages/list/create';
import Login from '../pages/login';
import NoPage from '../pages/noPage';

const Routers = (props) => {
    console.log(props,'routerprops')
    return (<Routes>
            {/* <Route path={pageUrl.login} element={<Login/>} ></Route> */}
            <Route path={pageUrl.list} element={<List {...props} />} ></Route>
            <Route path={pageUrl.home} element={<Home {...props} />} ></Route>
            <Route path={pageUrl.listCreate} element={<ListCreate {...props} />} ></Route>
            <Route path={'*'} element={<NoPage/>} ></Route>
        </Routes>)
};

export default Routers
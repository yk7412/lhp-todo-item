import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { pageUrl } from '../config/name';
import Home from '../pages/home'
import List from '../pages/list'
import Case from '../pages/case'
import ListCreate from '../pages/list/create';
import Login from '../pages/login';
import Register from '../pages/register';
import NoPage from '../pages/noPage';

const Routers = (props) => {
    return (<Routes>
            <Route path={pageUrl.case} element={<Case {...props} />} ></Route>
            <Route path={pageUrl.list} element={<List {...props} />} ></Route>
            <Route path={pageUrl.home} element={<Home {...props} />} ></Route>
            <Route path={pageUrl.listCreate} element={<ListCreate {...props} />} ></Route>
            <Route path={'*'} element={<NoPage/>} ></Route>
        </Routes>)
};

export default Routers
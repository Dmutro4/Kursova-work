import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {mainRouter} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {mainRouter.map( x =>
                <Route key={x.path} path={x.path} element={x.Component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;
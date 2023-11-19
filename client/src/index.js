import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import UserStore from "./store/userStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <React.StrictMode>
            <BrowserRouter>
                <NavBar/>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Context.Provider>
);

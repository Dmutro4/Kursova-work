import React, {useContext, useState} from 'react';
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import '../css/Auth.css'
import axios from "axios";
import {Context} from "../index";

const AuthPage = observer(() => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    const {user} = useContext(Context)

    const authClick = async () => {
        try {
            if (isLogin) {
                axios.post('http://localhost:2222/api/v1/auth/login', {username, password},{withCredentials: true}).then(res => {
                    if (res.status === 201) {
                        user.setUser(res.data)
                        window.location.href = '/';
                    }
                }).catch(error => {
                    // Обработка ошибок
                    console.error('Помилка при авторизації:', error);
                });
            } else {
                axios.post('http://localhost:2222/api/v1/auth/registration', {username, password},{withCredentials: true}).then(res => {
                    if (res.status === 201) {
                        user.setUser(res.data)
                        window.location.href = '/';
                    }
                }).catch(error => {
                    // Обработка ошибок
                    console.error('Помилка при реєстрації:', error);
                });

            }
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <div style={{height: '100vh'}}>
            <div className="login-form">
                <h2>{isLogin ? "Авторизація" : "Реєстрація"}</h2>
                <form>
                    <div className="login-form-group">
                        <label htmlFor="username">Електронна адреса</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username"
                               name="username"/>
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Пароль</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                               id="password" name="password"/>
                    </div>
                    {isLogin ?
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            Немаєте аккаунту?<a style={{marginTop: 0, color: "#4b5c93"}}
                                                href={"/registration"}>Зареєструватися</a>
                        </div>
                        :
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            Вже маєте аккаунт?<a style={{marginTop: 0, color: "#4b5c93"}} href={"/login"}>Увійти</a>
                        </div>
                    }
                    <button onClick={authClick} type="submit">Enter</button>
                </form>
            </div>
        </div>
    );
});

export default AuthPage;
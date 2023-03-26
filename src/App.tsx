import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {Main} from "./components/Main/Main";
import {LoginLink} from "./components/layout/LoginLink";
import {UserContext} from './context/user.context';

function App() {
    const [user, setUser] = useState({id: '', nick: ''});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <div className="App">
                <LoginLink/>
                <Header/>
                <Main/>
            </div>
        </UserContext.Provider>
    );
}

export default App;

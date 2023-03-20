import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {Main} from "./components/Main/Main";
import {LoginLink} from "./components/layout/LoginLink";
import {NickContext} from './context/nick.context';

function App() {
    const [nick, setNick] = useState('');
    return (
        <NickContext.Provider value={{nick, setNick}}>
            <div className="App">
                <LoginLink/>
                <Header/>
                <Main/>
            </div>
        </NickContext.Provider>
    );
}

export default App;

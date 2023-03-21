import React from "react";
import {Divid} from "../Tasks/Divid";
import {Add} from "../Tasks/Add";
import {Sub} from "../Tasks/Sub";
import {Mult} from "../Tasks/Mult";
import {Route, Routes} from "react-router-dom";
import {Results} from "../layout/Results";
import {Login} from "../layout/Login";
import {Register} from "../layout/Register";
import {Home} from "../layout/Home";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/reg" element={<Register/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/sub" element={<Sub/>}/>
            <Route path="/mult" element={<Mult/>}/>
            <Route path="/divid" element={<Divid/>}/>
            <Route path="/res" element={<Results/>}/>
        </Routes>
    )
}
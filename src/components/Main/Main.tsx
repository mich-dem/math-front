import React from "react";
import {Divid} from "../Tasks/Divid";
import {Add} from "../Tasks/Add";
import {Sub} from "../Tasks/Sub";
import {Mult} from "../Tasks/Mult";
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Add/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/sub" element={<Sub/>}/>
            <Route path="/mult" element={<Mult/>}/>
            <Route path="/divid" element={<Divid/>}/>
        </Routes>
    )
}
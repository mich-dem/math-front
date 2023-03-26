import {createContext} from "react";

export const UserContext = createContext({
    user: {nick: '', id: ''},
    setUser: (s: {
        id: string,
        nick: string
    }) => {
    },
});
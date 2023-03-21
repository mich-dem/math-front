import {createContext} from "react";

export const NickContext = createContext({
    nick: '',
    setNick: (s: string) => {
    },
});
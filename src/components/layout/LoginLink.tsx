import {useContext} from "react";
import {Link} from "react-router-dom";
import {NickContext} from "../../context/nick.context";
import "./LoginLink.css"

export const LoginLink = () => {
    const {nick, setNick} = useContext(NickContext);
    const logout = () => {
        setNick('')
    }
    if (nick === '') {
        return (
            <div className="link-div">
                <p><Link to="login">Zaloguj się</Link> lub <Link to="reg">Zarejestruj się</Link></p>
            </div>
        )
    } else {
        return (
            <div className="link-div">
                <p>Jesteś zalogowany jako <Link to="login"><b>{nick}</b></Link>. <a onClick={logout}>Wyloguj się</a></p>
            </div>
        )
    }
}
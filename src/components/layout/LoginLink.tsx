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
                <p>Wróć na <Link to="/">stronę główną, </Link><Link to="login">zaloguj się</Link> lub <Link to="reg">zarejestruj
                    się</Link></p>
            </div>
        )
    } else {
        return (
            <div className="link-div">
                <p>Jesteś zalogowany jako <Link to="login"><b>{nick}</b></Link>. Wróć na <Link to="/">Stronę
                    główną</Link> Gdy skończysz, <a onClick={logout}>wyloguj się</a></p>
            </div>
        )
    }
}
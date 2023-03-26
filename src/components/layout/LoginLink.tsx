import {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../context/user.context";
import "./LoginLink.css"

export const LoginLink = () => {
    const {user, setUser} = useContext(UserContext);
    const logout = () => {
        setUser({id: '', nick: ''})
    }
    if (user.nick === '') {
        return (
            <div className="link-div">
                <p>Wróć na <Link to="/">stronę główną, </Link><Link to="login">zaloguj się</Link> lub <Link to="reg">zarejestruj
                    się</Link></p>
            </div>
        )
    } else {
        return (
            <div className="link-div">
                <p>Jesteś zalogowany jako <Link to="login"><b>{user.nick}</b></Link>. Wróć na <Link to="/">Stronę
                    główną</Link> Gdy skończysz, <a onClick={logout}>wyloguj się</a></p>
            </div>
        )
    }
}
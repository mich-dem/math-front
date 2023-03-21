import {useContext} from "react";
import {NickContext} from "../../context/nick.context";

export const Home = () => {

    const {nick} = useContext(NickContext);

    return (
        <div className='home'>
            <h1>Witaj {nick} na stronie matematycznej!</h1>
            <p>Tutaj będziesz mógł sprawdzić swoje umiejętności arytmetyczne.</p>
            <p>Możesz bawić się anonimowo i zdobywać punkty, ale po przejściu na inną stronę, wszystko stracisz. Jeśli
                nie chcesz, aby punkty przepadły, możesz się zarejestrować. Gdy będziesz zalogowany, Twoje punkty będą
                zapamiętywane.</p>
            <p>Gdy klikniesz w swój nick, będziesz mógł sprawdzić, ile punktów w każdej kategorii zdobyłeś.</p>
            <p>Jeśli klikniesz w zakładkę wyniki, zobaczysz listę wszystkich zarejestrowanych zawodników. Klikając znak
                działania - możesz zobaczyć rankingi w każdej kategorii. </p>
            <p>Miłej zabawy!</p>
        </div>
    )
}
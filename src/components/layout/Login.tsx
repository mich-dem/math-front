import {SyntheticEvent, useContext, useState} from "react";
import {NickContext} from "../../context/nick.context";
import {MathTaskRes} from "types";
import "./Login.css";

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [errMess, setErrMess] = useState('');
    const [points, setPoints] = useState({add: 0, sub: 0, mul: 0, div: 0});
    const {nick, setNick} = useContext(NickContext);
    const [tab, setTab] = useState(false);
    const [form, setForm] = useState({
        nick: '',
        pass: '',
    });

    const downLoadPoints = async (): Promise<MathTaskRes> => {
        const res = await fetch(`http://localhost:3001/math/res/${nick}`);
        const data = await res.json();
        setPoints(data);
        setTab(true);
        return data;
    }

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setCheck(true);
        try {
            const res = await fetch("http://localhost:3001/math/log", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.message) {
                setCheck(true);
                setErrMess(data.message);
            } else if (data) {
                setNick(form.nick);
                setCheck(false);
                setForm({
                    nick: '',
                    pass: '',
                });
            } else {
                setCheck(true);
                setErrMess('Logowanie nie powiodło się. Przypomnij sobie hasło i spróbuj ponownie.');
            }
        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    if (loading) {
        return <h2>Logujesz się...</h2>;
    }
    if (nick !== '') {
        return (
            <div>
                <h2>Witaj, {nick}!</h2>
                <p>Jesteś zalogowany. Możesz zbierać punkty.</p>
                <button onClick={downLoadPoints} style={{display: tab ? 'none' : ''}}>Pokaż wyniki</button>
                <div style={{display: tab ? '' : 'none'}}>
                    <p>Twoje wyniki:</p>
                    <table className="user-res">
                        <tbody>
                        <tr>
                            <td className="lt">Dodawanie:</td>
                            <td className="rt">{points.add}</td>
                        </tr>
                        <tr>
                            <td className="lt">Odejmowanie:</td>
                            <td className="rt">{points.sub}</td>
                        </tr>
                        <tr>
                            <td className="lt">Mnożenie:</td>
                            <td className="rt">{points.mul}</td>
                        </tr>
                        <tr>
                            <td className="lt">Dzielenie:</td>
                            <td className="rt">{points.div}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    } else {
        return (
            <div>
                <form action="" className="add-form" onSubmit={sendForm}>
                    <h1>Zaloguj się</h1>
                    <p
                        className='err'
                        style={{display: check ? '' : 'none'}}
                    >{errMess}</p>
                    <label>
                        Nick: <br/>
                        <input
                            type="text"
                            name='nick'
                            required
                            maxLength={12}
                            value={form.nick}
                            onChange={e => updateForm('nick', e.target.value)}
                        />
                    </label>
                    <label>
                        Hasło: <br/>
                        <input
                            type="password"
                            name='pass'
                            required
                            maxLength={36}
                            value={form.pass}
                            autoComplete='on'
                            onChange={e => updateForm('pass', e.target.value)}
                        />
                    </label>
                    <button>Zaloguj się</button>

                </form>
            </div>
        )
    }
}
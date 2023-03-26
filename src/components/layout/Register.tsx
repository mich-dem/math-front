import {SyntheticEvent, useContext, useState} from "react";
import {UserContext} from "../../context/user.context";

export const Register = () => {
    const {user, setUser} = useContext(UserContext);
    const [mess, setMess] = useState('');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nick: '',
        pass: '',
    });

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        setMess('');
        try {
            const res = await fetch("http://localhost:3001/math", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            const {message} = data;
            if (message) {
                setMess(message);
            } else {
                setUser({id: '', nick: data.nick});
                setForm({
                    nick: '',
                    pass: '',
                });
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
        return <h2>Rejestrujesz się...</h2>;
    }
    if (user.nick !== '') {
        return (
            <>
                <h2>Witaj, {user.nick}!</h2>
                <p>Zarejestestrowałeś się pomyślnie. Jesteś zalogowany. Możesz zbierać punkty.</p>
            </>
        )
    } else {
        return (
            <div>
                <form action="" className="add-form" onSubmit={sendForm}>
                    <h1>Zarejestruj się</h1>
                    <p
                        className='err'
                        style={{display: mess ? '' : 'none'}}
                    >{mess}</p>
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
                            minLength={8}
                            maxLength={36}
                            autoComplete='on'
                            value={form.pass}
                            onChange={e => updateForm('pass', e.target.value)}
                        />
                    </label>
                    <button>Wyślij</button>
                </form>
            </div>
        )
    }
}
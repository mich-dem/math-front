import React, {SyntheticEvent, useContext, useState} from "react";
import {randSub} from "../../util/Random/rand.sub";
import {nullAns} from "../../util/NullAns";
import {nullInp} from "../../util/NullInp";
import {countSub} from "../../util/Count/countSub";
import {UserContext} from "../../context/user.context";

export const Sub = () => {
    const {user} = useContext(UserContext);
    const {id, nick} = user;

    const updateForm = (key: string, value: number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    const downLoadPoints = async () => {
        const res = await fetch(`http://localhost:3001/math/res/${nick}`);
        const data = await res.json();
        const {sub} = data;
        setPoint(sub);
    }
    const changeDb = async () => {
        const res = await fetch(`http://localhost:3001/math/plus/${nick}/sub/${countSub(data, [form.inp1, form.inp2, form.inp3, form.inp4, form.inp5])}`);
        const dt = await res.json();
        if (dt) {
            await downLoadPoints();
        }
    }

    const [data, setData] = useState(randSub(10, 90));

    const [ans, setAns] = useState(nullAns);

    const [form, setForm] = useState(nullInp);
    const [point, setPoint] = useState(0);

    const [roundPoint, setRoundPoint] = useState(0);

    const [vis, setVis] = useState('none');

    const newData = () => {
        setForm(nullInp);
        setAns(nullAns);
        setData(randSub(10, 90));
        setVis('none');
    }
    const checkSub = (e: SyntheticEvent) => {
        e.preventDefault();

        setAns({
            ans1: data[1] - data[0] === form.inp1 ? 'lightgreen' : 'lightcoral',
            ans2: data[3] - data[2] === form.inp2 ? 'lightgreen' : 'lightcoral',
            ans3: data[5] - data[4] === form.inp3 ? 'lightgreen' : 'lightcoral',
            ans4: data[7] - data[6] === form.inp4 ? 'lightgreen' : 'lightcoral',
            ans5: data[9] - data[8] === form.inp5 ? 'lightgreen' : 'lightcoral',
        });
        setRoundPoint(countSub(data, [form.inp1, form.inp2, form.inp3, form.inp4, form.inp5]));

        if (nick !== '') {
            changeDb();
        } else {
            setPoint(prev => prev + countSub(data, [form.inp1, form.inp2, form.inp3, form.inp4, form.inp5]));
        }
        setVis('');
        setTimeout(newData, 2000);
    }
    if (nick !== '') {
        downLoadPoints();
    }
    return (
        <div>
            <h1>Odejmowanie pamięciowe</h1>
            <form action="" className="add-form" onSubmit={checkSub}>
                <table>
                    <tbody>
                    <tr>
                        <td className='lt'>{data[1]} - {data[0]} =</td>
                        <td className='rt'>
                            <input
                                style={{backgroundColor: ans.ans1}}
                                type="number"
                                name='inp1'
                                value={form.inp1}
                                onChange={e => updateForm('inp1', Number(e.target.value))}
                            /></td>
                    </tr>
                    <tr>
                        <td className='lt'>{data[3]} - {data[2]} =</td>
                        <td className='rt'>
                            <input
                                style={{backgroundColor: ans.ans2}}
                                type="number"
                                name='inp2'
                                value={form.inp2}
                                onChange={
                                    e => updateForm('inp2', Number(e.target.value))
                                }
                            /></td>
                    </tr>
                    <tr>
                        <td className='lt'>{data[5]} - {data[4]} =</td>
                        <td className='rt'>
                            <input
                                style={{backgroundColor: ans.ans3}}
                                type="number"
                                name='inp3'
                                value={form.inp3}
                                onChange={e => updateForm('inp3', Number(e.target.value))}
                            /></td>
                    </tr>
                    <tr>
                        <td className='lt'>{data[7]} - {data[6]} =</td>
                        <td className='rt'>
                            <input
                                style={{backgroundColor: ans.ans4}}
                                type="number"
                                name='inp4'
                                value={form.inp4}
                                onChange={e => updateForm('inp4', Number(e.target.value))}
                            /></td>
                    </tr>
                    <tr>
                        <td className='lt'>{data[9]} - {data[8]} =</td>
                        <td className='rt'>
                            <input
                                style={{backgroundColor: ans.ans5}}
                                type="number"
                                name='inp5'
                                value={form.inp5}
                                onChange={e => updateForm('inp5', Number(e.target.value))}
                            /></td>
                    </tr>
                    </tbody>
                </table>
                <button type='submit'>Sprawdź</button>
            </form>
            <p style={{display: vis}}>Tym razem przybyło {roundPoint} pkt.</p>
            <p>Twój wynik: {point} pkt.</p>
        </div>
    )
}
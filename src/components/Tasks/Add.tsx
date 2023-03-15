import React, {SyntheticEvent, useState} from "react";
import {randNum} from "../../util/Random/rand-num";
import {nullAns} from "../../util/NullAns";
import {nullInp} from "../../util/NullInp";
import {countAdd} from "../../util/Count/CountAdd";

export const Add = () => {

    const updateForm = (key: string, value: number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    const [data, setData] = useState(randNum(10, 90));

    const [ans, setAns] = useState(nullAns);

    const [form, setForm] = useState(nullInp);

    const [point, setPoint] = useState(0);

    const newData = () => {
        setForm(nullInp);
        setAns(nullAns);
        setData(randNum(10, 90));
    }
    const checkIt = (e: SyntheticEvent) => {
        e.preventDefault();

        setAns({
            ans1: data[0] + data[1] === form.inp1 ? 'lightgreen' : 'lightcoral',
            ans2: data[2] + data[3] === form.inp2 ? 'lightgreen' : 'lightcoral',
            ans3: data[4] + data[5] === form.inp3 ? 'lightgreen' : 'lightcoral',
            ans4: data[6] + data[7] === form.inp4 ? 'lightgreen' : 'lightcoral',
            ans5: data[8] + data[9] === form.inp5 ? 'lightgreen' : 'lightcoral',
        });
        setPoint(prev => prev + countAdd(data, [form.inp1, form.inp2, form.inp3, form.inp4, form.inp5]));
        setTimeout(newData, 3000);
    }
    return (
        <div>
            <h1>Dodawanie pamięciowe</h1>
            <form action="" className="add-form" onSubmit={checkIt}>
                <p>
                    {data[0]} + {data[1]} =
                    <input
                        style={{backgroundColor: ans.ans1}}
                        type="number"
                        name='inp1'
                        value={form.inp1}
                        onChange={e => updateForm('inp1', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[2]} + {data[3]} =
                    <input
                        style={{backgroundColor: ans.ans2}}
                        type="number"
                        name='inp2'
                        value={form.inp2}
                        onChange={
                            e => updateForm('inp2', Number(e.target.value))
                        }
                    />
                </p>
                <p>
                    {data[4]} + {data[5]} =
                    <input
                        style={{backgroundColor: ans.ans3}}
                        type="number"
                        name='inp3'
                        value={form.inp3}
                        onChange={e => updateForm('inp3', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[6]} + {data[7]} =
                    <input
                        style={{backgroundColor: ans.ans4}}
                        type="number"
                        name='inp4'
                        value={form.inp4}
                        onChange={e => updateForm('inp4', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[8]} + {data[9]} =
                    <input
                        style={{backgroundColor: ans.ans5}}
                        type="number"
                        name='inp5'
                        value={form.inp5}
                        onChange={e => updateForm('inp5', Number(e.target.value))}
                    />
                </p>
                <button type='submit'>Sprawdź</button>
            </form>
            <p>Twój wynik: {point} pkt.</p>
        </div>
    )
}
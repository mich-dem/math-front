import React, {SyntheticEvent, useState} from "react";
import {randDiv} from "../../util/rand.div";

export const Divid = () => {
    const nullAns = {
        ans1: 'white',
        ans2: 'white',
        ans3: 'white',
        ans4: 'white',
        ans5: 'white',
    };
    const nullInp = {
        inp1: 0,
        inp2: 0,
        inp3: 0,
        inp4: 0,
        inp5: 0,
    }

    const updateForm = (key: string, value: number) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    const [data, setData] = useState(randDiv(2, 10));

    const [ans, setAns] = useState(nullAns);

    const [form, setForm] = useState(nullInp);
    const newData = () => {
        setForm(nullInp);
        setAns(nullAns);
        setData(randDiv(2, 10));

    }
    const checkSub = (e: SyntheticEvent) => {
        e.preventDefault();

        setAns({
            ans1: data[1] / data[0] === form.inp1 ? 'lightgreen' : 'lightcoral',
            ans2: data[3] / data[2] === form.inp2 ? 'lightgreen' : 'lightcoral',
            ans3: data[5] / data[4] === form.inp3 ? 'lightgreen' : 'lightcoral',
            ans4: data[7] / data[6] === form.inp4 ? 'lightgreen' : 'lightcoral',
            ans5: data[9] / data[8] === form.inp5 ? 'lightgreen' : 'lightcoral',
        });
        setTimeout(newData, 2000);
    }
    return (
        <div>
            <h1>Dzielenie pamięciowe</h1>
            <form action="" className="add-form" onSubmit={checkSub}>
                <p>
                    {data[1]} : {data[0]} =
                    <input
                        style={{backgroundColor: ans.ans1}}
                        type="number"
                        name='inp1'
                        value={form.inp1}
                        onChange={e => updateForm('inp1', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[3]} : {data[2]} =
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
                    {data[5]} : {data[4]} =
                    <input
                        style={{backgroundColor: ans.ans3}}
                        type="number"
                        name='inp3'
                        value={form.inp3}
                        onChange={e => updateForm('inp3', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[7]} : {data[6]} =
                    <input
                        style={{backgroundColor: ans.ans4}}
                        type="number"
                        name='inp4'
                        value={form.inp4}
                        onChange={e => updateForm('inp4', Number(e.target.value))}
                    />
                </p>
                <p>
                    {data[9]} : {data[8]} =
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
        </div>
    )
}
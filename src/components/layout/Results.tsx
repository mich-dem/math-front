import {useEffect, useState} from "react";
import {MathToList} from "types";
import './Results.css';

export const Results = () => {
    const selNick = () => {
        setSort('nick')
    };
    const selAdd = () => {
        setSort('add')
    };
    const selSub = () => {
        setSort('sub')
    };
    const selMul = () => {
        setSort('mul')
    };
    const selDiv = () => {
        setSort('div')
    };
    const [users, setUsers] = useState<MathToList[]>([]);
    const [sort, setSort] = useState('nick');
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/math/all/${sort}`);
            const data = await res.json();
            setUsers(data);
        })();
    }, [sort]);
    return (
        <div>
            <h1>Wyniki matematyków</h1>
            <table className="allRes">
                <thead>
                <tr>
                    <th onClick={selNick}>Nick</th>
                    <th onClick={selAdd}>+</th>
                    <th onClick={selSub}>-</th>
                    <th onClick={selMul}>⋅</th>
                    <th onClick={selDiv}>:</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr key={user.nick}>
                            <td>{user.nick}</td>
                            <td>{user.add}</td>
                            <td>{user.sub}</td>
                            <td>{user.mul}</td>
                            <td>{user.div}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )

}
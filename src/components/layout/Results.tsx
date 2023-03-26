import {useContext, useEffect, useState} from "react";
import {MathToList} from "types";
import './Results.css';
import {UserContext} from "../../context/user.context";

export const Results = () => {
    const {user, setUser} = useContext(UserContext);
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
                    users.map(thisUser => (
                        <tr key={thisUser.nick} className={thisUser.nick === user.nick ? 'myRes' : 'normal'}>
                            <td>{thisUser.nick}</td>
                            <td>{thisUser.add}</td>
                            <td>{thisUser.sub}</td>
                            <td>{thisUser.mul}</td>
                            <td>{thisUser.div}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )

}
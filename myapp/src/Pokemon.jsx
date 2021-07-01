import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pokemon = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() => {
        alert("😝😝😝😝😝😝😜😜😜😜😜");
        async function getData() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(response.data.name);
            setMove(response.data.move.length);
        }
        getData();
    });
    return (
        <>
            <h1>You Choose <span style={{ color: "red" }}>{num}</span></h1>
            <h1>My name is <span style={{ color: "red" }}>{name}</span></h1>
            <h1>I have <span style={{ color: "red" }}>{move}</span> moves</h1>
            <select name="select" id="select" value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
}
export default Pokemon;
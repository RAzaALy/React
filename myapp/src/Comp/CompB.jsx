import React, { useContext } from 'react';
import ComC from './CompC.jsx';
import { FirstName, LastName } from '../Context.jsx';
const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1> My First name is {fname} and last name {lname}</h1>
            <ComC />
        </>
    )
}
export default ComB;
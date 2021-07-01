import React from 'react';
import { FirstName, LastName } from '../Context.jsx';
const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1> My First name is {fname} and last name is {lname}</h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    )
}
export default ComC;
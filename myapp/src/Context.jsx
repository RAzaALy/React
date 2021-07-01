// Context Api in React:
// React Context API allows you to easily access data at different levels of the compenent tree,without passing props to every level:
// Steps
// 1:createContext()
// 2:provider
// 3:consumer
import React, { createContext } from 'react';
import ComA from './Comp/CompA';
const FirstName = createContext();
const LastName = createContext();
const Context = () => {
    return (
        <>
            <FirstName.Provider value={"RAza"}>
                <LastName.Provider value={"ALy"}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}
export default Context;
export { FirstName,LastName};
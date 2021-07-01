import React from 'react';
import Data from './Data.jsx';
import Card from './Card.jsx';

const Amazon = () => {
    return (
        <Card
            key={Data[4].id}
            imgSrc={Data[4].imgSrc}
            title={Data[4].title}
            sName={Data[4].sName}
            link={Data[4].link}
        />
    );
}
export default Amazon;
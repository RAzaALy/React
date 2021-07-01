import React from 'react';
import Data from './Data.jsx';
import Card from './Card.jsx';

const Netflix = () => {
    return (
        <Card
          key={Data[1].id}
          imgSrc={Data[1].imgSrc}
          title={Data[1].title}
          sName={Data[1].sName}
          link={Data[1].link}
        />
      );
}
export default Netflix;
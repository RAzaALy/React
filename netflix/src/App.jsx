import React from "react";
import Card from "./Card.jsx";
import Data from "./Data.jsx";
import Netflix from "./Netflix.jsx";
import Amazon from "./Amazon.jsx";

// function nCard(value) {
//   return (
//     <Card imgSrc={value.imgSrc}
//       title={value.title}
//       sName={value.sName}
//       link={value.link}
//     />
//   );
//}

//if else condition in React J$:
// let fav = "amazon";
// const FavSeries = () => {
//   if (fav === "netflix") {
//     return <Netflix />
//   }
//   else {
//     return <Amazon />
//   }

// };

function App() {
  return (
    <>
      <h1 className="headingStyle">List of top 5 Netflix Series in 2021</h1>
      {/* <FavSeries /> */}
      {fav === "netflix" ? <Netflix /> : <Amazon />}
      {Data.map((value, index) => {
        {/* console.log(index); */}
        return (
          <Card
            key={value.id}
            imgSrc={value.imgSrc}
            title={value.title}
            sName={value.sName}
            link={value.link}
          />
        );
      })}
    </>
  );
}
export default App;
//  {<Card imgSrc={Data[0].imgSrc} title={Data[0].title}
//       sName={Data[0].sName}
//       link={Data[0].link}
//     />
//     <Card
//       imgSrc={Data[1].imgSrc} title={Data[1].title}
//       sName={Data[1].sName}
//       link={Data[1].link}
//     />
//     <Card
//       imgSrc={Data[2].imgSrc} title={Data[2].title}
//       sName={Data[2].sName}
//       link={Data[2].link}
//     />
//     <Card
//       imgSrc={Data[3].imgSrc} title={Data[3].title}
//       sName={Data[3].sName}
//       link={Data[3].link}
//     />
//     <Card
//       imgSrc={Data[4].imgSrc} title={Data[4].title}
//       sName={Data[4].sName}
//       link={Data[4].link}
//     /> }

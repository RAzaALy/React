import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("programming");
  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      // console.log(data);
      setImages(data.hits);
      setLoading(false);
    };
    getImages();
  }, [term]);
  return (
    <div className="p-4">
      {loading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <>
          <h1 className="text-center text-gray-600 text-4xl my-4">
            Images Stock By Code Tech
          </h1>
          <Search setText={(text) => setTerm(text)} />
          <div className="mx-auto my-10 container m-4">
            <div className="grid lg:grid-cols-3 gap-4 place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
              {images.map((image) => (
                <Card key={image.id} image={image}></Card>
              ))}
            </div>
          </div>
        </>
      )}
      {/* 404 page not found */}
      {!loading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Images Note Found 🚀 !
        </h1>
      )}
    </div>
  );
};

export default App;

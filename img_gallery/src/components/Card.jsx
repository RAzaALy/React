import React from "react";

const Card = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="img" className="w-full object-fill max-h-56" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2 flex">{image.user}</div>
        <ul className="text-sm">
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
        <div className="py-4">
          {tags.map((tag,index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

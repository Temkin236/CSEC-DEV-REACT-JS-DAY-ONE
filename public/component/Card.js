import React from 'react';

const Card = ({ title, content, imageUrl, footer }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{content}</p>
            {footer && <div className="mt-4">{footer}</div>}
        </div>
    );
};

export default Card;

import React from 'react';
import ImageCard from './ImageCard';

const ImagesList = ({ imagesData }) => {
    return (
        <div className="col-12 p-5 row">
            {imagesData.map(image => (
                <ImageCard
                    key={image.id}
                    imageInfo={image}
                />
            ))}
        </div>
    );
}
 
export default ImagesList;
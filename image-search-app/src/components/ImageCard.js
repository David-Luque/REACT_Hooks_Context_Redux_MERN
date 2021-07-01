import React from 'react';

const ImageCard = ({ imageInfo }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imageInfo;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text"> {likes} likes</p>
                    <p className="card-text"> {views} views</p>
                </div>
                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >
                        See full image
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default ImageCard;
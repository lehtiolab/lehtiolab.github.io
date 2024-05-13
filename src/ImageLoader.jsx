import React, { useState } from 'react';
import Loader from './Loader';

const ImageLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      {!loaded && (
        <div className="pointer-events-none">
          <Loader />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageLoader;

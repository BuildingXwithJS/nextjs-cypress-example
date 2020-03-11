import React, { useEffect, useState } from 'react';

function Image() {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage('https://picsum.photos/5000');
  }, []);

  return image ? (
    <img style={{ width: '100%', height: '100%' }} src={image} />
  ) : (
    <div />
  );
}

export default Image;

import React, { useState, useEffect } from 'react';
import ImageMagnify from 'react-image-magnify';

function ImageSlider({ productImage }) {
  // Set initial state to the first image in the productImage array
  const [sliderData, setSliderData] = useState(productImage.length > 0 ? productImage[0] : null);

  // Update the sliderData state when productImage prop changes
  useEffect(() => {
    if (productImage.length > 0) {
      setSliderData(productImage[0]);
    }
  }, [productImage]);

  const handleClick = (index) => {
    console.log(index);
    const slider = productImage[index];
    setSliderData(slider);
  };

  return (
    <div>
      {sliderData && (
        <ImageMagnify
          {...{
            smallImage: {
              alt: 'Product Image',
              isFluidWidth: true,
              src: `https://app.fuelfree.in/${sliderData}`,
            },
            largeImage: {
              src: `https://app.fuelfree.in/${sliderData}`,
              width: 520, // Adjust the width of the magnified image as needed
              height: 900 // Adjust the height of the magnified image as needed
            },
          }}
        />
      )}
      <div className='flex_row'>
        {productImage &&
          productImage.map((data, i) => (
            <div className='thumbnail'>
              <img
                className={data[i] === i ? 'clicked' : ''}
                src={`https://app.fuelfree.in/${data && data}`}
                key={data._id}
                onClick={() => handleClick(i)}
                height='0'
                width='100'
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageSlider;


import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg bg-gray-100 h-[400px] md:h-[500px]">
        <img
          src={images[currentImage]}
          alt={`${alt} - Image ${currentImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-20 overflow-hidden rounded-md transition ${
              currentImage === index
                ? "ring-2 ring-sage-500"
                : "ring-1 ring-transparent hover:ring-sage-300"
            }`}
          >
            <img
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

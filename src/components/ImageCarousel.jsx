import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const hasMultiple = images.length > 1; // tambahan

  return (
    <div className="image-carousel">
      <div className="carousel-image-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              className="carousel-button carousel-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="carousel-button carousel-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;

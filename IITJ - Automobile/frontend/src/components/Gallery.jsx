import React from "react";

const GalleryImage = ({ src, alt }) => {
  return (
    <div className="group relative">
      <img
        src={src}
        alt={alt}
        className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
    </div>
  );
};

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Gallery Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Gallery Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Gallery Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Gallery Image 4",
    },
  ];

  return (
    <section className="text-gray-700 body-font" id="gallery">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
        Gallery
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

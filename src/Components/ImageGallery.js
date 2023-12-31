import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useInView } from "react-intersection-observer";


import image1 from '../assets/IMAG0025.jpg';
import image2 from '../assets/IMAG0026.jpg';
import image3 from '../assets/Residential/Corporate/corporate/ENGRO i _ e Office Block/of7.JPG'
import image4 from '../assets/Residential/Corporate/corporate/ENGRO i _ e Office Block/of4.jpg'
import image5 from '../assets/Residential/Corporate/corporate/ENGRO i _ e Office Block/of3.jpg'
import image6 from '../assets/Residential/Corporate/corporate/ENGRO i _ e Office Block/of2.jpg'
import image7 from '../assets/Residential/Corporate/corporate/Hospital/h7.jpg'
import image8 from '../assets/Residential/Corporate/corporate/Hospital/h8.jpg'
import image9 from '../assets/Residential/Corporate/corporate/Hospital/h9.jpg'
import image10 from '../assets/Residential/Corporate/corporate/DSV/01.jpg'
import image11 from '../assets/Residential/Corporate/corporate/DSV/05.jpg'
import image12 from '../assets/Residential/Corporate/corporate/DSV/06.jpg'


import image20 from '../assets/Residential/RESIDENTIAL/Home 1/h1.jpg'
import image21 from '../assets/Residential/RESIDENTIAL/Home 1/h2.jpg'
import image22 from '../assets/Residential/RESIDENTIAL/Home 1/h3.jpg'
import image23 from '../assets/Residential/RESIDENTIAL/Home 2/h1.jpg'
import image24 from '../assets/Residential/RESIDENTIAL/Home 2/h2.jpg'
import image25 from '../assets/Residential/RESIDENTIAL/Home 2/h3.jpg'
import image26 from '../assets/Residential/RESIDENTIAL/Home 3/h1.jpg'
import image27 from '../assets/Residential/RESIDENTIAL/Home 3/h2.jpg'
import image28 from '../assets/Residential/RESIDENTIAL/Home 3/h3.jpg'
import image29 from '../assets/Residential/RESIDENTIAL/Home 4/h1 (3).jpg'
import image30 from '../assets/Residential/RESIDENTIAL/Home 4/h2.jpg'
import image31 from '../assets/Residential/RESIDENTIAL/Home 4/h3.jpg'
import image32 from '../assets/Residential/RESIDENTIAL/Lucky one Tower/h1.jpg'
import image33 from '../assets/Residential/RESIDENTIAL/Lucky one Tower/h2.jpg'
import image34 from '../assets/Residential/RESIDENTIAL/Lucky one Tower/h3.jpg'





import image40 from '../assets/Residential/Consultancy/BOARD ROOM.jpg'
import image41 from '../assets/Residential/Consultancy/BOARD ROOM-02.jpg'
import image42 from '../assets/Residential/Consultancy/CORRIDOR.jpg'
import image43 from '../assets/Residential/Consultancy/MD ROOM-02.jpg'
import image44 from '../assets/Residential/Consultancy/MD ROOM-03.jpg'
import image45 from '../assets/Residential/Consultancy/RECEPTION-03.jpg'
import image46 from '../assets/Residential/Consultancy/IP1.jpg'
import image47 from '../assets/Residential/Consultancy/IP2.jpg'
import image48 from '../assets/Residential/Consultancy/IP3.jpg'
import image49 from '../assets/Residential/Consultancy/IP4.jpg'
import image50 from '../assets/Residential/Consultancy/IP5.jpg'
import image51 from '../assets/Residential/Consultancy/IP6.jpg'
import image52 from '../assets/Residential/Consultancy/Orange/g1.png'
import image53 from '../assets/Residential/Consultancy/Orange/g2.png'
import image54 from '../assets/Residential/Consultancy/Orange/g3.png'
import image55 from '../assets/Residential/Consultancy/Orange/g4.png'
import image56 from '../assets/Residential/Consultancy/Orange/g5.png'
import image57 from '../assets/Residential/Consultancy/Orange/g6.png'
import image58 from '../assets/Residential/Consultancy/Grey/1.png'
import image59 from '../assets/Residential/Consultancy/Grey/2.png'
import image60 from '../assets/Residential/Consultancy/Grey/3.png'
import image61 from '../assets/Residential/Consultancy/Grey/4.png'
import image62 from '../assets/Residential/Consultancy/Grey/5.png'
import image63 from '../assets/Residential/Consultancy/Grey/6.png'



// ... (other image imports)

export default function ImageGallery() {
  const [corporateRef, corporateInView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const [resRef, resInView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const [desRef, desInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const corporateStyle = {
    opacity: corporateInView ? 1 : 0,
    transform: corporateInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
  };

  const resStyle = {
    opacity: resInView ? 1 : 0,
    transform: resInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
  };

  const desStyle = {
    opacity: desInView ? 1 : 0,
    transform: desInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
    
  };


  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 1" },
    { src: image5, alt: "Image 2" },
    { src: image6, alt: "Image 3" },
    { src: image7, alt: "Hospital" },
    { src: image8, alt: "Hospital" },
    { src: image9, alt: "Hospital" },
    { src: image10, alt: "DSV Offices" },
    { src: image11, alt: "DSV Offices" },
    { src: image12, alt: "DSV Offices" },
    // ... (other images)
  ];

  // ... (other image arrays)
  const images2 = [
    { src: image20, alt: "Image 1" },
    { src: image21, alt: "Image 2" },
    { src: image22, alt: "Image 3" },
    { src: image23, alt: "Image 1" },
    { src: image24, alt: "Image 2" },
    { src: image25, alt: "Image 3" },
    { src: image26, alt: "Image 1" },
    { src: image27, alt: "Image 2" },
    { src: image28, alt: "Image 3" },
    { src: image29, alt: "Image 3" },
    { src: image30, alt: "Image 3" },
    { src: image31, alt: "Image 3" },
    { src: image32, alt: "Image 3" },
    { src: image33, alt: "Image 3" },
    { src: image34, alt: "Image 3" },
  ];

  const images3 = [
    { src: image40, alt: "Abbott Offices Design" },
    { src: image41, alt: "Abbott Offices Design" },
    { src: image42, alt: "Abbott Offices Design" },
    { src: image43, alt: "Abbott Offices Design" },
    { src: image44, alt: "Abbott Offices Design" },
    { src: image45, alt: "Abbott Offices Design" },
    { src: image46, alt: "InfraProp Offices Design" },
    { src: image47, alt: "InfraProp Offices Design" },
    { src: image48, alt: "InfraProp Offices Design" },
    { src: image49, alt: "InfraProp Offices Design" },
    { src: image50, alt: "InfraProp Offices Design" },
    { src: image51, alt: "InfraProp Offices Design" },
    { src: image52, alt: "Pakistan International Ltd Offices Design" },
    { src: image53, alt: "Pakistan International Ltd Offices Design" },
    { src: image54, alt: "Pakistan International Ltd Offices Design" },
    { src: image55, alt: "Pakistan International Ltd Offices Design" },
    { src: image56, alt: "Pakistan International Ltd Offices Design" },
    { src: image57, alt: "Pakistan International Ltd Offices Design" },
    { src: image58, alt: "Marine Group of Companies Offices Design" },
    { src: image59, alt: "Marine Group of Companies Offices Design" },
    { src: image60, alt: "Marine Group of Companies Offices Design" },
    { src: image61, alt: "Marine Group of Companies Offices Design" },
    { src: image62, alt: "Marine Group of Companies Offices Design" },
    { src: image63, alt: "Marine Group of Companies Offices Design" },
  ];

  const allImages = [...images, ...images2, ...images3];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const customHeaderStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
  };

  const customImageStyle = {
    transition: 'transform 0.2s ease-in-out',
    position: 'relative', // Add this style to position alt text
  };

  const altTextStyle = {
    display: 'none',
    position: 'absolute',
    bottom: '10px', // Adjust as needed for placement
    left: '10px', // Adjust as needed for placement
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const handleImageHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.nextSibling.style.display = 'block';
  };

  const handleImageLeave = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.nextSibling.style.display = 'none';
  };

  return (
    <>
      <div className="container mt-4" style={{ fontFamily: "'Bree Serif', serif"}}>
        <h2 className="text-center mb-2">Image Gallery.</h2>
        <hr style={{ width: "50%", margin: "auto" }} />
        <div ref={corporateRef} style={corporateStyle}>
        <h3 className="text-center my-4 mb-2 mt-5">
          Corporate Projects.
        </h3>
        <hr style={{ width: "20%", margin: "auto" }} className="mb-4" />
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0">
                <img
                  src={image.src}
                  className="card-img-top rounded"
                  alt={image.alt}
                  onClick={() => openLightbox(index)}
                  style={customImageStyle}
                  onMouseOver={handleImageHover}
                  onMouseLeave={handleImageLeave}
                />
                <div style={altTextStyle}>{image.alt}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* ... (Other sections of your gallery) */}
        <div ref={resRef} style={resStyle}>
        <h3 className="text-center my-4 mb-2">
          Residential Projects.
        </h3>
        <hr style={{ width: "20%", margin: "auto" }} className="mb-4" />
        <div className="row">
          {images2.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
            <div className="card border-0">
              <img
                src={image.src}
                className="card-img-top rounded"
                alt={image.alt}
                onClick={() => openLightbox(index + images.length)}
                style={customImageStyle}
                onMouseOver={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
              <div style={altTextStyle}>{image.alt}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div ref={desRef} style={desStyle}>
      <h3 className="text-center my-4 mb-2">
        Design/Consultancy Projects.
      </h3>
      <hr style={{ width: "20%", margin: "auto" }} className="mb-4" />
      <div className="row">
        {images3.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0">
              <img
                src={image.src}
                className="card-img-top rounded"
                alt={image.alt}
                onClick={() => openLightbox(index + images.length + images2.length)}
                style={customImageStyle}
                onMouseOver={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
              <div style={altTextStyle}>{image.alt}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={allImages[lightboxIndex].src}
          nextSrc={allImages[(lightboxIndex + 1) % allImages.length].src}
          prevSrc={allImages[(lightboxIndex + allImages.length - 1) % allImages.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + allImages.length - 1) % allImages.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % allImages.length)}
          enableZoom={false}
          renderHeader={() => (
            <div style={customHeaderStyle}>
              <button onClick={closeLightbox}>Close</button>
            </div>
          )}
        />
      )}
    </>
  );
}

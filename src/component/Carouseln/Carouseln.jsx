import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carouseln = () => {
  return (
    <Carousel data-bs-theme="dark" className='mt-5 mb-5'>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image "
        src="https://i.ibb.co/Zzj2bLZ/best-burger-restaurants-sydney.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
       
        <p style={{color:"white"}}>Hamburger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src="https://i.ibb.co/ZL7Ynpr/wraps-range-homepage-pbfull-1-column-desktop.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <p style={{color:"white"}}>Get wrapped up in Flavour with McDonald’s Big Flavour Wraps. From Spicy Sriracha to BBQ there’s something for every taste.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src="https://i.ibb.co/9sNbpFk/signature-tray-of-spreads.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
       
        <p style={{color:"white"}} >
        Signature Tray of Spreads is a culinary term that refers to a platter or tray containing a variety of spreads, typically served as an appetizer or snack.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Carouseln;
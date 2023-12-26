import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import pic from "./pic.jpg"
import pic1 from "./pic2.png"
import pic2 from "./pic3.jpg"

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={700}>
          <img src={pic} text="First slide" height={600} width={1600} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img src={pic1} height={600} width={1600} text="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img src={pic2} text="Third slide" height={600} width={1600} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home

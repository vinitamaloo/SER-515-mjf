import React from 'react'
import im1 from '../Home/image1.jpg'
import im2 from '../Home/image2.jpg'
import im3 from '../Home/image3.jpg'
import Carousel from 'react-bootstrap/Carousel';
// const A = styled.a`
//   padding: 100px;
// `;
// const AA = styled.a`
//  font-size : 100px;
// `;

function Home() {

  return (
    <div>
      


<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={im1}
      alt="First slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={im2}
      alt="Second slide"
    /> 
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {im3}
      alt="Third slide"
    /> 
  </Carousel.Item>

</Carousel>

      </div>

    




  )
}

export default Home

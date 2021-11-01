import React from 'react'
import im1 from '../Home/image1.jpg'
import im2 from '../Home/image2.jpg'
import im3 from '../Home/image3.jpg'
import logo from '../Home/tourney.jpg'
import sponsor1 from '../Home/sponsor-1.jpg'
import sponsor2 from '../Home/sponsor-2.png'
import sponsor3 from '../Home/sponsor-3.png'
import sponsor4 from '../Home/sponsor-4.png'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import "./home.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// const textStyle = styled.div`
// background-color:"#000080";
// background-size: cover;
// width: 100vw;
// height: 100vh;
// `;

function Home() {

  return (
    <div style={{backgroundColor: "lightblue"}}>
      <h1 className = "headingStyle">Soccer Tournament</h1>
      <div className='central_heading'>
        <Button variant="primary" size='lg' className='btn-primary'>
            <Link to='/team-registration' style={{color: "white",textDecoration: 'none'}}>
                Apply For Team Registration today!
            </Link>
        </Button>
      </div>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im1}
            alt="First slide"
            height="400px"
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im2}
            alt="Second slide"
            height="400px"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={im3}
            alt="Third slide"
            height="400px"
          />
        </Carousel.Item>

      </Carousel>
    
      <div className="bg">
        <h2 className="text">Sponsors:</h2>
        <div>
          <img src={sponsor1} height="100px" width="200px" className="imagestyling"/>
          <img src={sponsor2} height="100px" width="200px" className="imagestyling"/>
          <img src={sponsor3} height="100px" width="200px" className="imagestyling"/>
          <img src={sponsor4} height="100px" width="200px" className="imagestyling"/>
        </div>

      </div>
      
    </div>






  )
}

export default Home

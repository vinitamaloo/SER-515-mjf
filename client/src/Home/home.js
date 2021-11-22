import React, { useEffect } from 'react'
import im1 from '../Home/bg3.jpg'
import im2 from '../Home/bg2.jpg'
import im3 from '../Home/bg1.jpg'
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
  useEffect(()=>{
    const txtFull = "Soccer Tournament"; //the text goes here
const txtArr = txtFull.split("");

function getRandomTime() {
  return Math.random() * 0.5;
}
function getEle(id) {
  return document.getElementById("text");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  const el = getEle("text");
  if(el){
    setTimeout(
      () => {
        const el = getEle("text");
        if(el){
          let elTxt = el.innerHTML;
          elTxt += txtArr[curChar];
          ModifyTxt(el, elTxt);
          //check if next iteration is out of range
          if (curChar + 1 == txtArr.length) {
            return deleteOut(txtArr, txtArr.length);
          }
          return writeOut(txtArr, curChar + 1);
        }
      },

      randomTime * 1000
    );
  }
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
        () => {
          const el = getEle("text");
          let elTxt = el.innerHTML;
          //remove
          const elTxtArr = elTxt.split("");
          const elTxtArrLen = elTxtArr.length;
          console.log(elTxtArr.length - 1);
          const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
          ModifyTxt(el, newElTxt);
          if (elTxtArrLen == 0) {
            return writeOut(txtArr, 0);
          }
          return deleteOut(txtArr, elTxtArrLen - 1);
        },

        randomTime * 1000
      );
      return;
    }
    writeOut(txtArr);
  },[])
  return (
    <div style={{ backgroundColor: "lightblue" }}>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-image"
            src={im1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="heading-s" id="text"></h1>
            <div className='central_heading'>
              <Button variant="primary" size='lg' className='btn-primary' >
                <Link to='/team-registration' style={{ color: "white", textDecoration: 'none' }}>
                  Apply For Team Registration today!
            </Link>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 bg-image"
            src={im2}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1 className="heading-s">Soccer Tournament</h1>
            <div className='central_heading'>
              <Button variant="primary" size='lg' className='btn-primary'>
                <Link to='/team-registration' style={{ color: "white", textDecoration: 'none' }}>
                  Apply For Team Registration today!
            </Link>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 bg-image"
            src={im3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 className="heading-s">Soccer Tournament</h1>
            <div className='central_heading'>
              <Button variant="primary" size='lg' className='btn-primary'>
                <Link to='/team-registration' style={{ color: "white", textDecoration: 'none' }}>
                  Apply For Team Registration today!
            </Link>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <div className="bg">
        <h2 className="text">Sponsors:</h2>
        <div>
          <img src={sponsor1} height="100px" width="200px" className="imagestyling" />
          <img src={sponsor2} height="100px" width="200px" className="imagestyling" />
          <img src={sponsor3} height="100px" width="200px" className="imagestyling" />
          <img src={sponsor4} height="100px" width="200px" className="imagestyling" />
        </div>

      </div>

    </div>
  )
}

export default Home

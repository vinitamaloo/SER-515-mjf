import React from 'react'
import im1 from '../Home/image1.jpg'
import im2 from '../Home/image2.png'
import im3 from '../Home/image1.jpg'
// const A = styled.a`
//   padding: 100px;
// `;
// const AA = styled.a`
//  font-size : 100px;
// `;

function Home() {

  return (
    <div style={{ marginTop: 60 }}>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Soccer Tournament</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#"> Home </a>
              <a class="nav-link" href="#">Login</a>

              <a class="nav-link" href="#">Register</a>
              <a class="nav-link" href="#">Apply</a>
              <a class="nav-link" href="#">View Schedule</a>
            </div>
          </div>
        </div>
      </nav> */}
      
      
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={im1} class="d-block w-100"  height="300px" width="200px" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={im2} class="d-block w-100" height="500px" width="500px" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={im3} class="d-block w-100" height="500px" width="500px" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>

    




  )
}

export default Home

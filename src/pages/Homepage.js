import React from "react";
//, { useState, useEffect }This is unfortunate
import Carousel from "react-bootstrap/Carousel";

function Homepage(props) {
  return (
    <div className="container-fluid row">
      <div className="col-md-4" id="section2">
        <div className="card">
          <img
            className="card-img-top"
            id="profilepic"
            src="https://github.com/reybrac/reybrac.github.io/blob/main/public/reynaldo.jpg?raw=true"
            alt="Reynaldo Bracamonte"
          />
        </div>
        <br />

        <p>
          My name is <h3>Reynaldo Bracamonte.</h3> I am currently attending the
          coding bootcamp available through UC Davis.{" "}
        </p>
        <p>
          It has been challenging to learn new skills and there is a lot of
          research required, but so far it is an enjoyable program.
        </p>
        <br />
        <p>
          <i className="far fa-briefcase fa-fw"></i> Customer Service
          Professional with Web Development skills
        </p>
        <p>
          <i className="far fa-home fa-fw "></i> Tracy, CA
        </p>

        <hr />

        <img
          className="d-block w-100"
          src="https://github.com/reybrac/reybrac.github.io/blob/main/public/Zuma.jpg?raw=true"
          alt="Zuma-dog"
        />
      </div>

      <div className="col-md-8" id="section3">
        <div className="row" id="rower2">
          <h2>Some of the projects that I have completed.</h2>
          <p>
            See more under my <a href="/portfolio">Portfolio</a> section
          </p>

          <hr />
          <Carousel>
            <Carousel.Item>
              <a href="https://reybrac.github.io/A-Taste-From-Home">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/A-Taste-From-Home/raw/main/assets/Images/A-taste-from-home.JPG"
                  alt="A Taste from Home"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Weather-dashboard/">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Weather-dashboard/raw/main/Assets/images/Weather-Dashboard.JPG?raw=true"
                  alt="Weather Dashboard"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Work-day-scheduler">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Work-day-scheduler/raw/main/Assets/WD-scheduler.JPG?raw=true"
                  alt="Workday Scheduler"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row" id="rower1">
          <div className="col">
            <h2>Happy Life</h2>
            <p>Thankful for everything I have!</p>
            <ul className="nobullets">
              <li>My family is a great driving force for me to improve.</li>
              <li>I work hard to make their lives better!</li>
              <li>Married for 12 years!</li>
              <li>3 wonderful children!</li>
              <li>Dog and turtle!</li>
            </ul>
            <hr />
            <h2>Dislikes</h2>
            <ul className="nobullets">
              <li>Brussel Sprouts</li>
              <li>COVID-19</li>
              <li>Waiting in line</li>
            </ul>
            <hr />

            <h2>Likes</h2>
            <ul className="nobullets">
              <li>Food</li>
              <li>Kayaking</li>
              <li>Fishing</li>
              <li>Reading</li>
              <li>Spending time with family</li>
              <li>Spartan Obstacle races</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Feedback.css'
  
export default function App() {
  return (
    <div className="Feedback-Container"style={{ display: 'block', width: "90vw", padding: 20 }}>
      {/* <h4 >FeedBack</h4> */}
      <Carousel>
        <Carousel.Item interval={1500} className="item">
          <img  className="img-box" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"      />
          <Carousel.Caption>
            <h3 className="testimonial">Label for first slide</h3>
            <p className="overview">Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="item">
          <img     className="img-box"src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image Two"  />
          <Carousel.Caption>
            <h3 className="testimonial">Label for second slide</h3>
            <p className="overview">Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="item">
          <img  className="img-box" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image three"      />
          <Carousel.Caption>
            <h3 className="testimonial">Label for third slide</h3>
            <p className="overview">Sample Text for Image three</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="item">
          <img  className="img-box" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image four"      />
          <Carousel.Caption>
            <h3 className="testimonial">Label for fourth slide</h3>
            <p className="overview">Sample Text for Image four</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="item">
          <img  className="img-box" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image five"      />
          <Carousel.Caption>
            <h3 className="testimonial">Label for fifth slide</h3>
            <p className="overview">Sample Text for Image five</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="item">
          <img  className="img-box" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image six"      />
          <Carousel.Caption>
            <h3 className="testimonial">Label for sixth slide</h3>
            <p className="overview">Sample Text for Image six</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
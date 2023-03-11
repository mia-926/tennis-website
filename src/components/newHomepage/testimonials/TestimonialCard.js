import Carousel from 'react-bootstrap/Carousel';
import testimonial from '../../../images/testimonial.png';
import groupPic from '../../../images/groupPhoto.jpeg';
import girls from '../../../images/girlGroup.png';
import '../newHomepage.css';



export const TestimonialCard = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item interval={10000} >
      <img
          style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={groupPic}
          alt="First slide"
        />
         <Carousel.Caption style={{ textAlign: "center" }}>
          <h3 style={{color:"white", textAlign:"center"}}>“I was thrilled by WTA’s amazing lessons. Perfect for middle-sch00l age kids looking to take tennis to the next level.</h3>
          <p style={{textAlign: "center",color:"white"}}>Dhilen Mistry, Class of 2023</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
       style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={girls}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
       style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={groupPic}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

import Carousel from 'react-bootstrap/Carousel';
import testimonial from '../../../images/testimonial.png';



export const TestimonialCard = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item interval={10000} >
      <img

          className="d-block w-100 h-100"
          src={testimonial}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
          className="d-block w-100 h-100"
          src={testimonial}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
          className="d-block w-100 h-100"
          src={testimonial}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

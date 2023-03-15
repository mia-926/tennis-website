import Carousel from 'react-bootstrap/Carousel';
import testimonial from '../../../images/testimonial.png';
import groupPic from '../../../images/groupPhoto.jpeg';
import girls from '../../../images/girlGroup.png';
import girlsTennis from '../../../images/girlsTennis.png';
import court from '../../../images/court.png';
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
         <Carousel.Caption style={{ textAlign: "center" , width:800 }}>
          <h3 style={{color:"white", textAlign:"center", fontSize:40, letterSpacing:8}}>“I was thrilled by WTA’s amazing lessons. Perfect for middle-school age kids looking to take tennis to the next level."</h3>
          <p style={{textAlign: "center",color:"white", fontWeight: 300, paddingTop:50}}>Dhilen Mistry, Class of 2023</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
       style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={girls}
          alt="First slide"
        />
         <Carousel.Caption style={{ textAlign: "center" , width:800 }}>
          <h3 style={{color:"white", textAlign:"center", fontSize:40, letterSpacing:8}}>"When I enrolled my daughter into WTA I had high hopes for what she would learn. I was not disappointed! Excellent program”</h3>
          <p style={{textAlign: "center",color:"white", fontWeight: 300, paddingTop:50}}>Sebastian Howells</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval= {10000}>
      <img
       style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={court}
          alt="First slide"
        />
      <Carousel.Caption style={{ textAlign: "center" , width:800 }}>
          <h3 style={{color:"white", textAlign:"center", fontSize:40, letterSpacing:8}}>"I was worried about cost and location when my son wanted to learn tennis, but WTA’s free, local classes were a perfect opportunity!"</h3>
          <p style={{textAlign: "center",color:"white", fontWeight: 300, paddingTop:50}}>Alan Shi</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval= {10000}>
      <img
       style={{filter: "brightness(30%)"}}
          className="d-block w-100 h-100"
          src={girlsTennis}
          alt="First slide"
        />
      <Carousel.Caption style={{ textAlign: "center", width:800 }}>
          <h3 style={{color:"white", textAlign:"center", fontSize:40, letterSpacing:8}}>“Ethan is an accomplished and approachable leader, always willing to help his students out. All around, their instructor team is great!"</h3>
          <p style={{textAlign: "center",color:"white", fontWeight: 300, paddingTop:50}}>Lucas Crawford, Class of 2023</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

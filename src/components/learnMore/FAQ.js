import Accordion from 'react-bootstrap/Accordion';

import './learnMore.css';

function FAQ() {
  return (
    <div style={{paddingRight:100, paddingLeft:100, marginBottom:100, paddingTop:50}}>
      <h1>FAQs</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header  >Are the lessons 100% free?</Accordion.Header>
        <Accordion.Body >
        Yes, the clinics at Westlake Tennis Academy are completely free of charge. Our initiative aims to recognize and reward the ambitious athletes who actively participate in our initiative. However, we do welcome donations from those who wish to contribute to the quality of our clinics. These donations will help us with purchasing new tennis balls, tennis drill equipment, and drinks so that members can continue to benefit from our high quality clinics for free.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are your future plans for this initiative? </Accordion.Header>
        <Accordion.Body>
        Our plans for the Westlake Tennis Academy initiative are to expand beyond the free clinics that we currently offer every Friday. We are exploring the possibility of hosting tournaments and other events that will allow young athletes to showcase their skills and compete with other players in the community. Through our continued efforts and the support of our members, we believe that we can make a significant impact on the local tennis scene and create exciting opportunities for young athletes to grow and succeed

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What other skills besides technique will be gained through these clinics?</Accordion.Header>
        <Accordion.Body>
        Our clinics at the Westlake Tennis Academy aim to provide our members with more than just technical training. In addition to honing their tennis skills, our clinics will also expose our members to a variety of different players and playing styles, giving them a broader knowledge base and the ability to adapt to different situations on the court. Furthermore, our clinics will help condition our members' bodies to be fit for tennis, as well as instilling an athlete's mindset that will help them both on and off the court. Our goal is to provide our members with a well-rounded approach to tennis that encompasses both physical and mental training, giving them the tools they need to succeed both on and off the court.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default FAQ;
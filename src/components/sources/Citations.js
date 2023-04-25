import React, { useEffect, useState } from 'react';
import "./citations.css";

const textBlocks = [
  {
    title: 'Student Quotations',
    text: `All the quotes featured on the website have been collected from the students of Westlake High School as well as the current and former students of Westlake Tennis Academy. These testimonials reflect the authentic experiences and opinions of the individuals who shared their thoughts with us. We are grateful to each of them for their willingness to participate and to provide us with their valuable insights.

    We take the privacy and consent of our participants very seriously. Before using any quotes on our website, we made sure to obtain verbal consent from each person, ensuring that they were fully aware of the purpose and context in which their words would be shared. We believe that it is essential to maintain the integrity of our participants' voices.
    
    Our goal in showcasing these quotes is to offer a genuine representation of the experiences and perspectives of those who have been a part of our community. We hope that their words will inspire and encourage others who are considering joining the Westlake Tennis Academy.By sharing their testimonials, we aim to provide a transparent and informative resource for anyone interested in our programs.`
  },
  {
    title: 'Westlake Boys Varsity Tennis Photos',
    text: `Photos of the Westlake Boys Varsity Tennis team have been carefully curated from the team's Instagram page, with the verbal consent of its managers. These images are prominently featured on our homepage, serving as  background images and within the carousel section of the page.We are grateful to the managers of the Westlake Boys Varsity Tennis team for allowing us to feature these photos on our website and for their continued support. We take the privacy and consent of our participants very seriously and have ensured that all necessary permissions were obtained before using these photos.By featuring these high-quality images on our homepage, we aim to provide an engaging and dynamic visual experience for our visitors. We believe that these images serve as a powerful testament to the talent and hard work of our student-athletes, and convey the exciting opportunities available to those who choose to join our tennis program.
  `
  },
  {
    title: 'Westlake Girls Varsity Tennis Photos',
    text: `The photos of the Westlake Girls Varsity Tennis Team were obtained either directly from the team's Instagram page with their consent or through the kind permission of photographers who have taken them. We have taken great care to ensure that all necessary permissions were obtained before using these images.

    These photos are prominently featured on the homepage of our website, appearing in the carousel section and on the mission page as a background. We believe that these photos accurately reflect the passion, dedication, and excellence of our team, and serve as a testament to the hard work and talent of our student-athletes.
    
    At our institution, we place a high value on the privacy and consent of our participants. We take great care to ensure that our use of these images is respectful and appropriate, and that all necessary permissions have been obtained.
    
    We are grateful to the Westlake Girls Varsity Tennis Team and the photographers who have shared their work with us. By featuring these photos on our website, we hope to inspire and motivate others to explore their passion for tennis and consider joining our dynamic and supportive community.`
  },
  {
    title: 'The Westlake Tennis Academy Photos',
    text: `The Westlake Tennis Academy website showcases photographs taken directly by the website developers. These photos feature the Academy's students and instructors engaging in various tennis-related activities, providing a glimpse into the vibrant community of learners at the Academy.

    All individuals featured in these photographs provided verbal consent for their use on the website, demonstrating the website developers' respect for their privacy and rights. As the developers took the photographs themselves, they have full legal rights to use them on the website without infringing on anyone's copyright. These photos are featured on both the Instructors Page and the Learn More Page of the website.`
  },
  {
    title: 'Adobe Photoshop',
    text: `We utilized Adobe Photoshop to create and edit images for our website, harnessing the software's advanced features such as layers, filters, and a diverse range of editing tools. This enabled us to produce high-quality and visually striking images that effectively communicated our brand message and values to our audience.

    Moreover, Photoshop proved to be an invaluable tool for creating and editing our company's logo and favicon. These visual elements are key components of our brand identity and recognition, and Photoshop provided us with the necessary tools to design these graphics with precision and care.
    
    Additionally, Photoshop played a vital role in optimizing our website's images. We were able to adjust the sizes of images and convert between different image file types with ease, ensuring that our website's images were fast-loading and optimized for an exceptional user experience.`
  },
  
  // Add more blocks as needed...
];

export const Citations = () => {
  const size = () => {
    if(window.innerWidth < 700){
        return true;
    }
    return false;
  }
  const [isExpanded, setIsExpanded] = useState(true);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

const [iphoneSize, setIphoneSize] = useState(() => size())
  if(iphoneSize){
    return (
      <div style={{ position: 'relative'}}>
            <div className='CitationsFullContainer'>
              <div className='phoneCitationsParagraphContainer' style={{marginBottom:'10%',marginTop:'5%', marginLeft: '5%', marginRight: '5%', borderRadius: 25, padding: '4%', backgroundColor: '#E3E3E3' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='arrow' onClick={toggleExpand} style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: isExpanded ? '10px solid #294539' : '10px solid #294539', transform: isExpanded ? 'rotate(180deg)' : 'rotate(90)deg)' }} />
                  <h1 className='CitationsTitleText railwayBold' style={{fontSize:30,  backgroundColor: isExpanded ? '#E3E3E3' : '#E3E3E3', marginLeft: 10 }}>citations</h1>
                </div>
                <hr className='phoneCitationsLine' />
                <div style={{ display: isExpanded ? 'block' : 'none' }}>
                {textBlocks.map((block) => (
                  <div key={block.title} className='CitationsBlock'>
                    <h4>{block.title}</h4>
                    <p className='CitationsParagraph railway'>{block.text}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
    );
  }
  else{
    return (
      <div className='CitationsFullContainer'> 
          <div className='CitationsTitleDiv'>
              <h1 className='CitationsTitleText railwayBold'>CITATIONS</h1>
          </div>
          <hr className='CitationsLine'/>
          <div className='CitationsParagraphContainer'>
              {textBlocks.map(block => (
              <div key={block.title} className='CitationsBlock'>
                <h4>{block.title}</h4>
                <p className='CitationsParagraph railway'>{block.text}</p>
              </div>
            ))}
          </div>
      </div>
    )
  }
}
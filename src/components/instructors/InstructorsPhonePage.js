
 import React from 'react'
 import "./instructorscss/phoneInstruct.css";
 import ethanPic from '../../images/DarkGreenEthan.png';
 import jai from '../../images/DarkGreenJai.png';
 import tarune from '../../images/DarkGreenSubmarine.png';
 import lucas from '../../images/DarkGreenLucas.png';
import { Footer } from '../Footer';

 export const InstructorsPhonePage = () => {

    const instructors = [
        {
          name: 'ETHAN KANG',
          image: ethanPic,
          description:
            'As the founder of Westlake Tennis Academy, Ethan is excited to use his extensive experience in tennis to improve the skills of aspiring tennis athletes. Ethan has started playing tennis since second grade and has since participated in numerous tournaments. He now holds the spot as the #2 starter for his varsity tennis team.',
          email: 'ethanKang532@gmail.com',
          phone: '(805) 660-3003',
        },
        {
            name: 'TARUN S.',
            image: tarune,
            email: 'tsub@gmail.com',
            phone: '(805) 235-0891',
            description: `Tarun Subramanian is an exceptional tennis player who has been honing his skills on the court since fourth grade. He is currently Ethan's doubles partner for the #2 varsity starter doubles team and his exceptional volleys make him a formidable doubles player, capable of outsmarting and outplaying his opponents.`
          },
          {
            name: 'LUCAS VAN P.',
            image: lucas,
            email: 'lk45@gmail.com',
            phone: '(805) 209-3904',
            description: `Lucas Van Parys is a talented varsity tennis athlete who has been engaged in this sport since the age of four. Lucas is a versatile player. He often plays as the #3 starter for doubles and  he has expertise in both doubles and competitive singles. Lucas is able to provide valuable and meaningful instruction to WTA’s students.`
          },
          {
            name: 'JAI GARG',
            image: jai,
            email: 'jsgarg314@gmail.com',
            phone: '(805) 558-5729',
            description: `Meet Jai Garg, a talented member of the Westlake High School Varsity tennis team. In just four years of playing the sport, Jai has managed to become a varsity athlete thanks to his exceptional on-court strategies. As an instructor at the Westlake Tennis Academy, Jai's knowledge and expertise will be an invaluable resource for our students.`
          }
      ];


     return (
            <div className="phonefullContainer" style={{ overflowX: 'scroll' }}>
            {instructors.map((instructor) => (
                <div key={instructor.name} className="phonegreyBox" style={{ borderRadius: '30px', marginRight: "5%",width: "100%", display: 'inline-block'  }}>
                <div className="phoneinstructBox" style={{ paddingTop: 3, paddingLeft: 20, paddingRight: 20, width: 300 }}>
                    <h2 className="phonerailwaySemiBold" style={{textAlign: "center"}}>
                    {instructor.name}
                    </h2>
                    <img style={{ width: '90%', height: '90%', marginLeft: '5%' }} src={instructor.image} alt={instructor.name} />

                    <div
                    className="phonedescriptFont"
                    style={{ paddingTop: 2, fontSize: '.9em', color: '#000000', textAlign: 'center' }}
                    >
                    <p style={{ marginBottom: 3 }} className="railway">
                        {instructor.description}
                    </p>
                    </div>
                    <div className="phonecontactFont" style={{ textAlign: 'center', paddingTop: 0, fontSize: '.7em' }}>
                    <p style={{ marginBottom: 0 }} className="railwayMedium">
                        <a
                        style={{ marginTop: 0, marginbottom: 0, color: '#000000', textDecoration: 'none' }}
                        href={`mailto:${instructor.email}`}
                        >
                        {instructor.email}
                        </a>
                        <br /> {instructor.phone}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>   
    )
}


 import React from 'react'
 import "./instructorscss/instruct.css";
 import ethanPic from '../../images/DarkGreenEthan.png';
 import jai from '../../images/DarkGreenJai.png';
 import tarune from '../../images/DarkGreenSubmarine.png';
 import lucas from '../../images/DarkGreenLucas.png';
import { Footer } from '../Footer';

 export const Instructors = () => {
     return (
         <div className="fullContainer" style = {{paddingTop: 75, height: window.innerHeight}}>
             <div className = "titleFont"style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 10, paddingBottom: 20}}>
                 <h1 className='railwayBold'> INSTRUCTORS </h1>
             </div>
                <div className = "greyBox" style={{borderRadius:'30px', marginBottom:50, width:1200}}>
                    <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>

                     <img style = {{width: "25%", height : "25%"}} src={ethanPic} alt="ethan pic"/>


                     <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 0}}>
                        
                        <div className = "titleAndContactBox">
                            <div>
                                    <h2 className='railwaySemiBold'> ETHAN KANG</h2>
                            </div>

                            <div className = "contactFont" style = {{paddingLeft: 30, paddingTop:5, fontSize:'1.2em'}}>
                                    <p className='railwayMedium'>Email: <a style = {{color: "#000000", textDecoration: "none"}}href = "mailto:ethanKang532@gmail.com">ethanKang532@gmail.com</a> ~ Phone: (805) 660-3003</p>                
        
                            </div>

                        </div>


                         <div className = "descriptFont" style = {{paddingTop: 20, fontSize:'1.2em'}}>
                         <p className='railway'>  As the founder of Westlake Tennis Academy, Ethan is excited to use his extensive experience in tennis to improve the skills of aspiring tennis athletes. Ethan has started playing tennis since second grade and has since participated in numerous tournaments. He now holds the spot as the #2 starter for his varsity tennis team.. With his instruction, members of WAC will gain one of the most valuable weapons in tennis on top of having a strong foundation in countering all types of tennis players. When he's not on the court, Ethan can be found competing in international piano competitions or participating in Future Business Leaders of America.

                         </p>
                         </div>

                        </div>
                     </div>
                </div>


                <div className = "greyBox" style={{borderRadius:'30px', marginBottom:50, width:1200}}>
                 <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30, borderRadius:"30px"}}>

                     <img style = {{width: "25%", height : "25%"}} src={tarune} alt="ethan pic"/>


                     <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 0}}>
                        
                        <div className = "titleAndContactBox">
                            <div>
                                    <h2 className='railwaySemiBold'> TARUN SUBRAMANIAN </h2>
                            </div>

                            <div className = "contactFont" style = {{paddingLeft: 30, paddingTop:5,fontSize:'1.1em'}}>
                                <p className='railwayMedium'>Email: <a style = {{color: "#000000", textDecoration: "none"}}href = "mailto:tsub@gmail.com">tsub@gmail.com</a> ~ Phone: (805) 235-0891</p>                
                            </div>

                        </div>


                         <div className = "descriptFont" style = {{paddingTop: 20, fontSize:'1.2em'}}>
                         <p className='railway'> Tarun Subramanian is an exceptional tennis player who has been honing his skills on the court since fourth grade. He is currently Ethan's doubles partner for the #2 varsity starter doubles team and his exceptional volleys make him a formidable doubles player, capable of outsmarting and outplaying his opponents. With his dedication and passion for the sport, Tarun is sure to provide high-quality instructions to members. Tarun is an avid member of Westlake High School’s orchestra. You can find him volunteering at Thousand Oaks’ local medical clinics, or playing basketball in his spare time.
                         </p>
                         </div>


                     </div>
                 </div>
            </div>


             

            

                <div className = "greyBox" style={{borderRadius:'30px', marginBottom:50, width:1200}}>
                 <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30, borderRadius:"30px"}}>

                     <img style = {{width: "25%", height : "25%"}} src={lucas} alt="ethan pic"/>


                     <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 0}}>
                        
                        <div className = "titleAndContactBox">
                            <div>
                                    <h2 className='railwaySemiBold'>LUCAS VAN PARYS</h2>
                            </div>

                            <div className = "contactFont" style = {{paddingLeft: 30, paddingTop:5, fontSize:'1.2em'}}>
                                    <p className='railwayMedium'>Email: <a style = {{color: "#000000", textDecoration: "none"}}href = "mailto:lk45@gmail.com">lk45@gmail.com</a> ~ Phone: (805) 209-3904</p>        
                            </div>

                        </div>


                         <div className = "descriptFont" style = {{paddingTop: 20}}>
                         <p className='railway'> Lucas Van Parys is a talented varsity tennis athlete who has been engaged in this sport since the age of four. Lucas is a versatile player. He often plays as the #3 starter for doubles and  he has expertise in both doubles and competitive singles. Lucas is able to provide valuable and meaningful instruction to WTA’s students. He is able to introduce a variety of unorthodox yet effective techniques. Off the court, Lucas enjoys working on his passion for scriptwriting and drawing. He attends journalism classes at Westlake and has even had several of his articles published in the school newspaper. 
                         </p>
                         </div>


                     </div>
                 </div>
                </div>

                <div className = "greyBox" style={{borderRadius:'30px', marginBottom:80, width:1200}}>
                 <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>

                     <img style = {{width: "25%", height : "25%"}} src={jai} alt="ethan pic"/>


                     <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 0}}>
                        
                        <div className = "titleAndContactBox">
                            <div>
                                    <h2 className='railwaySemiBold'>JAI GARG</h2>
                            </div>

                            <div className = "contactFont" style = {{paddingLeft: 30, paddingTop:5, fontSize:'1.2em'}}>
                                    <p className='railwayMedium'>Email: <a style = {{color: "#000000", textDecoration: "none"}}href = "mailto:jsgarg314@gmail.com">jsgarg314@gmail.com</a> ~ Phone: (805) 558-5729</p>
        
                            </div>

                        </div>


                         <div className = "descriptFont" style = {{paddingTop: 20}}>
                         <p className='railway'> Meet Jai Garg, a talented member of the Westlake High School Varsity tennis team. In just four years of playing the sport, Jai has managed to become a varsity athlete thanks to his exceptional on-court strategies. As an instructor at the Westlake Tennis Academy, Jai's knowledge and expertise will be an invaluable resource for our students. With his emphasis on playing smart and making strategic decisions on the court, our students will learn to think critically and creatively about their game, ultimately improving their overall performance. Off the court Jai loves learning about computer science and programming.
                         </p>
                         </div>


                     </div>
                 </div>
                </div>


        </div>
      
    )
}

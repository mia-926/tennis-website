import React from 'react'
import "./instructorscss/instruct.css";
import ethanPic from '../../images/ethan.png';

export const Instructors = () => {
    return (
        <div className="fullContainer" style = {{paddingTop: 75, height: window.innerHeight}}>
            <div className = "titleFont"style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 10, paddingBottom: 20}}>
                <h1> INSTRUCTORS </h1>
            </div>
            <div className = "greyBox" >
                <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                   
                    <img style = {{width: "30%", height : "30%"}} src={ethanPic} alt="ethan pic"/>
                   
                        
                    <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                        <h2> ETHAN KANG </h2>
                        <div style = {{paddingTop: 20}}>
                        <p> As the founder of Westlake Tennis Academy, Ethan is excited to use his extensive experience in tennis to improve the skills of aspiring tennis athletes. Ethan has started playing tennis since second grade and has since participated in numerous tournaments. He now holds the spot as the #2 starter for his varsity tennis team. Ethan is known for his incredibly fast and precise serves and is recognized by his teammates for consistently acing almost all of his opponents. With his instruction, members of WAC will gain one of the most valuable weapons in tennis on top of having a strong foundation in countering all types of tennis players. When he's not on the court, Ethan can be found competing in international piano competitions or participating in Future Business Leaders of America.
                        </p>
                        </div>
                        

                    </div>
                </div>



            </div>
            


            <div className = "greyBox" >
                <div className = "instructBox" style = {{paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                   
                    <img style = {{width: "30%", height : "30%"}} src={ethanPic} alt="ethan pic"/>
                   
                        
                    <div className = "titleAndTextBox" style = {{paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                        
                        
                        <h2> TARUN SUBRAMANIAN </h2>
                        <div style = {{paddingTop: 20}}>
                        <p> Tarun Subramanian is an exceptional tennis player who has been honing his skills on the court since fourth grade. He is currently Ethan's doubles partner for the #2 varsity starter doubles team and his exceptional volleys make him a formidable doubles player. Capable of outsmarting and outplaying his opponents. With his dedication and passion for the sport, Tarun is sure to provide high-quality instructions to members. </p>
                        </div>
                        

                    </div>
                </div>



            </div>


        </div>
    )

}
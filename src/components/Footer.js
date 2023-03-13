import React from 'react';


export const Footer = () => {
  return (
    <div style = {{height: 400, background: "#294539", color:"white"}}>
       <div style={{height:30, width:window.innerWidth, backgroundColor:"#e9e9e9"}}></div>
       <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"center", height:300, paddingTop:100}}> {/*row flex box with everything */}
       <div style = {{display:"flex", flexDirection:"column",justifyContent:"space-around"}}> {/* left colum */}
          <h2 style={{fontSize:25, fontWeight:400}}>WESTLAKE HIGH SCHOOL</h2>
          <h2 style={{fontSize:25,fontWeight:400}}>100 N LAKEVIEW CANYON ROAD</h2>
          <h2 style={{fontSize:25,fontWeight:400}}>WESTLAKE VILLAGE, CA, 91362</h2>
       </div>
       <div style = {{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>{/* contact */}
        <h5 style={{fontWeight:200, paddingBottom:50}}>CONTACT</h5>
        <h5 style={{fontWeight:200, paddingBottom:10}}>wta@gmail.com</h5>
        <h5 style={{fontWeight:200, paddingBottom:10}}>(805) 630-6881</h5>
       </div>
       <div style = {{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>{/* instructors */}
       <h5 style={{fontWeight:200, paddingBottom:50}}>INSTRUCTORS</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Ethan Kang</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Tarun Subramnian</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Jai Garg</h5>
       </div>
       <div style = {{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>{/* web team */}
       <h5 style={{fontWeight:200, paddingBottom:50}}>WEB TEAM</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Jai Garg</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Mia Lesser</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Spencer Morga</h5>
       </div>
       <div style = {{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>{/* find us on */}
       <h5 style={{fontWeight:200, paddingBottom:50}}>FIND US ON</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Instragram</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>Facebook</h5>
      <h5 style={{fontWeight:200, paddingBottom:10}}>YouTube</h5>
       </div>
      </div>
    </div>
  );
}
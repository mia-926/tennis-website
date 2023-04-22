export const Dropdown = () => {
    return(
            <div style={{height:50, width:window.innerWidth, backgroundColor: "#294539", position:'fixed', bottom:0, borderTopLeftRadius:"50px", borderTopRightRadius:"50px"}}>
              <div style={{width:'20px', height:'4px', backgroundColor:"white", position:"absolute", transform:"rotate(130deg)", right:36, marginTop:25}}></div>
              <div style={{width:'20px', height:'4px', backgroundColor:"white",  position:"absolute",transform:"rotate(-130deg)", right:25, marginTop:25}}></div>
            </div>
    )
}
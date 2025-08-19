import React from 'react'
import bannerimg from "../assests/banner-home.webp"

function Banner3() {
  return (
    <div className="banner" style={{width:"100%",height:"200px",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <img src={bannerimg} alt="banner"  style={{width:"80%",height:"150px"}}/>
    </div>
  )
}

export default Banner3
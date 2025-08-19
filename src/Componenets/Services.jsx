import React from 'react'
import img1 from "../assests/img1.jpg"
import img2 from "../assests/img1.jpg"
import img3 from "../assests/img1.jpg"
import img4 from "../assests/img1.jpg"
import img5 from "../assests/img1.jpg"
import img6 from "../assests/img1.jpg"
import img7 from "../assests/img1.jpg"
import img8 from "../assests/img1.jpg"
import img9 from "../assests/img1.jpg"
import img10 from "../assests/img1.jpg"
import img11 from "../assests/img1.jpg"
import img12 from "../assests/img1.jpg"

const data = [
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you ",
img:img1
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you .",
img:img2
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img3
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you ",
img:img4
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img5
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img6
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img7
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img8
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you.",
img:img9
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you ",
img:img10
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you",
img:img11
},
{
title:"loarem",
desc:"The most stylish celeb Instagram looks you ",
img:img12
},

]
function Services() {
  return (
   <div className="container mt-5">
    <h2 className="mb-3">Services </h2>
        <hr style={{ height: "6px", background:"black", border: "none" }} />
    <div className="row">
        {data.map((item,index)=>(
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card  flex-row">
                <img src={item.img} alt="" style={{width:"100px",height:"80px",objectFit:"cover",borderRadius:"10px"}} />
                
                <div className="card-text" style={{fontSize:"0.9rem", fontWeight:"bold"}}>
                    <span>{item.desc}</span>
                </div>
            </div>
        </div>
        ))}
    </div>
   </div>
  )
}

export default Services
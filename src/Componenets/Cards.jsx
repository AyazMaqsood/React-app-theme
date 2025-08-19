import React from 'react'
import img1 from "../assests/istockphoto-1785548065-612x612.jpg"
import img2 from "../assests/istockphoto-1785548065-612x612.jpg"
import img3 from "../assests/istockphoto-1785548065-612x612.jpg"
import img4 from "../assests/istockphoto-1785548065-612x612.jpg"
const data = [
    {
        title:"loarem",
        desc:"The most stylish celeb Instagram looks you missed this week fashion..",
        img:img1
    },
    {
        title:"loarem",
        desc:"The most stylish celeb Instagram looks you missed this week fashion..",
        img:img2
    },
    {
        title:"loarem",
        desc:"The most stylish celeb Instagram looks you missed this week fashion..",
        img:img3
    },
    {
        title:"loarem",
        desc:"The most stylish celeb Instagram looks you missed this week fashion..",
        img:img4
    },
]
function Cards() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">About</h2>
        <hr style={{ height: "6px", background:"black", border: "none" }} />
        <div className="row">
            {data.map((items,index) =>(
                <div className="col-md-3 mt-2 mb-4">
                <div className="card">
                  <img src={items.img}  alt="" />
                  <div className="card-text" style={{fontSize:"0.9rem", fontWeight:"bold"}}>
                    <span>{items.desc}</span>
                </div>
                  </div>
                </div>
        ))}
        </div>
    </div>
  )
}

export default Cards
import React from "react";
import Img1 from "../assests/download.jpg";
import Img2 from "../assests/download.jpg";
import Img3 from "../assests/download.jpg";
import Img4 from "../assests/download.jpg";
import Img5 from "../assests/download.jpg";
import Img6 from "../assests/download.jpg";

const data = [
  {
    Img: Img1,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eius, repellendus molestiae eligendi maxime quod rem aliquid itaque",
  },
  {
    Img: Img2,
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eius, repellendus molestiae eligendi maxime quod rem aliquid itaque",
  },

  {
    Img: Img3,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img4,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img5,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img6,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
];
function Home() {
  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-md-6 d-flex flex-column pt-3">
          <img src={Img1} alt="" className="w-100 mb-3" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim
            inventore rerum, soluta blanditiis quidem mollitia, veniam fuga
            illum odit, harum totam est nulla iure ipsa eligendi quis pariatur
            deserunt. Doloremque veritatis obcaecati explicabo, dicta suscipit
            quaerat, necessitatibus blanditiis minima laudantium nesciunt eaque.
            Asperiores, facilis accusamus autem hic beatae cupiditate doloribus
            suscipit. Commodi autem at deleniti vel earum iure alias. Similique
            odio voluptatibus numquam, nisi sit, explicabo corporis ipsum
            corrupti eveniet, maxime sapiente. Velit, labore culpa. Nulla iusto
            iure veniam at, obcaecati aperiam quibusdam placeat perferendis
            vitae, consequuntur, delectus assumenda! Sit sed temporibus nobis
            sapiente Similique odio voluptatibus numquam, nisi sit, explicabo
            corporis ipsum corrupti eveniet, maxime sapiente. Velit, labore
            culpa. Sit sed temporibus nobis sapiente Similique odio voluptatibus
            numquam, nisi sit, explicabo corporis ipsum corrupti eveniet, maxime
            sapiente. Velit, labore culpa.corporis ipsum corrupti eveniet, maxime sapiente. Velit, labore
            culpa. Sit sed temporibus nobis sapiente Similique odio voluptatibus
            numquam, nisi sit, explicabo corporis ipsum corrupti eveniet, maxime
            sapiente. Velit, labore culpa.culpa. Sit sed temporibus nobis sapiente Similique odio voluptatibus
            numquam, nisi sit, explicabo corporis ipsum corrupti eveniet, maxime
            sapiente. Velit, labore culpa.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-6 mt-2 p-2" key={index}>
                <div className="card">
                  <img src={item.Img} alt="" />
                  <p>{item.desc}</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

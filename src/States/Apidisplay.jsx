import React, { useState } from "react";

export default function Apidisplay() {
  const [first, setFirst] = useState({
    articles: [],
  });

  const getdata = async () => {
    let url = "https://newsapi90.p.rapidapi.com/search?q=tesla";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "31e0de4266msh9f5e1217434aa65p19bdb7jsn7f9b8044c727",
        "X-RapidAPI-Host": "newsapi90.p.rapidapi.com",
      },
    });
    let newdata = await data.json();
    console.log(newdata);
    let articles = newdata.articles || [];
    setFirst({ articles });
  };

  return (
    <div className="container">
      <button className="btn btn-dark my-3" onClick={getdata}>
        Load Data
      </button>
      <div className="row">
        {first.articles.length > 0 ? (
          first.articles.map((ele, index) => (
            <div className="col-sm-3 mb-3" key={index}>
              <div className="card-text-start">
                <div className="card-img-top">
                  <img
                    src={ele.urlToImage}
                    alt="news"
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{ele.title}.....</h4>
                    <p className="card-text">{ele.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No articles loaded yet...</p>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react'

export default function Apicards() {
  const [first, setFirst] = useState({
    articles: [],
  })

  const getdata = async () => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fcbbaccc2c05412e939e68a1fb297e78"
    let data = await fetch(url)
    console.log(data)
    let newdata = await data.json()
    let articles = newdata.articles
    setFirst({
      articles: articles,
    })
  }

  return (
    <div className="container">
      <button className="btn btn-dark my-3" onClick={getdata}>
        Load Data
      </button>
      <div className="row">
        {first.articles.map((ele, index) => (
          <div className="col-sm-3 mb-3" key={index}>
          <div className="card-text-start">
              <div className="card-img-top">
              <img
                src={ele.urlToImage}
                alt="news"
                className='img-fluid'
              />
              <div className="card-body">
                <h4 className="card-title">{ele.title.slice(0,20)}.....</h4>
                <p className="card-text">{ele.description.slice(0,100)}</p>
                <a href={ele.url} className='btn btn-dark'>
                    Read More......
                </a>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

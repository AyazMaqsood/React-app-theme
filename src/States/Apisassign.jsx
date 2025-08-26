import React from 'react'

export default function Apisassign() {
    const data = [
    {
      source: {
        id: null,
        name: "Cointelegraph",
      },
      author: "Cointelegraph by Tarang Khaitan",
      title: "Elon Musk’s ‘America Party’ plans have stalled: Report",
      description:
        "Elon Musk will reportedly back Vice President JD Vance in the 2028 presidential elections should he choose to run, The Wall Street Journal reports.",
      url: "https://cointelegraph.com/news/elon-musk-s-plans-for-america-party-have-stalled-report",
      urlToImage:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2025-06/0197afe9-8474-7d40-af04-b91faf2f7f13",
      publishedAt: "2025-08-20T06:49:10Z",
      content:
        "Tech billionaire Elon Musk has quietly shifted his attention away from forming his America Party, a political party he proposed creating last month after splitting from the White House.\r\nMusk wants t… [+2825 chars]",
    }
]

    const data2 = [ {
      source: {
        id: null,
        name: "Notebookcheck.net",
      },
      author: "Daniel Zlatev",
      title:
        "Tesla intros cheaper Model Y leases with zero down payment for certified used vehicles",
      description:
        "As with new Tesla vehicle leases, the new payment setup for certified preowned Model Y and Model 3 units includes a purchase option at the end of the lease period. The new lease deal is available for select inventory vehicles.",
      url: "https://www.notebookcheck.net/Tesla-intros-cheaper-Model-Y-leases-with-zero-down-payment-for-certified-used-vehicles.1091977.0.html",
      urlToImage:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/tesla-model-y-in-motion96.jpg",
      publishedAt: "2025-08-20T06:34:00Z",
      content:
        "Tesla said that it will be gradually phasing out the Model Y APR financing deal depending on demand, and it has now bumped the promotional 3.49% to a higher 3.99% interest rate indeed. \r\nSince the cu… [+1530 chars]",
    },
    {
      source: {
        id: null,
        name: "Rg.ru",
      },
      author: null,
      title:
        "Tesla Model 3 прошла обратное обновление: ей вернули рычаги поворотников",
      description:
        "Компания Tesla объявила о возвращении подрулевых переключателей поворотников на электромобилях Model 3.",
      url: "https://rg.ru/2025/08/20/tesla-model-3-proshla-obratnoe-obnovlenie-ej-vernuli-rychagi-povorotnikov.html",
      urlToImage:
        "https://cdnstatic.rg.ru/uploads/images/2025/08/20/2025-08-20_093704_207.jpg",
      publishedAt: "2025-08-20T06:30:03Z",
      content:
        ": Model 3 . - Steering Wheel Turn Signal Lever Modification. 2,5 . ( 350 ). Tesla.\r\n Model Y Juniper. Model 3, 7 2025 . .\r\n, 2023 Model 3 (Highland). Model S Model X, .\r\n . , Enhance Auto S3XY Stalks… [+7 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Wille Wilhelmsson",
      title: "Kirby Air Riders släpps i november",
      description:
        "Blir exklusivt för Switch 2\n\n\n\n\n\n\n\n\n\n\n\n\nUnder gårdagen körde Nintendo en större presentation av Kirby Air Riders, en efterföljare till Gamecube-spelet Kirby Air Ride som släpptes 2003.\n\nKirby Air Riders är ett racingspel där banorna går över både land, vatten…",
      url: "https://feber.se/spel/kirby-air-riders-slapps-i-november/482483/",
      urlToImage: "https://static.feber.se/article_images/62/55/16/625516.jpg",
      publishedAt: "2025-08-20T06:30:00Z",
      content:
        "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n4 idag\r\n27 igår\r\nTipsa!\r\nSkaffa Feber+\r\nNy säsong av Fallout kommer i december\r\nLucy och Ghoul letar efter Hank i New Vegas\r\n45.8°\r\n0\r\nAnnons från \r\nA… [+25012 chars]",
    }
]
  return (
    <>
              <div className="contaier container-fluid ">
                    {data.map((ele,index) => (
                        <div className="row border p-5">
                      <div className="col-6  "> 
                      <h3 className="mt-2">{ele.title}</h3>
                      <small>{ele.description}</small>
                      <br />
                      <a href={ele.url} className='btn btn-dark mt-4'>Read More...</a>
                      </div>
                      <div className="col-6">
                        <img src={ele.urlToImage} alt= "" style={{width:"500px", marginLeft : "35px"}}

                         />
                      </div>
                      </div>
                    ))}
                
              </div>
              <div className="container mt-5">
                <div className="row">
                    {data2.map((ele,index) => (
                         <div className="col md-3">
                            <div className="mt-2">
                                <img src={ele.urlToImage} alt="" 
                                style={{width:"350px",height:"300px"}}/>
                                <div className="mt-2"><h3>{ele.title.slice(0,30)}</h3></div>
                                <small>{ele.description}</small>
                                <br />
                                <a href={ele.url} className='btn btn-dark mt-4'>Read More...</a>
                            </div>
                         </div>
                    ))}
                </div>
              </div>

     </>
  )
}

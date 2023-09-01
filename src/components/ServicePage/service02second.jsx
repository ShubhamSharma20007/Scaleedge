import React from 'react'

const service02second = () => {
  const contentsecond = [
    {
      title: "Web Compatibility",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
    },
    {
      title: "Easy Navigation",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
    },
    {
      title: "Blog Integration",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
    },
    {
      title: "Product and Content Visuality",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
    },
    {
        title: "Fast Loading Speed",
        subtitle:
          "We help ambitious businesses like yours generate more profits to be building driving web traffice",
        dataaos: "fade-up",
        dataoffset: 200,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",
        points: "Today, I am getting so  tired ",
      },
      {
        title: "Usable Forms",
        subtitle:
          "We help ambitious businesses like yours generate more profits to be building driving web traffice",
        dataaos: "fade-up",
        dataoffset: 200,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",
        points: "Today, I am getting so  tired ",
      },
  ];
  return (
    <div>
       <div className="ser2-first-container col-md-12">
          <h2 className="section-title">Key Features of Our  <br />Web Development Solutions </h2>
          <div className="ser2-subtitle-context col-md-8">
          <p>Learn about our comprehensive web development facilities, which will give you access to state-of-the-art technologies, responsive design, smooth integration, and robust functionality.</p>
          </div>


          <div className="row col-md-12 sectwo-subcontainer mt-5">
          {contentsecond.map((item, index) => {
            return (
              <div
                className="col-md-5 sectwo-left"
                key={index}
                data-aos={item.dataaos}
                data-aos-offset={item.dataoffset}
                data-aos-easing={item.easing}
                data-aos-duration={item.Reactduration}
                data-aos-once={item.repeatation}
              >
                <div className="sectwo-icon col-md-1">
                  <span>
                    <i class="fa-solid fa-signal"></i>
                  </span>
                </div>
                <div className="sectwo-content col-md-10">
                  <h3 className="sectwo-title">{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="sectwo-link">
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        
    </div>
  )
}

export default service02second

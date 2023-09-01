import React from 'react'
import Usableitem from '../Everyuseable/usableitem';
const service02third = () => {
    const contentsecond = [
        {
          title: "Requirement Gathering & Analysis",
          subtitle:
            "We help ambitious businesses like yours generate more profits to be building driving web traffice",
          dataaos: "fade-up",
          dataoffset: 200,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
         
        },
        {
          title: "Designing",
          subtitle:
            "We help ambitious businesses like yours generate more profits to be building driving web traffice",
          dataaos: "fade-up",
          dataoffset: 200,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          
        },
        {
          title: "Development",
          subtitle:
            "We help ambitious businesses like yours generate more profits to be building driving web traffice",
          dataaos: "fade-up",
          dataoffset: 200,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          
        },
        {
          title: "Testing",
          subtitle:
            "We help ambitious businesses like yours generate more profits to be building driving web traffice",
          dataaos: "fade-up",
          dataoffset: 200,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
         
        },
        {
            title: "Deployment",
            subtitle:
              "We help ambitious businesses like yours generate more profits to be building driving web traffice",
            dataaos: "fade-up",
            dataoffset: 200,
            easing: "ease-in-sine",
            duration: 100,
            repeatation: "false",
           
          },
          {
            title: "Maintenance & Support",
            subtitle:
              "We help ambitious businesses like yours generate more profits to be building driving web traffice",
            dataaos: "fade-up",
            dataoffset: 200,
            easing: "ease-in-sine",
            duration: 100,
            repeatation: "false",
            
          }
      ];
      const PointsContext =[
        {
            points: "Enhanced Online Presence"
        },
        {
            points: "Competitive Advantage"
        },
        {
            points: "Improved Accessibility"
        },
        {
            points: "Increased Customer Engagement"
        },
        {
            points: "Cost Effectiveness"
        },
        {
            points: "Data-driven Insights "
        },
        {
            points:'Enhanced Online Presence'
        },
        {
            points: 'Scalability and Flexibility'
        }
      ]
  return (
    <div>
       <div>
        <Usableitem title ="Benefits of Web Development Services for Business " para = "Web development services whether website or web app development offers numerous benefits for businesses and individuals alike. In terms of enabling growth, customer engagement, and operational efficiency"
        listvalue={PointsContext}/>
       <div className="ser2-first-container col-md-12">
          <h2 className="section-title">Result-Oriented   <br />Web Development Process We Follow  </h2>
          <div className="ser2-subtitle-context col-md-8">
          <p>At ScaleEdge Solution, we work on a pre-defined and structured, comprehensive web development process to deliver excellent results. Our process includes the following steps.
</p>
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
                    {/* <a href="#">
                      Choose Detail <i class="fa-solid fa-arrow-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default service02third

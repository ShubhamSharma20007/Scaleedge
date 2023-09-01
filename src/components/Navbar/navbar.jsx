import React, { useEffect } from "react";
import "../Blog/blog"
import NavImg from "../../assets/images/scaleedge.webp";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import Flower from "../../assets/images/flowerimg.jpg"
import "../About/about"
import scalewhitelogo from "../../assets/images/scaleedge-white-logo.webp"
import Imgwing from "../../assets/images/yellowwing.webp"
import "../ServicePage/service01"
import "../ServicePage/service02"
import "../ServicePage/service03"
import idea from "../../assets/images/idea.webp"
import roundblue from "../../assets/images/roundblue.webp"
import "../Contact/contact"
export default function navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
 document.addEventListener('DOMContentLoaded',function(){
  const closebtn = document.getElementById('close');
  const openbtn = document.getElementById('bars-icon');
  openbtn.addEventListener('click',openNav)
  closebtn.addEventListener('click',closeNav)
  

 })

  useEffect(() => {
    function handlesize() {
      const fullysidebar = document.querySelector(".aling-value");
      const navitem = document.querySelectorAll(".dropdown");
      const mobilenav = document.querySelector(".mobile-nav");
      navitem.forEach(function (value) {
        if (window.innerWidth < 1150) {
          fullysidebar.style.display = "none";
          value.style.display = "none";
          mobilenav.style.display = "block";
         
        

        } else {
          fullysidebar.style.display = "block";
          value.style.display = "block";
          mobilenav.style.display = "none";
        

        }
      });
    }

    handlesize();
    window.addEventListener("resize", handlesize);

    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);

  useEffect(() => {
    const allContainer = document.querySelectorAll(['.navbar-container', '.main-page-container', '.cate-main-container', '.main-page-container-second', '.country-server-container', '.server-main-container', '.socialmedia-main-container', '.solution-main-container', '.testimonial-main-container', '.footer-small', '.footer-small']);
    const side = document.getElementById('mySidenav');
  
    allContainer.forEach((ele) => {
      ele.addEventListener('click', () => {
        if (side.style.width >= '200px') {
          side.style.width = '0px';
        }
      else{
        side.style.width == '300px'
      }
      });
    });
  });


  useEffect(()=>{
    const circleboll =  document.getElementById('circle-round')
    function Mouseboll(event){
      circleboll.style.transform = `translate(${event.clientX  }px , ${event.clientY  }px)`
    }
    window.addEventListener('mousemove',Mouseboll)

    return ()=>{
      window.removeEventListener('mousemove',Mouseboll)
    }
  },[])


  useEffect(()=>{
 
    window.addEventListener('scroll',function(){
      const updownbtn =  document.querySelector('.updown')
      updownbtn.classList.toggle('sticky-content', window.scrollY >20)

    })
  })

  useEffect(()=>{
    window.addEventListener('scroll',function(){
      const navhead = this.document.querySelector('.navbar-container')
      navhead.classList.toggle('sticky-content-second',window.scrollY > 200)
   

    })
  })



  const ScrollUp = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    const CloseSide = () => {
      const side = document.getElementById('mySidenav');
      const links = document.querySelectorAll('.links');
  
      const handleClick = () => {
        side.style.width = '0px';
      };
  
      links.forEach((link) => {
        link.addEventListener('click', handleClick);
      });
  
      return () => {
        links.forEach((link) => {
          link.removeEventListener('click', handleClick);
        });
      };
    };
  
    CloseSide();
  }, []);
  return (
    <>

<section className="navbar-container col-md-12 " id="top-nav-section" >
{/* <img src={idea} alt="" className="img-fluid idea-img"  /> */}
<img src={roundblue} alt="round-icon" title='round-icon' className='roundblue img-fluid' />
<div id="circle-round"></div>
    <div className="row " id="nav-context" >
      <div className="left-nav-container  ">
       <div className="wingimg-container">
       <img src={Imgwing} className="imgwing img fluid" alt="design-wing" title="design-wing" />
       </div>
       <div className="fluid-class img-fluid">
        <img
          src={NavImg}
          alt="company-logo"
          className="img-fluid"
          title="company-logo"
        />
        </div>
      </div>
      <div className="right-nav-container ">
        <ul className="nav-unorder col-md-12">
          <div className="dropdown">
            <li className="home dropbtn">
            <Link to="/">Home</Link>
            </li>
           
          </div>

          <div className="dropdown">
            <li className="home dropbtn">
              <Link to="/about" >About</Link>
            </li>
           
          </div>

          <div className="dropdown">
            <li className="home dropbtn">
              Service <i className="fa-solid fa-angles-down"></i>
            </li>

            <div className="dropdown-content mb-2">
              <Link to="/service01" >Service1</Link>
              <Link to="/service02">Service2</Link>
              <Link to="/service03" >Service3</Link>
              <Link to="/service04">Service4</Link>
            </div>
          </div>

          <div className="dropdown">
            <li className="home dropbtn">
              <Link to='/blog' >Blog</Link>
            </li>
            
          </div>
          <div className="dropdown">
            <li className="home dropbtn">
              <Link to="/contact">Contact</Link>
            </li>
            
          </div>
          <p className="query-section dropdown query-section-btn "><Link to="/contact" >Get A Query</Link></p>
          <i
            className="fa-solid fa-bars fa-2x nav-bar-logo fluid-container" id="bars-icon"
            onClick={openNav}
          ></i>
         

          <div id="mySidenav" className="sidenav">
            <div className="aling-value">
              <p
                className="closebtn"
                id="close"
                onClick={closeNav}
                style={{ cursor: "pointer" }}
              >
                &times;
              </p>
              <div className="empty">
              <img src={scalewhitelogo} alt="scaleedge-side-logo" title="scaleedge-side-logo" className="img-fluid mb-2" />
              </div>
              <div className="sidenav-para">
                <p>
                  Suspendisse interdum consectetur libero id. Fermentum
                  leo vel orci porta non. Euismod viverra nibh cras
                  pulvinar suspen.
                </p>
                <hr className="hr-tag" />
                <div className="sidebar-title">
                  <p>Get In Touch</p>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i className="fa-regular fa-envelope fa-2x compartment "></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                 
                      <strong>Email </strong>
                    </p>
                    <p>
                      <strong> Shubham@gmail.com </strong>
                    </p>
                  </div>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i className="fa-solid fa-phone fa-2x compartment"></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                  
                      <strong> Phone </strong>
                    </p>
                    <p>
                  
                      <strong>7073830702 </strong>
                    </p>
                  </div>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i
                      className="fa-solid fa-location-dot fa-2x compartment"
                      style={{ padding: "10px 13px" }}
                    ></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                      <strong> Location </strong>
                    </p>
                    <p>
                      <strong> 7073830702 </strong>
                    </p>
                  </div>
                </div>
                <hr className="hr-tag" />
                <ul className="social col-md-12" >
                    <a href=""> <i className="fab fa-facebook-f compartment" style={{ padding: "10px 13px" }}></i></a>
                     <a href=""> <i className="fab fa-twitter compartment"></i> </a>
                     <a href=""> <i className="fab fa-instagram insta compartment"></i></a>
                     <a href=""><i className="fa-brands fa-linkedin-in compartment"></i></a>
                 
                </ul>
                
              </div>
              <div className="flower">
                <img src={Flower} alt="" />
              </div>
            </div>
             
            <div className="mobile-nav">
              <p
                className="closebtn"
                onClick={closeNav}
                style={{ cursor: "pointer" }}
              >
                &times;
              </p>
              <div id="accordion">
                <div class="card">
                  <div class="card-header card-header-manual " >
                    <p class="mb-0 mobile-nav-para">
                      <button class="btn btn-link">
                      <Link to="/" className="text-light links" >Home</Link>
                      </button>
                   
                    </p>
                    {/* <i
                      className="fa-solid fa-plus"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                    ></i>
                    */}
                  </div>

                  {/* <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                      </ul>
                    </div>
                  </div> */}
                </div>
                <div class="card">
                  <div class="card-header card-header-manual" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">
                    <p class="mb-0 mobile-nav-para">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <Link to="/about" className="text-light links">About</Link>
                      </button>
                    </p>
                  </div>
               
                </div>
                <div class="card">
                  <div class="card-header card-header-manual " id="headingThree" data-toggle="collapse" data-target="#collapseThree" >
                    <p class="mb-0 mobile-nav-para">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       Services
                      </button>
                    </p>
                    <i
                      className="fa-solid fa-plus"
                      data-toggle="collapse" data-target="#collapseThree"
                    ></i>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                    <ul>
                        <li><Link to="/service01" className="links">Service1</Link></li>
                        <li><Link to="/service02" className="links">Service2</Link></li>
                        <li><Link to="/service03" className="links">Service3</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                <div className="sidenav-para">
                <div className="sidebar-title">
                  <p className="m-4">Get In Touch</p>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i className="fa-regular fa-envelope fa-2x compartment "></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                 
                      <strong>Email </strong>
                    </p>
                    <p>
                      <strong> Shubham@gmail.com </strong>
                    </p>
                  </div>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i className="fa-solid fa-phone fa-2x compartment"></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                      
                      <strong> Phone </strong>
                    </p>
                    <p>
                     
                      <strong>7073830702 </strong>
                    </p>
                  </div>
                </div>
                <div className="contact-sidebar-section col-md-12">
                  <div className="col-md-3">
                    <i
                      className="fa-solid fa-location-dot fa-2x compartment"
                      style={{ padding: "10px 13px" }}
                    ></i>
                  </div>
                  <div className="label-section col-md-9">
                    <p>
                      <strong> Location </strong>
                    </p>
                    <p>
                      <strong> 7073830702 </strong>
                    </p>
                  </div>
                </div>
                <hr className="hr-tag" />
                <ul className="social col-md-12" >
                  <li>
                    <a
                      href="https://www.facebook.com/OneKlickTechnoRenewable"
                      target="_blank"
                      rel="noopener"
                      title="facebook"
                      data-aos="zoom-out"
                      data-aos-once="true"
                      
                    >
                      <i
                        className="fab fa-facebook-f"
                        style={{ padding: "10px 13px" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/OneklickTechno"
                      target="_blank"
                      rel="noopener"
                      title="twitter"
                      data-aos="zoom-out"
                      data-aos-once="true"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/oneklicktechno/"
                      target="_blank"
                      rel="noopener"
                      title="instagram"
                      data-aos="zoom-out"
                      data-aos-once="true"
                    >
                      <i className="fab fa-instagram insta"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/oneklicktechno"
                      data-aos="zoom-out"
                      target="_blank"
                      rel="noopener"
                      title="linkedin"
                      data-aos-once="true"
                    >
                      <i className="fa-brands fa-linkedin-in "></i>
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>


            
          </div>

        </ul>
        
      </div>
      
    </div>
  

</section>
<div className="updown" id="nav-context" onClick={ScrollUp}>
         <i
            className="fa-solid fa-arrow-up-from-bracket fa-2x nav-bar-logo fluid-container" 
           
          ></i>
</div>
    </>
  );
}


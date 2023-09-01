import React from "react";
import Usableitem from "../Everyuseable/usableitem";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { useEffect } from "react";
import "../ServicePage/service04.css";
const service04 = () => {
  
  useEffect(()=>{
    const wrap =  document.querySelector('.wrapper')
    const side = document.getElementById('mySidenav');
    wrap.addEventListener('click',function(){
      if (side.style.width >= '200px') {
        side.style.width = '0px';
      }
    else{
      side.style.width == '300px'
    }
    })
  })
  useEffect(() => {
    const elements = document.querySelectorAll(".collapse-elem");

    function openClose() {
      for (let i = 0; i < elements.length; i++) {
        const panel = elements[i].nextSibling;

        let panelVisible;

        elements[i].addEventListener("click", function () {
          if (panelVisible) {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
          panelVisible = !panelVisible;
        });
      }
    }

    openClose();
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", openClose);
      });
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <Usableitem title="Service Details"></Usableitem>
      <div className="row  service-det-container ">
        <div className="col-md-8 servicedet-col-1 ">
          <img
            src="https://ordainit.com/react/sorex/static/media/service-details-1.fb970fcf415921f90c79.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4 servicedet-col-2  ">
          <h3>All Service</h3>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Your business goals</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Quality of an existing</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Agency best service</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Dedicate product best</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Team can help achieve</p>
          </div>
        </div>
      </div>
      <div className="servicedet-content col-md-10 ">
        <p>
          will reenergize your ome and enhance your life. From everyday
          housekeeping to routine cleanings, our professional this to It uses a
          dictionary of 2200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonableis
          therefore always free from repetition, injected humour,sure there
          isn’t anything embarrassing hidden in the middle of text. reenergize
          your ome and enhance your life. From everyday housekeeping to routine
          cleanings, our professiona uses a dictionary of 2200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable.
        </p>
        <p>
          will reenergize your ome and enhance your life. From everyday
          housekeeping to routine cleanings, our professional this to It uses a
          dictionary of 2200 Latin words, combined with a handful of model
          sentence structures
        </p>
      </div>
      <div className="row servicedet-qualities">
        <div className="col-md-3 servicedet-qualities-col">
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Great Depression.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Best Collection.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Great Depression.</p>
          </div>
        </div>
        <div className="col-md-3 servicedet-qualities-col">
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Expertise & Innovation.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Service Industrial.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Expertise & Innovation.</p>
          </div>
        </div>
        <div className="col-md-3 servicedet-qualities-col">
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Leading Industrial.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Great Depression.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Leading Industrial.</p>
          </div>
        </div>
        <div className="col-md-3 servicedet-qualities-col">
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Best Service.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Expertise & Innovation.</p>
          </div>
          <div className="qual">
            <i className="fa-solid fa-check"></i>
            <p>Great Depression.</p>
          </div>
        </div>
      </div>
      <div className="row img-row ">
        <img
          src="https://ordainit.com/react/sorex/static/media/service-details-2.bd3d6af293df55245f12.jpg"
          alt=""
        />
      </div>
      <div className="row service-det-row-2-col">
        <div className="col-md-6 service-det-row-2-col-1">
          <h1>Save This Managing About The Media For Business Elevate.</h1>
        </div>
        <div className="col-md-6 service-det-row-2-col-1">
          <p>
            We generate Lorem Ipsum which looks reasonableis therefore always
            free from repetition, injected humour,sure there isn’t anything
            embarrassing hidden in the middle of text. reenergize your ome and
            enhance your life.
          </p>
        </div>
      </div>

      <div className="row collapse-elem-section">
        <div className="row collapsible">
          <div className="collapse-elem">
            <div>
              <i className="fa-solid fa-check capsule-check"></i>
              <p>How does the 30-day work?</p>
            </div>

            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="collapse-one">
            <p>
              Business tailored it design help ambitious businesses like yours
              generate more building driving web traffice management & support
              services profits to be business agency elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="row collapsible">
          <div className="collapse-elem">
            <div>
              <i className="fa-solid fa-check capsule-check"></i>
              <p>How does the 30-day work?</p>
            </div>

            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="collapse-one">
            <p>
              Business tailored it design help ambitious businesses like yours
              generate more building driving web traffice management & support
              services profits to be business agency elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="row collapsible">
          <div className="collapse-elem">
            <div>
              <i className="fa-solid fa-check capsule-check"></i>
              <p>How does the 30-day work?</p>
            </div>

            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="collapse-one">
            <p>
              Business tailored it design help ambitious businesses like yours
              generate more building driving web traffice management & support
              services profits to be business agency elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="row collapsible">
          <div className="collapse-elem">
            <div>
              <i className="fa-solid fa-check capsule-check"></i>
              <p>How does the 30-day work?</p>
            </div>

            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="collapse-one">
            <p>
              Business tailored it design help ambitious businesses like yours
              generate more building driving web traffice management & support
              services profits to be business agency elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="row collapsible">
          <div className="collapse-elem">
            <div>
              <i className="fa-solid fa-check capsule-check"></i>
              <p>How does the 30-day work?</p>
            </div>

            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="collapse-one">
            <p>
              Business tailored it design help ambitious businesses like yours
              generate more building driving web traffice management & support
              services profits to be business agency elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default service04;

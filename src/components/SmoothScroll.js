import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"
import "aos/dist/aos.css";

var overscrolloptions={
    enable :true,
    effect :'bounce',
    damping :0.14,
    maxOverscroll:150
}

var options = {
  damping: 0.07,
  plugins:{
        overscroll:{...overscrolloptions}
  }

};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.body, options);

    return ()=>{
        if(Scrollbar) Scrollbar.destroy(document.body)
    }
  }, []);
  return null;
};

export default SmoothScroll;

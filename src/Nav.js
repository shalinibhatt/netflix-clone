//rfce
import React from "react";
import "./Nav.css";

function Nav() {
  
  // useEffect(()=>{
  //     window.addEventListener("scroll",()=>{
  //         if(window.scrollY>100){
  //           handleShow(true);
  //         }else handleShow(false);
  //     });
  //     return ()=>{window.removeEventListener("scroll");};
  // },[])
  return (
    // <div className={`nav ${show && "nav_black"}`}><img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" alt='logo' />
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png"
        alt="logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix_avatar"
      />
    </div>
  );
}

export default Nav;


import React from "react";
import { Link } from "react-router";
import "./Components/Navbar.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
function Profile() {
  const handleClick =(event) =>{
    if(event.target.style.color === "white"
)
{
    event.target.style.color = "skyblue";
  }
  else
      event.target.style.color = "white";
};
  return (
    
    <div className="main-container">
      <nav className="navbar">
        <h1>Welcome</h1>
      <div className="abc">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </nav>
     <div className="dec">
    <h1 class="hero-title">
  <span class="muted">Welcome </span>
  <span class="coders"><span class="coders-fill">Coders :</span></span><br/>I'm a Maryam Abdul Rasheed!</h1>
     <h2> Frontend Developer !</h2>
     <p onClick={handleClick}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap <br/>into electronic typesetting, remaining essentially unchanged.</p>
     <button className="mal">Here Me</button>
     <button className="mar">Let's Talk</button>
     <div className="icons">
< div className="ads"><FaSquareFacebook style={{width:"40px", height: "40px", marginLeft: "5px", marginTop: "20px", borderRadius: "5px",background: "linear-gradient(135deg, #0f2027, #203a43, #0f2027, #1e3c72, #2a5298)"
 }}/></div>
< div className="amc"><FaSquareYoutube  style={{ width:"40px", height: "40px", marginLeft: "5px", marginTop: "20px", borderRadius: "5px", background: "linear-gradient(135deg, #0f2027, #203a43, #0f2027, #1e3c72, #2a5298"
}} /></div>
<div className="avc"> <FaSquareInstagram style={{ width:"40px", height: "40px", marginLeft: "5px", marginTop: "20px", borderRadius: "5px", background: "linear-gradient(135deg, #0f2027, #203a43, #0f2027, #1e3c72, #2a5298"
}} /></div>
</div>

</div>

      <div className="cube-section">
        <div className="cube">
          <div className="face front">Front</div>
          <div className="face back">Back</div>
          <div className="face right">Right</div>
          <div className="face left">Left</div>
          <div className="face top">Top</div>
          <div className="face bottom">Bottom</div>
        </div>
      </div>
      </div>
  );
}

export default Profile;
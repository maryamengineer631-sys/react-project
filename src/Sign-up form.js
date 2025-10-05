import React from "react";
import { useState } from "react";
import './Components/Form.css';
function Signup(){
  const[name, setname] = useState("")
   const[nameerr, setnameerr]    = useState("")
   const[password, setpassword] = useState("")
   const[passerr, setpasserr]       = useState("")
    const[email, setemail] = useState("")
   const[emailerr, setemailerr]       = useState("")
   const[phoneNumber, setphoneNumber] = useState("")
   const[phoneNumbererr, setphoneNumbererr] = useState("")
   const[gender, setgender]  = useState("")
  const handlename = (e)=>{
    setname(e.target.value);
    (name.length <= 3)?setnameerr("Name Greater Than 3"):setnameerr("OKK")
  }
  const handlepassword = (e)=>{
    setpassword(e.target.value);
    (password.length <=8)?setpasserr("greater than 8 characters"):setpasserr("OKk")
  }
  const handleemail = (e)=>{
    setemail(e.target.value);
    (!email.includes("@"))?setemailerr("Invalid Email"):setemailerr("Valid Email")
  }
  const handlephoneNumber = (e)=>{
    setphoneNumber(e.target.value);
    (!phoneNumber.startsWith("03"))?setphoneNumbererr("number must start with 03"):setphoneNumbererr("Valid")
  }
  const handlegender = (e)=>{
  setgender(e.target.value);
  }
  const handlesubmit = ()=>{
  console.log  ("Name:", name);
    console.log   ("Password:", password);
   console.log  ("Email:", email);
   console.log  ("PhoneNumber:", phoneNumber);
   console.log  ("Gender:", gender);
    alert("Form Submitted");


  }
  
  return(
<>
<div  className="box">
<h2 className="dec">Creat Your Account</h2>
<hr  />
<hr />
<h1 className="abc">Sign Up</h1> 
<hr  className="dac"/> 
 <div className="Container" >
<label><b>Name:</b></label>
<br></br>
<input type="text" value={name} onChange={handlename}></input>
 <p>{nameerr}</p>
 <br></br> 
 <label><b>Password:</b></label>
 <br></br>
<input type="password" value={password} onChange={handlepassword}></input>
 <p>{passerr}</p> 
 <br></br>
 <label><b>Email:  </b></label>
 <br></br>
<input type="email" value={email} onChange={handleemail}></input>
 <p>{emailerr}</p>
 <br></br>
 <label><b>Phone:</b></label>
 <br></br>
<input type="tel" value={phoneNumber} onChange={handlephoneNumber}></input>
 <p>{phoneNumbererr}</p>
 <br></br>
 <label><b>Select Gender:</b> </label>
 <select value={gender}  onChange={handlegender}>
 <option id="Female">Female</option>
  <option id="Male">Male</option>
</select>
<br></br><br></br>
<button  className="mybtn"onClick={handlesubmit}>Sign Up</button>
<p style={{textAlign: "center"}}>Already have an account?
<a href="/login" style={{color: "#007BFF", marginLeft: "5px"}}>Login
</a>
</p>
</div>
</div>
  </>
);
}
export default Signup;
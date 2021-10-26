import React from "react";
import './style_register.css'

const Register = () => {
  return(
    <div>
      <section className="register" >
        <div className="register-container">
            <div className="register-button-box">
                <div className="register-button-box--btn"></div>
                <button type="button"className="toggle-btn" onclick="login()">Log In</button>
                <button type="button"className="toggle-btn" onclick="Register()">Register</button>
            </div>
            
            <form id="register" className="input-group">
                <input type="text" className="input-field" placeholder="Username" required/>
                <input type="email" className="input-field" placeholder="Email" required/>
                <input type="text" className="input-field" placeholder="Enter Password" required/>
                <input type="checkbox" className="chech-box" /> <span>I agree to the term and conditions </span>
                <button type="submit" className="submit-btn">Register</button>            
                
            </form>
        </div>
      </section>
    </div>
  );
}

export { Register };
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SignUpAlert from '../ui/SignUpAlert';

export default function SignUpForm() {
  
    const [phone, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type,setType]=useState(false);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    function addPlusIfMissing(text) {
        if (!text.startsWith('+')) {
          return '+' + text;
        } else {
          return text;
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setType(false);
        if (!phone.trim().match(/^[0-9]*$/)) {
            return toast.warn("insert a valid phone number.");
          }
          else if (!username.trim().match("^[a-zA-Z]+(?: [a-zA-Z]+)*$")){
            return toast.warn("insert a valid username.");
          }
          else if (!userEmail.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
           return toast.warn("insert a valid Email.");
          }
          else if (!password.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
           return toast.warn("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.");
          }
          else if (password !==confirmPassword){
           return toast.warn("Passwords does not match.");
          }
          else {
        try {
            const response = await axios.post('http://localhost:5247/api/Accounts/Api/V1/Account/SignUp', {
                "username": username,
                "userEmail": userEmail,
                "password": password,
                "phone": phone,
                "balance": 0
            });
            console.log('Signup successful:', response.data);
            setType(true);
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error signing up:', error);
            setModalIsOpen(true);
        }
        }    
    };

  
    return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <div data-w-id="5c6eb5400253237162de2bd8">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" className="navbar w-nav"><Link to="#" className="w-inline-block"><img
                    src="images/mango black bg.png"
                    loading="lazy" width="108" sizes="108px" alt=""
                    /></Link>
        </div>
        <section>
            <div className="div-block-8">
                <div className="div-block-9"><Link to="/login" className="link-block w-inline-block"><img
                            src="images/left-arrow.png"
                            loading="lazy" width="22" sizes="22px" alt=""/>
                        <div className="text-block-6">Go Back</div>
                    </Link></div>
            </div>
        </section>
        <div className="text-block-7">Sign Up</div>
        <div className="form-block w-form">
            <form onSubmit={handleSubmit} data-name="Get In Touch Form" name="wf-form-Get-In-Touch-Form" id="userEmail-form" method="get"
                className="login-form" data-wf-page-id="6612759caa3661d029e2ece4"
                data-wf-element-id="8852d4f2-6216-f765-8ab0-654bda743318">
                    <label for="phone-2" className="field-label">Phone
                    Number</label><input className="text-field w-input" maxlength="256" name="phone" data-name="phone"
                    placeholder="Enter your phone number" type="tel" id="phone-2" value={phone} onChange={(e) => setPhoneNumber(e.target.value)} required="" />
                    <label for="username"
                    className="field-label">Username</label>
                    <input className="text-field w-input" maxlength="256"
                    name="username" data-name="username" placeholder="Enter your username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    required="" />
                    <label for="userEmail-5" className="field-label">Email address</label>
                    <input className="text-field w-input" maxlength="256" name="userEmail" data-name="userEmail"
                    placeholder="Enter your email address" type="userEmail" id="userEmail-5" value={userEmail} onChange={(e) => setEmail(e.target.value)} required="" />
                    <label for="password"
                    className="field-label">Password</label>
                    <input className="text-field w-input" maxlength="256"
                    name="password" data-name="password" placeholder="Enter your password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    required="" />
                    <label for="confirm_password" className="field-label">confirm password</label>
                    <input
                    className="text-field w-input" maxlength="256" name="confirm_password" data-name="confirm_password"
                    placeholder="Confirm password" type="password" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required="" />
                <div className="div-block-2">
                    <input type="submit" data-wait="Please wait..." className="button w-button"
                        value="Submit" /></div>
            </form>
            <div className="status-message cc-success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="status-message cc-error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
            </div>
        </div>
        <section className="section-2">
            <div className="div-block-3">
                <div className="text-block">Already have an account?</div><Link to="/login" className="link">Login</Link>
            </div>
        </section>
    </div>
    <div className="div-block-4">
        <div className="text-block-5">Powered by<br />‍</div><img
            src="images/mango black bg.png"
            loading="lazy" width="90" sizes="90px" alt=""
            className="image-2" />
        <div className="divider"></div>
    </div>
    {modalIsOpen && (
            <SignUpAlert type={type} onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
</div>

  )
}

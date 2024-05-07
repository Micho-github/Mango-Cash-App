import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function LoginForm(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5247/api/Accounts/Api/V1/Account/Login', {
                "userEmail": email,
                "password": password
            });
            if (response.status === 200 && response.data.message === "Response Successfull") { // More robust success check
                console.log('Login successful:', response.data);
                const id = response.data?.data.id;
                if (id) {
                  console.log('User ID:', id);
                  toast.success("Login Successfull, redirecting you...")
                  navigate(`/${id}`); // Navigate to user profile with ID
                } else {
                  console.warn('User ID not found in response. Check API behavior or response structure.');
                }
              } else if (response.status === 404) { // Handle unauthorized
                console.error('Login failed: Invalid credentials.');
              } else {
                console.error('Unexpected error:', response); // Handle unknown errors
              }
        } catch (error) {
            toast.error("Wrong Email or Password.")
            console.error('Error logging in:', error);
        }
    };


  return (
    <div data-w-id="5c6eb5400253237162de2bd8" className="body">
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
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" className="navbar w-nav"><Link to="#" className="w-inline-block"><img
                    src="images/mango black bg.png"
                    loading="lazy" width="108" sizes="108px" alt=""
                    /></Link>
        </div>
    <div>
        <div className="w-layout-blockcontainer w-container">
            <div className="div-block"><img
                    src="images/Main - Logo.png"
                    loading="lazy" width="273" alt="" className="image" /></div>
        </div>
        <div className="form-block w-form">
            <form onSubmit={handleSubmit} data-name="Get In Touch Form" name="wf-form-Get-In-Touch-Form" id="email-form" method="get"
                className="login-form" data-wf-page-id="6612759caa3661d029e2ece6"
                data-wf-element-id="73556c75-296c-783d-2dac-830321d23af5">
                    <label for="Email-4" className="field-label">Email address</label
                    ><input className="text-field w-input" maxlength="256" name="Email-4" data-name="Email 4"
                    placeholder="Enter your email" type="email" id="Email-4" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
                    <label for="Email-3"
                    className="field-label">Password</label>
                    <input className="text-field w-input" maxlength="256" name="password"
                    data-name="password" placeholder="Enter your password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required="" />
                <div className="div-block-2"><input type="submit" data-wait="Please wait..." className="button w-button"
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
                <div className="text-block">Don&#x27;t have account?</div><Link  to="/signup" className="link">Sign Up</Link>
            </div>
        </section>
    </div>
    <div className="section">
        <div className="container"></div>
    </div>
    <div className="section">
        <div className="container"></div>
    </div>
    <div className="section">
        <div className="container">
            <div className="section-heading-wrap">
                <div data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb03"  className="label cc-light">What we
                    are best at</div>
                <h2 data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb05" className="heading">Our Services</h2>
            </div>
            <div className="w-layout-grid our-services">
                <div id="w-node-cb4222c2-e34c-f4e1-7796-79bb93a2fb15-29e2ece6"
                    data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb15">
                    <div>
                        <div className="div-block-6"><img
                                src="images/security_image.jpg"
                                loading="lazy" width="300" data-w-id="2cd470e7-5fd7-7370-c7bf-0c0bc1ce88f9" alt=""
                                sizes="(max-width: 479px) 79vw, 300px" className="image-4" /></div>
                    </div>
                    <div>
                        <div data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb18" className="paragraph-bigger">Velocity in
                            Transactions</div>
                    </div>
                    <div data-w-id="efb6afba-5f38-cb9f-7d16-e6c05dc50795" className="divider"></div>
                    <div data-w-id="ef8cb640-2e0a-9e6e-6ab5-3c8c403f4854" className="text-block-3">Experience rapid money
                        transfers with our efficient platform, ensuring swift delivery of funds wherever you need them,
                        without delays or complications.</div>
                </div>
                <div id="w-node-cb4222c2-e34c-f4e1-7796-79bb93a2fb08-29e2ece6"
                    data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb08">
                    <div className="div-block-5"><img
                            src="images/speed_image.jpg"
                            loading="lazy" width="300" data-w-id="97f8fc2e-e82b-2192-c07b-0c4870fabec3" alt=""
                            sizes="(max-width: 479px) 79vw, 300px" className="image-3" /></div>
                    <div>
                        <div data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb0b" className="paragraph-bigger">Ensuring Trust
                        </div>
                    </div>
                    <div data-w-id="1ad79e99-9d6b-0187-df51-c0b12cc287af" className="divider"></div>
                    <div data-w-id="a4aad79a-f0a6-f953-1e10-c2d152e12dd9" className="text-block-2">High-security measures,
                        including robust encryption and verification, ensure your transactions are protected from
                        threats, prioritizing your peace of mind.</div>
                </div>
                <div id="w-node-cb4222c2-e34c-f4e1-7796-79bb93a2fb22-29e2ece6"
                    data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb22">
                    <div className="div-block-7"><img
                            src="images/reliable_image.jpg"
                            loading="lazy" width="300" data-w-id="a16de1c1-1422-323e-d542-f01bd68ba9df" alt=""
                            sizes="(max-width: 479px) 79vw, 300px" className="image-5" /></div>
                    <div data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb25" className="paragraph-bigger">Dependable
                        Transactions</div>
                    <div data-w-id="cb4222c2-e34c-f4e1-7796-79bb93a2fb29" className="divider"></div>
                    <div data-w-id="b9cafdf4-25ec-9eca-1d92-cb41b81b2c94" className="text-block-4">Count on our platform for
                        consistent and trustworthy money transfers, delivering funds securely and promptly whenever you
                        need them.</div>
                </div>
            </div>
        </div>
    </div>
    <section className="section-3">
        <div className="div-block-4">
            <div className="text-block-5">Powered by<br/></div><img
                src="images/mango black bg.png"
                loading="lazy" width="90" sizes="90px" alt=""
                className="image-2" />
            <div className="divider"></div>
        </div>
    </section>
</div>
  )
}


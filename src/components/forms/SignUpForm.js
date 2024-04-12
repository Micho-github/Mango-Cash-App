import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpForm() {
  return (
    <div>
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
            <form data-name="Get In Touch Form" name="wf-form-Get-In-Touch-Form" id="email-form" method="get"
                className="login-form" data-wf-page-id="6612759caa3661d029e2ece4"
                data-wf-element-id="8852d4f2-6216-f765-8ab0-654bda743318"><label for="phone-2" className="field-label">Phone
                    Number</label><input className="text-field w-input" maxlength="256" name="phone" data-name="phone"
                    placeholder="Enter your email" type="tel" id="phone-2" required="" /><label for="username"
                    className="field-label">Username</label><input className="text-field w-input" maxlength="256"
                    name="username" data-name="username" placeholder="Enter your username" type="text" id="username"
                    required="" /><label for="email-5" className="field-label">Email address</label><input
                    className="text-field w-input" maxlength="256" name="email" data-name="email"
                    placeholder="Enter your email" type="email" id="email-5" required="" /><label for="password"
                    className="field-label">Password</label><input className="text-field w-input" maxlength="256"
                    name="password" data-name="password" placeholder="Enter your password" type="password" id="password"
                    required="" /><label for="confirm_password" className="field-label">confirm password</label><input
                    className="text-field w-input" maxlength="256" name="confirm_password" data-name="confirm_password"
                    placeholder="Confirm password" type="password" id="confirm_password" required="" />
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
</div>
  )
}

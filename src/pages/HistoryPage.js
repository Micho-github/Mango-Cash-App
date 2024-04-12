    import React from 'react'
    import { Link } from 'react-router-dom'
    
    export default function HistoryPage() {
      return (
        <div data-w-id="5c6eb5400253237162de2bd8">
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" className="navigation w-nav">
        <div className="navigation-wrap"><Link to="/" className="logo-link w-nav-brand"><img
                    src="images/mango black bg.png"
                    width="108" sizes="108px"
                    alt="" className="logo-image" /></Link>
            <div className="menu">
                <section role="navigation" className="navigation-items w-nav-menu"><Link to="/history" aria-current="page"
                        className="navigation-item w-nav-link w--current">History</Link><Link to="#"
                        className="navigation-item w-nav-link">coming</Link></section>
                <div className="menu-button w-nav-button"><img
                        src="images/white menu.png"
                        width="31" data-w-id="18638a64-158e-82a5-ef35-2151b27a4e34"
                        sizes="(max-width: 767px) 31px, 100vw" alt=""
                        className="menu-icon" /></div>
            </div><Link to="/login" className="button cc-contact-us w-inline-block">
                <div>Logout</div>
            </Link>
        </div>
    </div><Link to="/" className="link-block w-inline-block"><img
            src="images/left-arrow.png"
            loading="lazy" width="22" sizes="22px" alt=""/>
        <div className="text-block-6">Go Back</div>
    </Link>
    <h1 className="heading-2">Transactions History</h1>
    <div>
        <div>
            <div className="w-layout-blockcontainer container-3 w-container"><img
                    src="images/deposit.png"
                    loading="lazy" width="Auto" sizes="50px" alt=""
                    className="image-8-copy" />
                <div className="w-layout-blockcontainer container-5 w-container">
                    <div className="text-block-15">Deposit</div>
                    <div className="text-block-15-copy">11 April 2024, 11:00 AM</div>
                </div>
                <div className="receive_amount">+ $100.00</div>
            </div>
            <div className="w-layout-blockcontainer container-3 w-container"><img
                    src="images/withdraw.png"
                    loading="lazy" width="Auto" sizes="50px" alt=""
                    className="image-8-copy-copy" />
                <div className="w-layout-blockcontainer container-5 w-container">
                    <div className="text-block-15">Received from Steve</div>
                    <div className="text-block-15-copy">11 April 2024, 11:00 AM</div>
                </div>
                <div className="receive_amount">+ $80.00</div>
            </div>
            <div className="w-layout-blockcontainer container-3 w-container"><img
                    src="images/withdraw.png"
                    loading="lazy" width="Auto" sizes="50px" alt=""
                    className="image-9-copy" />
                <div className="w-layout-blockcontainer container-5 w-container">
                    <div className="text-block-15">Withdraw</div>
                    <div className="text-block-15-copy">10 April 2024, 8:00 PM</div>
                </div>
                <div className="withdraw_amount">- $50.00</div>
            </div>
            <div className="w-layout-blockcontainer container-3 w-container"><img
                    src="images/withdraw.png"
                    loading="lazy" width="Auto" sizes="50px" alt=""
                    className="image-9-copy-copy" />
                <div className="w-layout-blockcontainer container-5 w-container">
                    <div className="text-block-15">Sent to David</div>
                    <div className="text-block-15-copy">10 April 2024, 2:00 PM</div>
                </div>
                <div className="withdraw_amount">- $20.00</div>
            </div>
        </div>
    </div>
    <div className="section cc-home-wrap"></div>
    <div className="section">
        <div className="container"></div>
    </div>
    <div className="section-copy-copy">
        <section className="section-3">
            <div className="div-block-4">
                <div className="text-block-5">Powered by<br />‍</div><img
                    src="/images/mango black bg.png"
                    loading="lazy" width="90" sizes="90px" alt=""
                    className="image-2" />
                <div className="divider"></div>
            </div>
        </section>
    </div>
</div>

      )
    }
    
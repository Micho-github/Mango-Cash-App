    import React from 'react'
    import { Link, useParams } from 'react-router-dom'
    import { useState, useEffect } from 'react'
    export default function HomePage() {

        const { id } = useParams();

        const [account, setAccount] = useState(null);

        useEffect(() => {
            const fetchAccount = async () => {
                try {
                    const response = await axios.get(`http://localhost:8800/Api/V1/Account/${id}`);
                    console.log(response.data);
                    setAccount(response.data);
                } catch (error) {
                    console.error("Error fetching account: ", error);
                }
            };
                fetchAccount();
            }, [id]); 

      return (
        <div data-w-id="5c6eb5400253237162de2bd8">
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease"
            data-easing2="ease" role="banner" className="navigation w-nav">
            <div className="navigation-wrap"><Link to="/" className="logo-link w-nav-brand"><img
                        src="images/mango black bg.png"
                        width="108" sizes="108px"
                        alt="" className="logo-image" /></Link>
                <div className="menu">
                    <section role="navigation" className="navigation-items w-nav-menu"><Link to="/history"
                            className="navigation-item w-nav-link">History</Link><Link to="#"
                            className="navigation-item w-nav-link">coming</Link></section>
                    <div className="menu-button w-nav-button"><img
                            src="/images/white menu.png"
                            width="31" data-w-id="18638a64-158e-82a5-ef35-2151b27a4e34"
                            sizes="(max-width: 767px) 31px, 100vw" alt=""
                            className="menu-icon" /></div>
                </div><Link to="/login" className="button cc-contact-us w-inline-block">
                    <div>Logout</div>
                </Link>
            </div>
        </div>
        <div>
            <div className="div-block-12">
                <section className="section-4">
                    <div className="div-block-13">
                        <h1 className="heading-2">Your Balance is</h1>
                        <div className="w-layout-hflex flex-block-2">
                            <div className="text-block-10">$</div>
                            <div className="text-block-9">{account.Balance}</div>
                            <div className="div-block-18">
                                <article data-w-id="c00aae38-d372-dc2d-2993-f5d87a50149a" 
                                    className="div-block-19"><img
                                        src="/images/view.png"
                                        loading="lazy" width="28" sizes="28px" alt=""
                                        className="image-10" />
                                </article>
                                <div data-w-id="4a6ca22f-769a-8a90-31f4-9276ee58cfaf" 
                                    className="div-block-20"><img
                                        src="/images/hide.png"
                                        loading="lazy" width="28" sizes="28px" alt=""
                                        className="image-11" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="div-block-14">
                <div className="text-block-11">What would you like to do with it?</div>
                <section>
                    <div className="w-layout-hflex flex-block-5">
                        <div className="div-block-15"><Link to="#" className="link-block-2 w-inline-block"><img
                                    src="images/send.png"
                                    loading="lazy" sizes="150px"
                                    alt="" className="image-7" />
                                <div className="text-block-12">Send</div>
                            </Link></div>
                        <div className="div-block-16"><Link to="#" className="link-block-3 w-inline-block"><img
                                    src="images/deposit.png"
                                    loading="lazy" sizes="150px"
                                    alt="" className="image-8" />
                                <div className="text-block-13">Deposit</div>
                            </Link></div>
                        <div><Link to="#" className="link-block-4 w-inline-block"><img
                                    src="images/withdraw.png"
                                    loading="lazy" sizes="150px"
                                    alt="" className="image-9" />
                                <div className="text-block-14">Withdraw</div>
                            </Link></div>
                    </div>
                </section>
            </div>
        </div>
        <div className="section-copy-copy">
            <section className="section-3">
                <div className="div-block-22"><img
                        src="images/history.png"
                        loading="lazy" width="60"
                        sizes="(max-width: 479px) 21vw, (max-width: 767px) 60px, (max-width: 991px) 8vw, 70px"
                        alt=""
                        className="image-12" />
                    <h1 className="heading-5">Recent transactions</h1>
                </div>
            </section>
            <div className="div-block-21"></div>
        </div>
        <div className="div-block-23">
            <div className="w-layout-blockcontainer container-3 w-container"><img
                    src="images/deposit.png"
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
    
      
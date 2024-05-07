    import React from 'react'
    import { useEffect, useState } from 'react'
    import { Link, useParams} from 'react-router-dom'
    import axios from 'axios';
    import Transaction from '../components/Transaction';
import HomeAlert from '../components/ui/HomeAlert';
    
    export default function HistoryPage() {
        const { id } = useParams();

        const [transactions, setTransactions] = useState([]);
        const [AccountFound,SetAccountFound] = useState(true);
        const compareDates = (a, b) => {
            return new Date(b.date) - new Date(a.date);
          };
          
        useEffect(() => {
            const fetchAccount = async () => {
                try {
                    const response = await axios.get(`http://localhost:5247/api/Accounts/Api/V1/Account/${id}`);
                    SetAccountFound(true);
                } catch (error) {
                    SetAccountFound(false);
                    console.error("Error fetching account: ", error);
                }
            };
                fetchAccount();
            }, [id]); 
            useEffect(() => {
                const fetchTransactions = async () => {
                  try {
                    const response = await axios.get(`http://localhost:5247/api/Transactions/Api/V1/Transaction/${id}`);
                    console.log(response.data);
                    const sortedTransactions = response.data.data.sort(compareDates);
                    setTransactions(sortedTransactions);
                  } catch (error) {
                    console.error("Error fetching transactions: ", error);
                  }
                };
              
                fetchTransactions();
              }, [id]);

      return (
        <div data-w-id="5c6eb5400253237162de2bd8">
            {AccountFound==true ? (
            <>
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" className="navigation w-nav">
        <div className="navigation-wrap"><Link to={`/${id}`} className="logo-link w-nav-brand"><img
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
    </div><Link to={`/${id}`} className="link-block w-inline-block"><img
            src="images/left-arrow.png"
            loading="lazy" width="22" sizes="22px" alt=""/>
        <div className="text-block-6">Go Back</div>
    </Link>
    <h1 className="heading-2">Transactions History</h1>
    

    <div>
    {transactions.length > 0 && (
       <div>
         {transactions.map((transaction) => (
           <Transaction key={transaction.id} transaction={transaction} />
         ))}
       </div>
     )}
     {transactions.length === 0 && <p>No transactions found.</p>}
    </div>
    </>):(
    <>
    <HomeAlert/>
    </>)}
            </div>
    
    );}
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout/Layout";
import SignUpPage from "./pages/SignUpPage";
import HistoryPage from "./pages/HistoryPage";
import 'react-toastify/dist/ReactToastify.css';
function App(){
    return(
        <Layout>
        <BrowserRouter>
            <Routes>
            <Route path='/:id' element={<HomePage/>}/>
            <Route path='/transactions/:id' element={<HistoryPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>   
        </BrowserRouter>
        </Layout>
    );
}

export default App;
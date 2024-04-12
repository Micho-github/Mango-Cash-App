import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout/Layout";
import SignUpPage from "./pages/SignUpPage";
import HistoryPage from "./pages/HistoryPage";

function App(){
    return(
        <Layout>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/history' element={<HistoryPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>   
        </BrowserRouter>
        </Layout>
    );
}

export default App;
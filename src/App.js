import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Layout from "./components/layout/Layout";
import SignUpPage from "./pages/SignUpPage";

function App(){
    return(
        <Layout>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>   
        </BrowserRouter>
        </Layout>
    );
}

export default App;
import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import { DashboardPage } from "../pages/AdmDashboard";
import { AdmProvider } from "../providers/AdmContext/AdmContext";
import RegisterPage from "../pages/Register";


function RoutesMain() {
    return ( 
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>}  />
            <Route path='/register' element={<RegisterPage/>} />
            
            <Route path='/adm/dashboard' element={<AdmProvider><DashboardPage/></AdmProvider>}/>
        </Routes>
     );
}

export default RoutesMain;
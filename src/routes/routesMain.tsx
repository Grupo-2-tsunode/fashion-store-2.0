import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import { DashboardPage } from "../pages/AdmDashboard";
import { AdmProvider } from "../providers/AdmContext/AdmContext";
import RegisterPage from "../pages/Register";
import { PublicRout } from "./PublicRouts";
import { ProtectedRout } from "./PrivateRouts";


function RoutesMain() {
    return ( 
        <Routes>
            <Route element={<PublicRout/>}>
                <Route path='/' element={<HomePage/>} />
                <Route path='/login' element={<LoginPage/>}  />
                <Route path='/register' element={<RegisterPage/>} />
            </Route>

            <Route element={<ProtectedRout/>}>
                 <Route path='/adm/dashboard' element={<AdmProvider><DashboardPage/></AdmProvider>}/>
            </Route>
            
        </Routes>
     );
}

export default RoutesMain;
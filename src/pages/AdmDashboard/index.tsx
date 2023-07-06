import { HeaderAdmin, FooterAdmin,ButtonDashboard, StyledMain,IndiceMessage, BoxButton } from "./style";
import logo from '../../assets/logo.png'
import { useState } from "react";
import ListProduct from "../../components/ListProducts";
export const DashboardPage = () => {

        const [flap, setFlap] = useState(true)

    return (<>
        <HeaderAdmin>  <img src={logo} alt="" /> </HeaderAdmin>
        <StyledMain>
            <div>
                <BoxButton> 
                    <ButtonDashboard onClick={()=>{setFlap(true)}}> INICIO </ButtonDashboard> 
                    <ButtonDashboard onClick={()=>{setFlap(false)}}> PRODUTOS </ButtonDashboard>
                </BoxButton>
                {flap? <IndiceMessage>
                    <h1>PAINEL DO ADMINISTRADOR</h1>
                    <p>Seja bem vindo, administrador</p>
                </IndiceMessage>: <ListProduct/>}
            </div>
        </StyledMain>
        <FooterAdmin> <p> Todos os direitos reservados - Kenzie Academy Brasil </p> </FooterAdmin>
    </>
    )
}
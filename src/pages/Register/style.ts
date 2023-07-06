import styled from "styled-components"

export const HeaderTemporario = styled.header`
    width: 100vw;
    height: 10vh;
`

export const StyledMain = styled.main`
   
    height: 75vh;
    padding-right: 10vw;
    padding-left: 10vw;

`

export const StyledContainer = styled.div`
    width: 80vw;
    display: flex;
    height: 100%;
    
    .boxOne{
        width: 60%;
        height: 100%;
    
        img{
            width: 100%;
            height: 100%;
        }
    }
    .boxTwo{
        padding-top: 1%;
        display: flex;
        height: 100%;
        padding-right:  1%; 
        padding-left: 1%;
        width: 40%;
        
        form{
                display: flex ;
                flex-direction: column;
                gap: 15px;
                font-family: 'Oswald';
            p{
                font-family: 'Roboto';
                font-size: 20px;
                font-weight: 400;
            }

            span{
                font-family: 'Oswald';
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 2px;
            }

            h3{
                font-family: 'Oswald';
                font-size: 55px;
                font-weight: 500;
              
            }
            div{
                display: flex;
                flex-direction: row;
                gap: 15px;
                align-items: center;
                
                .buttonRegister{
                    height: 40px; 
                    margin-left: 68%; 
                    letter-spacing: 2px;
                    background-color: var(--color-black);
                    color: var(--color-white);
                    padding: 10px;
                    font-family: Roboto;
                    font-size: 12px;
                    font-weight: 500;
                   
                }
            }
        }
    }
`


export const HeaderAdmin = styled.header`
    display: flex;
    height: 8vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const FooterAdmin = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
    color: var(--color-white);
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 500;  
`

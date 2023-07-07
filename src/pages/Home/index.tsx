import { ButtonStyled } from '../../styles/ButtonStyled';
import {StyledBannerSection} from './StyledBannerSection';
import {ListProducts} from './ProductList';
import {StyledListSection} from './StyledListSection';
import {StyledMain} from './StyledMain';
import {Footer} from '../../components/Footer/Footer';
import {Header} from '../../components/Header/Header';
import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import { Cart } from '../../components/Cart';


export const HomePage = () => {

  const {isCartOpen} = useContext(GlobalContext)

  return (
    <>
    {isCartOpen ? <Cart></Cart> : null}
    <Header/>
    <StyledMain>
      <StyledBannerSection>
        <div>
          <img src='public/Rectangle2.svg' alt='img' />
        </div>
        <div>
          <h1>KENZIE FASHION STORE</h1>
          <ButtonStyled buttonStyle='black'>CONFIRA AS OFERTAS</ButtonStyled>
        </div>
      </StyledBannerSection>
      <StyledListSection>
        <ListProducts />
      </StyledListSection>
    </StyledMain>
    <Footer/>
    </>
  );
}



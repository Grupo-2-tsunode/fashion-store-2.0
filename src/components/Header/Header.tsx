import { AiOutlineShoppingCart } from 'react-icons/ai';
import StyledHeader from './StyledHeader'
import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import { TitleStyled, TypographyAll } from '../../styles/typography';

function Header() {

  const {setIsCartOpen} = useContext(GlobalContext)

  const handleCar = () => {
    setIsCartOpen(true)
  }

  return (
    <StyledHeader>
        <TitleStyled fontSize='bg' fontWidt='400'>FASHIONSTORE</TitleStyled>
        <button onClick={handleCar}>
          <AiOutlineShoppingCart size={32}/>
        </button>
    </StyledHeader>
  )
}

export default Header;
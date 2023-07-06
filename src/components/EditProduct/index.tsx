import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { ButtonStyled } from '../../styles/ButtonStyled'
import { TitleStyled } from '../../styles/typography'
import { EditProductStyled } from './styled'

export const EditProduct = () => {
    return(
        <EditProductStyled>
            <div className='modal__container'>
                <div className="header__modal">
                    <TitleStyled fontSize='bg' fontWidt='500'>EDITAR PRODUTO</TitleStyled>
                    <span>
                        <AiOutlineClose />
                    </span>
                </div>
                <input type="text" name="" id="" />
                <input type="number" name="" id="" />
                <input type="text" name="" id="" />
                <textarea name="" id=""></textarea>
                <div className='buttonAdd'>
                    <ButtonStyled buttonStyle='black'>
                       <AiFillEdit/> EDITAR PRODUTO
                    </ButtonStyled>
                </div>
            </div>
        </EditProductStyled>
    )
}
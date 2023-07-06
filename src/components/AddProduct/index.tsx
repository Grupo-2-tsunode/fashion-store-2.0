import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai'
import { TitleStyled } from '../../styles/typography'
import { AddProductStyled } from './styled'
import { ButtonStyled } from '../../styles/ButtonStyled'
import { useContext } from 'react'
import { AdmContext } from '../../providers/AdmContext/AdmContext'
import { InputComponent } from '../Input'

export const AddProduct = () => {

    const {setIsNewProductModalOpen} = useContext(AdmContext)

    const handleClose = () =>{
        setIsNewProductModalOpen(false)
    }

    return(
        <AddProductStyled>
            <div className='modal__container'>
                <div className="header__modal">
                    <TitleStyled fontSize='bg' fontWidt='500'>NOVO PRODUTO</TitleStyled>
                    <span onClick={handleClose}>
                        <AiOutlineClose />
                    </span>
                </div>
                <InputComponent placeholder='NOME' type='text'/>
                <InputComponent placeholder='PREÇO (R$)' type='number'/>
                <InputComponent placeholder='IMAGEM(URL)' type='text'/>
                <InputComponent placeholder='DESCRIÇÃO RESUMIDA' type='text'/>
                <textarea name="" id=""></textarea>
                <div className='buttonAdd'>
                    <ButtonStyled buttonStyle='black'>
                       <AiOutlinePlusCircle/> NOVO PRODUTO
                    </ButtonStyled>
                </div>
            </div>
        </AddProductStyled>
    )
}
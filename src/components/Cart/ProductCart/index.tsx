import { useContext } from 'react'
import { ICartProduct } from '../../../providers/GlobalContext/@types'
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContext'
import { StyledInput } from '../../Input/style'

interface IProductProps {
    product:ICartProduct
}

export const ProductCart = ({product}:IProductProps) => {

    const {updateCartFromInputs, removeProductFromCart} = useContext(GlobalContext)

    return(
        <li>
            <figure>
                <img src={product.image} alt="" />
            </figure>
            <div className='description'>
                <h1>{product.name}</h1>
                <StyledInput type='number' value={product.quantity} step={1} min={1} onKeyDown={(event)=>{event.preventDefault()}} onChange={(event)=>{
                    event.preventDefault()
                    updateCartFromInputs(event.target.value, product.id)
                }}/>
                <span>{product.price}</span>
            </div>
            <button onClick={(event)=>{
                event.preventDefault()
                removeProductFromCart(product.id)
            }}>-</button>
        </li>
    )
}
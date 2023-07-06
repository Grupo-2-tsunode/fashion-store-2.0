import { IProduct } from '../../../providers/GlobalContext/@types'

interface IProductProps {
    product:IProduct
}

export const ProductCat = ({product}:IProductProps) => {

    return(
        <li>
            <figure>
                <img src={product.image} alt="" />
            </figure>
            <div className='description'>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
            </div>
            <button>-</button>
        </li>
    )
}
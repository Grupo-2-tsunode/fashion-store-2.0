import { ContainerList, BoxOne, BoxTwo, CardProduct } from "./style";
import iconAdd from '../../assets/iconAddNewProduct.svg'
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import  iconEdit  from '../../assets/iconEditProduct.svg'
import  deleteIcon  from '../../assets/iconDeleteItem.svg'
import { AdmContext } from '../../providers/AdmContext/AdmContext';
import { AddProduct } from '../AddProduct';
function ListProduct() {

    const { ProductsList } = useContext(GlobalContext)
    const {setIsNewProductModalOpen,isNewProductModalOpen} = useContext(AdmContext)

    const handleAddProduct = ()=> {
        setIsNewProductModalOpen(true)
    }

    return (<>
        <section>
            <ContainerList>
                {isNewProductModalOpen ? <AddProduct></AddProduct> : null}
                <BoxOne>
                    <div className="InternalBoxOne">
                        <h2> PRODUTOS  </h2>
                        <p>  Gerencie seus produtos </p>
                    </div>
                    <div className="InternalBoxTwo">
                        <button onClick={handleAddProduct} > <img src={iconAdd} alt="" /> NOVO PRODUTO </button>
                    </div>
                </BoxOne>
                <BoxTwo>
                    <ul>
                        {ProductsList.map(element => {
                            return <li key={element.id}>
                                <CardProduct>
                                    <div className="BoxCardOne">
                                        <img src={element.image} alt="" />
                                    </div>
                                    <div className="BoxCardTwo">
                                        <p> {element.name} </p>
                                        <span> R$ {(element.price).toFixed(2)} </span>
                                    </div>
                                    <div className="BoxCardTree">
                                        <button> <img src={iconEdit} alt="" /> </button>
                                        <button> <img src={deleteIcon} alt="" /></button>
                                    </div>
                                </CardProduct>
                            </li>
                        })}
                    </ul>
                </BoxTwo>
            </ContainerList>
        </section>
    </>);
}

export default ListProduct;
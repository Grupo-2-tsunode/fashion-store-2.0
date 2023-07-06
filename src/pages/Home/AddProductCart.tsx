import { useContext } from "react";
import { IProduct } from "../../providers/GlobalContext/@types";
import StyledAddProductCart from "./StyledAddProductCart";
import { FaCartPlus  } from "react-icons/fa"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";

const AddProductCart = ({product} : {product : IProduct}) => {
  const { renderProduct } = useContext(GlobalContext)

  return (
    <StyledAddProductCart>
        <div>
        <FaCartPlus size={36} color="white" />
       </div>
      <Link to={`/product/${product.id}`} onClick={()=>renderProduct(product.id)}>Saiba Mais</Link>
      </StyledAddProductCart>
  );
}
export default AddProductCart;
;
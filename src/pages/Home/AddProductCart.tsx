import StyledAddProductCart from "./StyledAddProductCart";
import { FaCartPlus  } from "react-icons/fa"

const AddProductCart = () => {
  return (
    <StyledAddProductCart>
        <div >
        <FaCartPlus size={36} color="white" />
       </div>
      <span>Saiba Mais</span>
      </StyledAddProductCart>
  );
}
export default AddProductCart;
;